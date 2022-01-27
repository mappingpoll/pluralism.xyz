import { BASE_OPACITY, OPACITY_K } from "./constants";
import { Pair } from "./questions";
import { graphs } from "../components/graphs";

export interface State {
  selectedUsers: string[];
  customPair: Pair;
  opacity: {
    base: number;
    k: number;
  };
  graph: keyof typeof graphs;
}

export const initialState: State = {
  selectedUsers: [],
  customPair: { x: "21", y: "21" },
  opacity: {
    base: BASE_OPACITY,
    k: OPACITY_K,
  },
  graph: "Boxes",
};
