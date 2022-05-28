import { html } from "htm/preact";
import { css } from "@emotion/css";

const styles = css`
  a {
    background-color: inherit;
    color: inherit;

    ::selection,
    ::-moz-selection {
      background-color: inherit;
      color: inherit;
    }

    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export function SiteMenu() {
  return html`
    <h1 class=${styles}>
      <a href="https://nicolasgrenier.com" style="font-family: 'Times New Roman', Times, serif">Nicolas Grenier</a>
      <span style="font-weight: normal">
        ${" // "}
        <a href="https://pluralism.xyz/" style="font-size: 0.95em">pluralism.xyz</a>
      </span>
    </h1>
  `;
}
