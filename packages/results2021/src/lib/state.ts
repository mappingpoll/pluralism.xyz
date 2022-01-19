import { BASE_OPACITY, OPACITY_K } from "./constants";
import { Pair } from "./questions";

export interface State {
  selectedUsers: string[];
  customPair: Pair;
  opacity: {
    base: number;
    k: number;
  };
  graph: string;
}

export const initialState: State = {
  selectedUsers: [],
  customPair: { x: "", y: "" },
  opacity: {
    base: BASE_OPACITY,
    k: OPACITY_K,
  },
  graph: "Rectangles",
};
