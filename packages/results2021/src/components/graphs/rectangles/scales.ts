import { scaleLinear } from "d3";

import { DOMAIN, MARGIN, DEFAULT_CANVAS_WIDTH, DEFAULT_CANVAS_HEIGHT } from "./constants";

const xScale = scaleLinear()
  .domain(DOMAIN)
  .range([MARGIN.left, MARGIN.left + DEFAULT_CANVAS_WIDTH]);

const yScale = scaleLinear()
  .domain(DOMAIN)
  .range([MARGIN.top + DEFAULT_CANVAS_HEIGHT, MARGIN.top]);

export { xScale, yScale };
