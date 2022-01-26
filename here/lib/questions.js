"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.pairs = exports.axisOptions = exports.questions = void 0;
const en_json_1 = __importDefault(require("../assets/i18n/en.json"));
const { questions } = en_json_1.default;
exports.questions = questions;
const pairs = [];
exports.pairs = pairs;
const qs = Object.keys(questions);
for (let i = 0; i < qs.length; i += 2) {
    const x = qs[i];
    const y = (_a = qs[i + 1]) !== null && _a !== void 0 ? _a : "";
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
exports.axisOptions = axisOptions;
