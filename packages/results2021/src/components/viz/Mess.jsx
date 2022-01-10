import { h, Fragment } from "preact";

import { useD3 } from "../../hooks/useD3";
import { DEFAULT_DOT_SIZE, VIEWBOX } from "../../lib/constants";
import { xScale, yScale } from "../../lib/scales";
// import { brushFn, makeBrushTool } from "../../lib/viztools";
// import { useMobileContext } from "../../hooks/useMobileContext";
import { appendAxes } from "./Axes";

export function Mess({
  data,
  options,
  brushMap,
  state,
  dispatch,
  // dispatch,
}) {
  // const isMobile = useMobileContext();
  // const hasBrushing = Object.keys(brushMap).length > 0;
  //
  // function getClasses(d) {
  //   let classes = "dot";
  //   if (hasBrushing) {
  //     classes += brushMap[d.id] ? " brushed" : " notbrushed";
  //   }
  //   return classes;
  // }

  function handleClick(ev) {
    const el = ev.target;
    const user = el.getAttribute("data-user");
    dispatch({ type: "SELECT", payload: user });
  }

  const describesRectangle = (d) => d.x?.value[1] && d.y?.value[1];
  const rectangles = data.filter(describesRectangle);

  const describesLineX = (d) => d.x?.value[1] && !d.y?.value[1];
  const linesX = data.filter(describesLineX);

  const describesLineY = (d) => !d.x?.value[1] && d.y?.value[1];
  const linesY = data.filter(describesLineY).slice(0, 4);

  const describesPoint = (d) => !d.x?.value[1] && !d.y?.value[1];
  const points = data.filter(describesPoint);

  const DEFAULT_COLOR = "#1a1a1a";
  const HIGHLIGHT_COLOR = "palevioletred";

  const MAX_AREA = 4; // 2 X 2;
  const MIN_OPACITY = 0.1;
  const MAX_OPACITY = 0.5;
  const OPACITY_RANGE = MAX_OPACITY - MIN_OPACITY;
  const MIN_LENGTH = 0.1;

  const len = ([a, b]) => {
    if (!a) return MIN_LENGTH;
    if (!b) return MIN_LENGTH;
    let l = Math.abs(b - a);

    return l > MIN_LENGTH ? l : MIN_LENGTH;
  };
  const area = (d) => len(d.x?.value ?? [0, 0]) * len(d.y?.value ?? [0, 0]);
  const getOpacity = (d) => {
    const r = area(d) / MAX_AREA;
    return MIN_OPACITY + OPACITY_RANGE - OPACITY_RANGE * r;
  };

  const getColor = (user) =>
    user === state.user ? HIGHLIGHT_COLOR : DEFAULT_COLOR;

  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove();
      // append boxes
      svg
        .append("g")
        .selectAll("rect")
        .data(rectangles)
        .join("rect")
        .attr("class", "rect")
        .attr("fill-opacity", getOpacity)
        .attr("fill", (d) => getColor(d.user))
        .attr("x", (d) => xScale(d.x.value[0]))
        .attr("width", (d) =>
          Math.abs(xScale(d.x.value[1]) - xScale(d.x.value[0]))
        )
        .attr("y", (d) => yScale(d.y.value[1]))
        .attr("height", (d) =>
          Math.abs(yScale(d.y.value[1]) - yScale(d.y.value[0]))
        )
        .attr("data-user", (d) => d.user)
        .on("click", handleClick);

      // append X lines
      svg
        .append("g")
        .selectAll("rect")
        .data(linesX)
        .join("rect")
        .attr("class", "rect")
        .attr("fill", (d) => getColor(d.user))
        .attr("fill-opacity", getOpacity)
        .attr("x", (d) => xScale(d.x.value[0]))
        .attr("width", (d) =>
          Math.abs(xScale(d.x.value[1]) - xScale(d.x.value[0]))
        )
        .attr("y", (d) => yScale(d.y?.value[0] ?? 0) - DEFAULT_DOT_SIZE / 2)
        .attr("height", DEFAULT_DOT_SIZE)
        .attr("data-user", (d) => d.user)
        .on("click", handleClick);

      // append Y lines
      svg
        .append("g")
        .selectAll("rect")
        .data(linesY)
        .join("rect")
        .attr("class", "rect")
        .attr("fill", (d) => getColor(d.user))
        .attr("fill-opacity", getOpacity)
        .attr("x", (d) => xScale(d.x?.value[0] ?? 0) - DEFAULT_DOT_SIZE / 2)
        .attr("width", DEFAULT_DOT_SIZE)
        .attr("y", (d) => yScale(d.y.value[1]))
        .attr("height", (d) =>
          Math.abs(yScale(d.y.value[1]) - yScale(d.y.value[0]))
        )
        .attr("data-user", (d) => d.user)
        .on("click", handleClick);
      // .attr("height", (d) => yScale(Math.abs(d.y.value[1] - d.y.value[0])));

      // apped points
      svg
        .append("g")
        .selectAll("rect")
        .data(points)
        .join("rect")
        .attr("class", "rect")
        .attr("fill", (d) => getColor(d.user))
        .attr("fill-opacity", getOpacity)
        .attr("x", (d) => xScale(d.x?.value[0] ?? 0) - DEFAULT_DOT_SIZE / 2)
        .attr("width", DEFAULT_DOT_SIZE)
        .attr("y", (d) => yScale(d.y?.value[0] ?? 0) - DEFAULT_DOT_SIZE / 2)
        .attr("height", DEFAULT_DOT_SIZE)
        .attr("data-user", (d) => d.user)
        .on("click", handleClick);

      // draw axes, columns
      appendAxes(svg);

      // add brushing on desktop
      // if (!isMobile)
      //   svg.append("g").call(makeBrushTool(brushFn(data, pair, dispatch)));
    },
    [data, brushMap, options.size]
  );

  return (
    <>
      <svg
        ref={ref}
        viewBox={VIEWBOX.join(",")}
        width={VIEWBOX[2]}
        height={VIEWBOX[3]}
        style="width: 100%; height: auto;"
      />
    </>
  );
}
