import { h, Fragment } from "preact";

import { useD3 } from "../../hooks/useD3";
import { DEFAULT_DOT_SIZE, VIEWBOX } from "../../lib/constants";
import { xScale, yScale } from "../../lib/scales";
import { appendAxes } from "./scatterplot-axes";
import { brushFn, makeBrushTool } from "../../lib/viztools";
import { useMobileContext } from "../../context/mobile-context";

export default function Mess({
  data,
  pair,
  opacity,
  options,
  brushMap,
  dispatch,
}) {
  const isMobile = useMobileContext();
  const hasBrushing = Object.keys(brushMap).length > 0;

  function getClasses(d) {
    let classes = "dot";
    if (hasBrushing) {
      classes += brushMap[d.id] ? " brushed" : " notbrushed";
    }
    return classes;
  }

  const describesBox = (d) => d.x?.value[1] && d.y?.value[1];
  const boxData = data.filter(describesBox);

  const describesLineX = (d) => d.x?.value[1] && !d.y?.value[1];
  const lineXData = data.filter(describesLineX);

  const describesLineY = (d) => !d.x?.value[1] && d.y?.value[1];
  const lineYData = data.filter(describesLineY).slice(0, 4);

  const describesPoint = (d) => !d.x?.value[1] && !d.y?.value[1];
  const pointData = data.filter(describesPoint);

  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove();
      // append boxes
      svg
        .append("g")
        .selectAll("rect")
        .data(boxData)
        .join("rect")
        .attr("class", "rect")
        .attr("fill-opacity", opacity)
        .attr("x", (d) => xScale(d.x.value[0]))
        .attr("width", (d) =>
          Math.abs(xScale(d.x.value[1]) - xScale(d.x.value[0]))
        )
        .attr("y", (d) => yScale(d.y.value[1]))
        .attr("height", (d) =>
          Math.abs(yScale(d.y.value[1]) - yScale(d.y.value[0]))
        );

      // append X lines
      svg
        .append("g")
        .selectAll("rect")
        .data(lineXData)
        .join("rect")
        .attr("class", "rect")
        .attr("fill-opacity", opacity)
        .attr("x", (d) => xScale(d.x.value[0]))
        .attr("width", (d) =>
          Math.abs(xScale(d.x.value[1]) - xScale(d.x.value[0]))
        )
        .attr("y", (d) => yScale(d.y?.value[0] ?? 0) - DEFAULT_DOT_SIZE / 2)
        .attr("height", DEFAULT_DOT_SIZE);

      // append Y lines
      svg
        .append("g")
        .selectAll("rect")
        .data(lineYData)
        .join("rect")
        .attr("class", "rect")
        .attr("fill-opacity", opacity)
        .attr("x", (d) => xScale(d.x?.value[0] ?? 0) - DEFAULT_DOT_SIZE / 2)
        .attr("width", DEFAULT_DOT_SIZE)
        .attr("y", (d) => yScale(d.y.value[1]))
        .attr("height", (d) =>
          Math.abs(yScale(d.y.value[1]) - yScale(d.y.value[0]))
        );
      // .attr("height", (d) => yScale(Math.abs(d.y.value[1] - d.y.value[0])));

      // apped points
      svg
        .append("g")
        .selectAll("path")
        .data(pointData)
        .join("path")
        .attr("class", getClasses)
        .attr("stroke-width", options.size)
        .attr("stroke-opacity", opacity)
        .attr(
          "d",
          (d) =>
            `M${xScale(d.x?.value[0] ?? 0)}, ${yScale(d.y?.value[0] ?? 0)}h0`
        );

      // draw axes, columns
      appendAxes(svg);

      // add brushing on desktop
      if (!isMobile)
        svg.append("g").call(makeBrushTool(brushFn(data, pair, dispatch)));
    },
    [data, pair, brushMap, options.size, opacity]
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
