import { Pair } from "./questions";
import { graphs } from "../components/graphs";

export interface State {
  selectedUsers: string[];
  customPair: Pair;
  graph: keyof typeof graphs;
}

export const initialState: State = {
  selectedUsers: [],
  customPair: { x: "", y: "" },
  graph: "Rectangles",
};
