import { html } from "htm/preact";
import { css } from "@emotion/css";
import { Pair, questions } from "../../lib/questions";
import { VNode } from "preact";

interface Props {
  pair: Pair;
  children: VNode;
}

export function TwoDee({ pair, children }: Props) {
  const { x, y } = pair;

  return html`<div class=${styles}>
    <div class="graph">${children}</div>

    <div class="right">
      <div class="label">${questions[x].max}</div>
    </div>
    <div class="left">
      <div class="label">${questions[x].min}</div>
    </div>
    <div class="top">
      <div class="label">${questions[y].max}</div>
    </div>
    <div class="bottom">
      <div class="label">${questions[y].min}</div>
    </div>
  </div>`;
}

const styles = css`
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas:
    ". top ."
    "left graph right"
    ". bottom .";
  width: 100%;

  .graph {
    grid-area: graph;
    align-self: center;
    justify-self: center;
    max-width: min(40vh, 50vw);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 1rem;
  }
  /* GRAPH LABELS */

  .label {
    text-align: center;
    max-width: 35ch;
  }

  .top,
  .bottom,
  .left,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .top {
    grid-area: top;
  }

  .bottom {
    grid-area: bottom;
  }

  .left,
  .right {
    flex-direction: column;
  }

  .left {
    grid-area: left;
    align-items: flex-end;
  }
  .right {
    grid-area: right;
    align-items: flex-start;
  }

  @media only screen and (max-device-width: 414px) {
    .vizContainer {
      max-width: 100%;
    }

    .graph {
      max-width: 70vw;
      margin: 0;
    }

    .label {
      font-size: 0.9em;
    }

    .top .label,
    .bottom .label {
      max-width: 25ch;
    }

    .right .label,
    .left .label {
      transform: rotate(180deg);
      writing-mode: vertical-rl;
      max-height: 25ch;
      line-height: 0.9;
    }

    .left,
    .right {
      align-items: center;
    }
  }
`;
