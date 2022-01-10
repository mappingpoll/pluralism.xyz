import { h } from "preact";
import en from "../i18n/en.json";

export const questions = { ...en.questions };

export const axisOptions = Object.keys(questions).map((question_num) => (
  <option key={question_num} value={+question_num}>
    {`${questions[question_num].question.slice(0, 32)}...`}
  </option>
));
