import dotenv from "dotenv";

dotenv.config();

import cookieParser from "cookie-parser";
import session from "cookie-session";
import compression from "compression";
import debug from "debug";
import express from "express";
import fs from "fs";
import helmet from "helmet";
import i18n from "i18n";
import winston from "winston";
import { parseDocument } from "yaml";

import { Database } from "./database.js";
import { keyMap } from "./static/const.js";

const db = new Database();

const log = debug("app");
const error = debug("app:error");

winston.exceptions.handle(
  new winston.transports.File({ filename: "errors.log", handleExceptions: true })
);

try {
  db.init();
} catch (e) {
  error("DB init failed, exiting...");
  process.exit(1);
}

const port = process.env.PORT ?? 3000;

const pageConfigFile = fs.readFileSync("./pages.yaml", "utf8");
const pageConfig = parseDocument(pageConfigFile).toJS();

i18n.configure({
  cookie: "lang",
  directory: "./locales",
  locales: ["en", "fr"],
  defaultLocale: "fr",
  objectNotation: true,
  updateFiles: false,
  missingKeyFn: () => "missing translation",
});

const app = express();

app.set("views", "views");
app.set("view engine", "pug");

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        "default-src": ["'none'"],
        "connect-src": ["'self'"],
        "font-src": ["'self'", "https://fonts.gstatic.com/s/sourcecodepro/v21/"],
        "img-src": ["'self'", "data:"],
        "script-src": ["'self'", "'unsafe-inline'"],
        "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com/css2"],
      },
    },
  })
);
app.use(compression());
app.use(
  session({
    name: "session",
    secret: process.env.SESSION_SECRET ?? "secret",
    sameSite: "strict",
  })
);
app.use(cookieParser());
app.use(i18n.init);
app.use(express.static("static"));
app.use(express.json());

app.get("/", (req, res) => {
  if (req.query?.lang == "en" || req.query?.lang == "fr") {
    res.cookie("lang", req.query.lang, { maxAge: 900000, httpOnly: true });
    res.redirect("/");
    return;
  }
  const opts = { ...pageConfig.default, ...pageConfig.pages.landing };
  opts.reset = !req.session.isNew;
  opts.title = res.__("landing.title");
  opts.textContent = res.__("landing.textContent");
  opts.otherLang = res.__("otherLang");

  req.session.visits = (req.session.visits ?? 0) + 1;
  res.render("landing", opts);
});

app.get("/instructions", (req, res) => {
  const opts = { ...pageConfig.default, ...pageConfig.pages.instructions };
  opts.title = res.__("instructions.title");
  opts.textContent = res.__("instructions.textContent");

  res.render("textonly", opts);
});

function getQuestionText(res, key, results = false) {
  const page = pageConfig.pages[key];
  const unit = page.unit ? (page.unit === "years" ? ` ${res.__("years")}` : page.unit) : "";

  const obj = {
    ...page,
    unit,
    title: res.__(`${key}.title`),
    textContent: res.__(`${key}.textContent`),
    topContent: res.__(`${key}.topContent`),
    bottomContent: res.__(`${key}.bottomContent`),
    scaleLabelMax: res.__(`${key}.scaleLabelMax`),
    scaleLabelMidMax: res.__(`${key}.scaleLabelMidMax`),
    scaleLabelZero: res.__(`${key}.scaleLabelZero`),
    scaleLabelMidMin: res.__(`${key}.scaleLabelMidMin`),
    scaleLabelMin: res.__(`${key}.scaleLabelMin`),
    yLabelMax: res.__(`${key}.yLabelMax`),
  };

  if (results) obj.topContent = res.__(`results.${key}`)

  return obj;
}

app.get("/:number(\\d{1,2}):letter([a-z]?)", (req, res) => {
  let { number, letter } = req.params;

  const key = `${number}${letter ?? ""}`;
  const thisPageConfig = pageConfig.pages[key];

  number = +number;
  const opts = {
    ...pageConfig.default,
    ...thisPageConfig,
    previous: thisPageConfig.previous ?? `/${number > 0 ? number - 1 : ""}`,
    next: thisPageConfig.next ?? `/${number + 1}`,
    questionNum: number,
    ...getQuestionText(res, key),
  };

  if (letter) {
    res.render("textonly", opts);
  } else if (number == 14) {
    res.render("pcode", opts);
  } else {
    res.render("interact", opts);
  }
});

app.get("/submit", (req, res) => {
  const opts = {
    ...pageConfig.default,
    ...pageConfig.pages.submit,
    title: res.__("submit.title"),
    topText: res.__("submit.topText"),
    bottomText: res.__("submit.bottomText"),
  };
  res.render("submit", opts);
});

app.post("/submit", (req, res) => {
  try {
    db.insert(req.body);
  } catch (e) {
    res.redirect(500, "/error");
    return;
  }

  res.redirect("/results");
});

app.get("/data", (req, res) => {
  db.list()
    .then(d => res.json(d))
    .catch(() => res.redirect(500, "/error"));
});

app.get("/results", (req, res) => {
  const opts = {
    ...pageConfig.default,
    ...pageConfig.pages.results,
    title: res.__("results.title"),
    textContent: res.__("results.textContent"),
    keyMap: JSON.stringify(keyMap),
  };

  res.render("results", opts);
});

app.get("/results-wip", (req, res) => {
  if (req.query?.lang == "en" || req.query?.lang == "fr") {
    res.cookie("lang", req.query.lang, { maxAge: 900000, httpOnly: true });
    res.redirect("/results-wip");
    return;
  }

  const legendText = {
    legend: res.__("results.legend"),
    answers: res.__("results.answers"),
  };
  const opts = {
    ...pageConfig.default,
    ...pageConfig.pages.results,
    title: res.__("results.title"),
    credits: res.__("results.credits"),
    textContent: res.__("results.textContent"),
    resultsTitle: res.__("results.results"),
    questionsA: res.__("results.questions-A"),
    questionsB: res.__("results.questions-B"),
    commentsTitle: res.__("results.comments"),
    commentsQ: res.__("results.commentsQ"),
    legendText: JSON.stringify(legendText),
  };
  res.render("results-wip", opts);
});

app.get("/error", (req, res) => {
  res.render("error");
});

app.get("/reset", (req, res) => {
  req.session = null;
  res.clearCookie("lang");
  res.redirect("/");
});

app.get("/question/:key", (req, res) => {
  const key = req.params.key;
  const results = req.query.results == "true";

  res.json({
    title: res.__(`${key}.title`),
    ...pageConfig.pages[key],
    ...getQuestionText(res, key, results),
  });
});

if (process.env.NODE_ENV === "development") {
  app.get("/populate", (req, res) => {
    db.populate(+req.query.n)
      .then(() => res.redirect("/data"))
      .catch(() => res.redirect(500, "/error"));
  });

  app.get("/clear", (req, res) => {
    db.clear()
      .then(() => res.redirect("/data"))
      .catch(() => res.redirect(500, "/error"));
  });
}

app.listen(port, () => {
  log(`Listening at http://localhost:${port}`);
});
