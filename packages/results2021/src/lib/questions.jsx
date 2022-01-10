import { h } from "preact";

import en from "../i18n/en.json";

export const questions = { ...en.questions };

export const axisOptions = Object.keys(questions).map((question_num) => {
  const question = questions[question_num].question;
  return (
    <option key={question_num} value={+question_num}>
      {`${question.slice(0, 48)}${question.length > 48 ? "..." : ""}`}
    </option>
  );
});
