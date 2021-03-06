import express from "express";
import i18n from "i18n";

import { dbClient, initDb } from "./database.js";
import OPTIONS from "./static/options.js";

const app = express();
const port = process.env.PORT ?? 3000;

initDb().catch(console.error);

i18n.configure({
  locales: ["en"],
  directory: "./locales",
  objectNotation: true,
  updateFiles: false,
  missingKeyFn: () => "",
});

app.set("views", "views");
app.set("view engine", "pug");

app.use(i18n.init);
app.use(express.static("static"));
app.use(express.json());

app.get("/", (req, res) => {
  const opts = { ...OPTIONS.default, ...OPTIONS.index };
  opts.sectionTitle = res.__("index.title");
  opts.sectionSubtitle = res.__("index.subtitle");
  opts.textContent = res.__("index.textContent");
  res.render("index", opts);
});

app.get("/:number(\\d{1,2})", (req, res) => {
  let { number } = req.params;
  number = +number;
  const opts = { ...OPTIONS.default, ...OPTIONS[`p${number}`] };
  opts.back = `/${number > 2 ? number - 1 : ""}`;
  opts.forward = `/${number === OPTIONS.lastQ ? "comment" : number + 1}`;
  opts.questionNum = number;
  opts.sectionTitle = res.__(`${number}.title`);
  opts.sectionSubtitle = res.__(`${number}.subtitle`);
  opts.textContent = res.__(`${number}.textContent`);
  if (opts.textContent) {
    res.render("index", opts);
  } else {
    opts.topContent = res.__(`${number}.topContent`);
    opts.scaleLabelMax = res.__(`${number}.scaleLabelMax`);
    opts.scaleLabelMidMax = res.__(`${number}.scaleLabelMidMax`);
    opts.scaleLabelZero = res.__(`${number}.scaleLabelZero`);
    opts.scaleLabelMidMin = res.__(`${number}.scaleLabelMidMin`);
    opts.scaleLabelMin = res.__(`${number}.scaleLabelMin`);
    res.render("interact", opts);
  }
});

app.get("/comment", (req, res) => {
  const opts = { ...OPTIONS.default, ...OPTIONS.comment };
  opts.back = `/${OPTIONS.lastQ}`;
  opts.forward = "/submit";
  opts.sectionTitle = res.__("comment.title");
  opts.sectionSubtitle = res.__("comment.subtitle");
  opts.topContent = res.__("comment.topContent");
  res.render("comment", opts);
});

const { insertEntry, listEntries } = dbClient();
app.post("/submit", (req, res) => {
  try {
    insertEntry(req.body)
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
    ...OPTIONS.default,
    ...OPTIONS.submit,
    back: "/comment",
    forward: "#",
    sectionTitle: res.__("submit.title"),
    sectionSubtitle: res.__("submit.subtitle"),
    wantsComment: res.__("submit.form.wantsComment"),
    isGallery: res.__("submit.form.isGallery"),
    isNotGallery: res.__("submit.form.isNotGallery"),
    iWantResults: res.__("submit.form.iWantResults"),
    email: res.__("submit.form.email"),
    submit: res.__("submit.form.submit"),
    forwardLabel: res.__("submit.forwardLabel"),
  };
  res.render("submit", opts);
});

app.get("/results", (req, res) => {
  const opts = {
    ...OPTIONS.default,
    reset: false,
    textContent: res.__("results.textContent"),
  };

  res.render("results", opts);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
