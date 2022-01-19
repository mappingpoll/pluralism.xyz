import { css } from "@emotion/css";
import { html } from "htm/preact";
import { inverted } from "../lib/style";

const styles = (visible: boolean) => css`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  padding: 0 0.5rem;

  cursor: pointer;

  ${inverted}

  img {
    display: inline-block;
    height: 1em;
    padding-top: 0.3em;
  }

  ${!visible &&
  css`
    opacity: 0;
    pointer-events: none;
    cursor: default;
  `}
`;

export function BackToTop({ visible }: { visible: boolean }) {
  function handleClick() {
    if (window.location.hash === "#maps") {
      window.location.replace("#");
    } else {
      window.location.replace("#maps");
    }
  }

  return html`
    <div class=${styles(visible)} onclick=${handleClick}>
      <h3>Go up <img src="/images/up-arrow.svg" /></h3>
    </div>
  `;
}
