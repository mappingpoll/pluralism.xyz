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

app.get("/:number(\\d{1,2})", (req, res) => {
  let { number } = req.params;
  number = +number;

  const thisPageConfig = pageConfig.pages[number];

  const opts = {
    ...pageConfig.default,
    ...thisPageConfig,
    previous: `/${number > 1 ? number - 1 : ""}`,
    next: thisPageConfig.next ?? `/${number + 1}`,
    questionNum: number,
    title: res.__(`${number}.title`),
    textContent: res.__(`${number}.textContent`),
    topContent: res.__(`${number}.topContent`),
    bottomContent: res.__(`${number}.bottomContent`),
    scaleLabelMax: res.__(`${number}.scaleLabelMax`),
    scaleLabelMidMax: res.__(`${number}.scaleLabelMidMax`),
    scaleLabelZero: res.__(`${number}.scaleLabelZero`),
    scaleLabelMidMin: res.__(`${number}.scaleLabelMidMin`),
    scaleLabelMin: res.__(`${number}.scaleLabelMin`),
  };

  res.render("interact", opts);
});

app.get("/comment", (req, res) => {
  const opts = { ...pageConfig.default, ...pageConfig.comment };
  opts.previous = `/${pageConfig.lastQ}`;
  opts.next = "/submit";
  opts.sectionTitle = res.__("comment.title");
  opts.sectionSubtitle = res.__("comment.subtitle");
  opts.topContent = res.__("comment.topContent");
  res.render("comment", opts);
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

app.get("/submit", (req, res) => {
  const opts = {
    ...pageConfig.default,
    ...pageConfig.submit,
    previous: "/comment",
    next: "#",
    sectionTitle: res.__("submit.title"),
    sectionSubtitle: res.__("submit.subtitle"),
    wantsComment: res.__("submit.form.wantsComment"),
    isGallery: res.__("submit.form.isGallery"),
    isNotGallery: res.__("submit.form.isNotGallery"),
    iWantResults: res.__("submit.form.iWantResults"),
    email: res.__("submit.form.email"),
    submit: res.__("submit.form.submit"),
    nextLabel: res.__("submit.nextLabel"),
  };
  res.render("submit", opts);
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
    reset: false,
    textContent: res.__("results.textContent"),
  };

  res.render("results", opts);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
