import { css } from "@emotion/css";
import { select } from "d3";
import { html } from "htm/preact";
import { useCallback, useEffect, useMemo, useRef } from "preact/hooks";

import { color, getFill } from "../../lib/style";
import { MIN_OPACITY, OPACITY_RANGE, VIEWBOX } from "../../lib/constants";

import { Points, XYDatum } from "../../lib/data";
import { ActionType } from "../../lib/reducer";
import { xScale, yScale } from "../../lib/scales";
import { isClientUser } from "../../lib/user";
import { appendAxes } from "./Axes";
import { Datum, LineX, LineY, Point, GraphProps, Rect } from "./types";
import { TwoDee } from "./TwoDee";
import { describesLineX, describesLineY, describesRectangle } from "./dataTransform";

const styles = css`
  width: 100%;
  height: auto;

  rect:hover {
    fill: ${color.hoverBg};
    fill-opacity: 1;
  }
`;

const MAX_AREA = 4; // 2 X 2;
const MIN_LENGTH = 0.1;
const MIN_RECT_SIZE = 24;

const len = ([a, b]: Points) => {
  if (!a && !b) return MIN_LENGTH;
  if (!a || !b) return Math.abs(a ?? (b as number));

  const l = Math.abs(b - a);
  return l > MIN_LENGTH ? l : MIN_LENGTH;
};

const area = (d: XYDatum) => (d.x ? len(d.x) : MIN_LENGTH) * (d.y ? len(d.y) : MIN_LENGTH);

const sortFn = (a: Datum, b: Datum) => b.area - a.area;

export function Rectangles({ data, reducer, pair }: GraphProps) {
  const { state, dispatch } = reducer;

  const isSelected = useCallback((user: string) => state.selectedUsers.includes(user), [state.selectedUsers]);

  const getOpacity = useCallback(
    (d: Datum) => {
      if (isClientUser(d.user) || isSelected(d.user)) return 1;
      const r = d.area / MAX_AREA;
      return MIN_OPACITY + OPACITY_RANGE - OPACITY_RANGE * r;
    },
    [isSelected],
  );

  const groups = useMemo(() => {
    let rectangles: Rect[] = [];
    let linesX: LineX[] = [];
    let linesY: LineY[] = [];
    const normal: Point[] = [];
    const highlighted: Point[] = [];

    for (const datum of data) {
      const d = { ...datum, area: area(datum) };
      if (describesRectangle(d)) {
        rectangles.push(d as Rect);
      } else if (describesLineX(d)) {
        linesX.push(d as LineX);
      } else if (describesLineY(d)) {
        linesY.push(d as LineY);
      } else if (isClientUser(d.user) || isSelected(d.user)) {
        highlighted.push(d as Point);
      } else {
        normal.push(d as Point);
      }
    }

    rectangles = rectangles.sort(sortFn);
    linesX = linesX.sort(sortFn);
    linesY = linesY.sort(sortFn);
    const points = { normal, highlighted };

    return { rectangles, linesX, linesY, points };
  }, [data, isSelected]);

  const handleClick = useCallback(
    (ev: MouseEvent) => {
      const el = ev.target as SVGElement;
      const user = el.getAttribute("data-user") ?? "";
      let action;
      if (isSelected(user)) action = ev.shiftKey ? ActionType.SelectRemove : ActionType.SelectNone;
      else action = ev.shiftKey ? ActionType.SelectAdd : ActionType.SelectOne;
      dispatch({ type: action, payload: user });
    },
    [dispatch, isSelected],
  );

  const ref = useRef<SVGElement>();

  useEffect(() => {
    if (ref.current != null) {
      const svg = select(ref.current);

      svg.selectAll("*").remove();
      // append boxes
      svg
        .append("g")
        .selectAll("rect")
        .data(groups.rectangles)
        .join("rect")
        .attr("fill", d => getFill(state, d.user))
        .attr("fill-opacity", getOpacity)
        .attr("x", d => xScale(d.x[0]))
        .attr("width", d => Math.abs(xScale(d.x[1]) - xScale(d.x[0])))
        .attr("y", d => yScale(d.y[1]))
        .attr("height", d => Math.abs(yScale(d.y[1]) - yScale(d.y[0])))
        .attr("data-user", d => d.user)
        .on("click", handleClick);

      // append X lines
      svg
        .append("g")
        .selectAll("rect")
        .data(groups.linesX)
        .join("rect")
        .attr("fill", d => getFill(state, d.user))
        .attr("fill-opacity", getOpacity)
        .attr("x", d => xScale(d.x[0]))
        .attr("width", d => Math.abs(xScale(d.x[1]) - xScale(d.x[0])))
        .attr("y", d => yScale(d.y?.[0] ?? 0) - MIN_RECT_SIZE / 2)
        .attr("height", MIN_RECT_SIZE)
        .attr("data-user", d => d.user)
        .on("click", handleClick);

      // append Y lines
      svg
        .append("g")
        .selectAll("rect")
        .data(groups.linesY)
        .join("rect")
        .attr("fill", d => getFill(state, d.user))
        .attr("fill-opacity", getOpacity)
        .attr("x", d => xScale(d.x?.[0] ?? 0) - MIN_RECT_SIZE / 2)
        .attr("width", MIN_RECT_SIZE)
        .attr("y", d => yScale(d.y[1]))
        .attr("height", d => Math.abs(yScale(d.y[1]) - yScale(d.y[0])))
        .attr("data-user", d => d.user)
        .on("click", handleClick);
      // .attr("height", (d) => yScale(Math.abs(d.y.[1] - d.y.[0])));

      // apped unselected points
      svg
        .append("g")
        .selectAll("rect")
        .data(groups.points.normal)
        .join("rect")
        .attr("fill", css`var(--base-grey)`)
        .attr("fill-opacity", getOpacity)
        .attr("x", d => xScale(d.x?.[0] ?? 0) - MIN_RECT_SIZE / 2)
        .attr("width", MIN_RECT_SIZE)
        .attr("y", d => yScale(d.y?.[0] ?? 0) - MIN_RECT_SIZE / 2)
        .attr("height", MIN_RECT_SIZE)
        .attr("data-user", d => d.user)
        .on("click", handleClick);

      // apped unselected points
      svg
        .append("g")
        .selectAll("rect")
        .data(groups.points.highlighted)
        .join("rect")
        .attr("fill", d => getFill(state, d.user))
        .attr("fill-opacity", getOpacity)
        .attr("x", d => xScale(d.x?.[0] ?? 0) - MIN_RECT_SIZE / 2)
        .attr("width", MIN_RECT_SIZE)
        .attr("y", d => yScale(d.y?.[0] ?? 0) - MIN_RECT_SIZE / 2)
        .attr("height", MIN_RECT_SIZE)
        .attr("data-user", d => d.user)
        .on("click", handleClick);

      // draw axes, columns
      appendAxes(svg);
    }
  }, [
    getOpacity,
    groups.linesX,
    groups.linesY,
    groups.points.highlighted,
    groups.points.normal,
    groups.rectangles,
    handleClick,
    state,
  ]);

  return html`
    <${TwoDee} pair=${pair}>
      <svg ref=${ref} viewBox=${VIEWBOX.join(",")} width=${VIEWBOX[2]} height=${VIEWBOX[3]} class=${styles} />
    <//>
  `;
}
