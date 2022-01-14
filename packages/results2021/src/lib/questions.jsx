import { h } from "preact";

import en from "../i18n/en.json";
import { pairwiseQuestions } from "./stats";

export const questions = { ...en.questions };

export const { pairs } = pairwiseQuestions({ questions });

const options = [
  "Distracted / Focused",
  "Art and political change",
  "Age",
  "Gender",
  "Money / Income",
  "Privilege",
  "Background/Culture",
  "Taking care of others",
  "Change / Past",
  "Change / Future",
  "Direction humanity is taking",
  "Responsibility for the future",
  "Technology / Regression, progress",
  "Impact of technology",
  "Intergenerational justice",
  "Accountability/Making amends",
  "All Good / If It goes well",
  "Hell/If all goes wrong",
  "Redistribution of property",
  "New order / Happy or not",
  "Role in shaping the future",
  "Values / Will change or not",
  "Answers / Accuracy",
  "Concerns / Relevant or not",
];

export const axisOptions = Object.keys(questions).map((question_num, i) => {
  return (
    <option key={question_num} value={+question_num}>
      {options[i]}
    </option>
  );
});
