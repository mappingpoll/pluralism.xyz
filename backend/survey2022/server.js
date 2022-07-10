import express from "express";
import compression from "compression";
import i18n from "i18n";
import cookieParser from "cookie-parser";

import { Client, initDb } from "./database.js";
import { parseDocument } from "yaml";
import fs from "fs";

initDb();

const dbClient = Client();

const port = process.env.PORT ?? 3000;

const pageConfigFile = fs.readFileSync("./pages.yaml", "utf8");
const pageConfig = parseDocument(pageConfigFile).toJS();

i18n.configure({
  cookie: "lang",
  directory: "./locales",
  defaultLocale: "en",
  objectNotation: true,
  updateFiles: false,
  missingKeyFn: () => "missing translation",
});

const app = express();

app.set("views", "views");
app.set("view engine", "pug");

app.use(compression());
app.use(cookieParser());
app.use(i18n.init);
app.use(express.static("static"));
app.use(express.json());

app.get("/", (req, res) => {
  if (req.query?.lang == "en" || req.query?.lang == "fr") {
    res.cookie("lang", req.query.lang);
    res.redirect("/");
    return;
  }
  const opts = { ...pageConfig.default, ...pageConfig.pages.landing };
  opts.title = res.__("landing.title");
  opts.textContent = res.__("landing.textContent");
  opts.otherLang = res.__("otherLang");

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
    previous: thisPageConfig.previous ?? `/${number > 1 ? number - 1 : ""}`,
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
    dbClient
      .insertEntry(req.body)
      .catch(console.error)
      .finally(() => console.log("Successfully inserted entry"));
    res.status(200);
    res.send();
  } catch (e) {
    console.error(e);
  }
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

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
