import en from "../assets/i18n/en.json";

interface Questions {
  [num: string]: {
    title: string;
    question: string;
    max: string;
    midmax?: string;
    zero?: string;
    midmin?: string;
    min: string;
  };
}

const { questions }: { questions: Questions } = en;

export interface Pair {
  x: string;
  y: string;
}

const pairs: Pair[] = [];
const qs = Object.keys(questions);
for (let i = 0; i < qs.length; i += 2) {
  const x = qs[i];
  const y = qs[i + 1] ?? "";
  pairs.push({ x, y });
}

const axisOptions = [
  "Distracted / Focused",
  "Art & political change",
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

export { questions, axisOptions, pairs };
