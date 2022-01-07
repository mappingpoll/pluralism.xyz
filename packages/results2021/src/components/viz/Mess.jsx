import { h, Fragment } from "preact";
import { useD3 } from "../../hooks/useD3";
import { VIEWBOX } from "../../lib/constants";
import { xScale, yScale } from "../../lib/scales";
import { appendAxes } from "./scatterplot-axes";
import { brushFn, isValidDatum, makeBrushTool } from "../../lib/viztools";
import { useMobileContext } from "../../context/mobile-context";

export default function Mess({
  data,
  pair,
  options,
  brushMap,
  dispatch,
}) {
  let [x, y] = pair;
  const isMobile = useMobileContext();
  const hasBrushing = Object.keys(brushMap).length > 0;

  // function getClasses(d) {
  //   let classes = "dot";
  //   if (hasBrushing) {
  //     classes += brushMap[d.id] ? " brushed" : " notbrushed";
  //   }
  //   return classes;
  // }

  const describesBox = d => d.x?.value[1] && d.y?.value[1];
  const boxData = data.filter(describesBox);
  const describesLine = d => (!d.x?.value[1] && d.y?.value[1]) || (d.x?.value[1] && !d.y?.value[1]);
  const lineData = data.filter(describesLine);
  const describesPoint = d => !d.x?.value[1] && !d.y?.value[1]
  const pointData = data.filter(describesPoint);

  console.log({boxData})
  const ref = useD3(
    svg => {
      svg.selectAll("*").remove();
      // append boxes
      svg
        .append("g")
        .selectAll("rect")
        .data(boxData)
        .join("rect")
        .attr("stroke-width", options.size)
        .attr("stroke-opacity", options.opacity)
        .attr("fill", "darkgrey")
        .attr("x", d => xScale(d.x.value[0]))
        .attr("width", d => xScale(d.x.value[1] - d.x.value[0]))
        .attr("y", d => yScale(d.y.value[0]))
        .attr("height", d => yScale(d.y.value[1] - d.y.value[0]))

      // draw axes, columns
      appendAxes(svg);

      // add brushing on desktop
      if (!isMobile)
        svg.append("g").call(makeBrushTool(brushFn(data, pair, dispatch)));
    },
    [data, pair, brushMap, options.size, options.opacity]
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
