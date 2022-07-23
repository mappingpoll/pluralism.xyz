import express from "express";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import compression from "compression";
import i18n from "i18n";

import { Client, initDb } from "./database.js";
import { parseDocument } from "yaml";
import fs from "fs";

const pgPool = initDb();

const dbClient = Client();

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

app.use(compression());
app.use(
  cookieSession({
    name: "session",
    secret: process.env.SESSION_SECRET ?? "secret",
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
  }
  req.session.visits = (req.session.visits ?? 0) + 1;
  const opts = { ...pageConfig.default, ...pageConfig.pages.landing };
  opts.title = res.__("landing.title");
  opts.textContent = res.__("landing.textContent");
  opts.otherLang = res.__("otherLang");
  opts.reset = !req.session.isNew;

  res.render("landing", opts);
});

app.get("/instructions", (req, res) => {
  const opts = { ...pageConfig.default, ...pageConfig.pages.instructions };
  opts.title = res.__("instructions.title");
  opts.textContent = res.__("instructions.textContent");

  res.render("landing", opts);
});

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
    title: res.__(`${key}.title`),
    textContent: res.__(`${key}.textContent`),
    topContent: res.__(`${key}.topContent`),
    bottomContent: res.__(`${key}.bottomContent`),
    scaleLabelMax: res.__(`${key}.scaleLabelMax`),
    scaleLabelMidMax: res.__(`${key}.scaleLabelMidMax`),
    scaleLabelZero: res.__(`${key}.scaleLabelZero`),
    scaleLabelMidMin: res.__(`${key}.scaleLabelMidMin`),
    scaleLabelMin: res.__(`${key}.scaleLabelMin`),
  };

  if (letter) {
    res.render("textonly", opts);
  } else {
    res.render("interact", opts);
  }
});

app.get("/submit", (req, res) => {
  const opts = {
    ...pageConfig.default,
    ...pageConfig.pages.submit,
    title: res.__("submit.title"),
    textContent: res.__("submit.textContent"),
  };
  res.render("submit", opts);
});

app.post("/submit", (req, res) => {
  try {
    dbClient.insertEntry(req.body);
  } catch (e) {
    console.error(e);
    res.status(500).redirect("/error");
    return;
  }

  // destroy the session
  req.session = null;
  res.status(200);

  res.redirect("/results");
});

app.get("/data", (req, res) => {
  dbClient
    .listEntries()
    .then(d => res.json(d))
    .catch(console.error);
});

app.get("/results", (req, res) => {
  const opts = {
    ...pageConfig.default,
    ...pageConfig.pages.results,
    title: res.__("results.title"),
    textContent: res.__("results.textContent"),
  };

  res.render("results", opts);
});

app.get("/error", (req, res) => {
  res.render("error");
});

app.get("/reset", (req, res) => {
  req.session = null;
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
