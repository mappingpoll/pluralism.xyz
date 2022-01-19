import { VNode } from "preact";
import { Boxes } from "./graphs/Boxes";
import { Rectangles } from "./graphs/Rectangles";
import { Props } from "./graphs/types";

interface Graph {
  [key: string]: (props: Props) => VNode;
}

export const Graph: Graph = {
  Rectangles,
  Boxes,
};
