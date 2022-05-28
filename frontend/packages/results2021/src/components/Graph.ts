import { html } from "htm/preact";
import { useMemo } from "preact/hooks";

import { Pair } from "../lib/questions";
import { mapPairToXYData } from "../lib/data";
import { Reducer } from "../lib/reducer";
import { graphs } from "./graphs";
import { Graph } from "./graphs/types";

function PickGraph(name: string): Graph {
  switch (name.toLowerCase()) {
    case "rectangles":
      return graphs.Rectangles.value;
    case "boxes":
      return graphs.Boxes.value;
    default:
      throw new Error(`Unknown graph ${name}`);
  }
}

interface Props {
  pair: Pair;
  reducer: Reducer;
}

export function Graph({ pair, reducer }: Props) {
  const data = useMemo(() => mapPairToXYData(pair), [pair]);

  return html` <${PickGraph(reducer.state.graph)} pair=${pair} data=${data} reducer=${reducer} /> `;
}
