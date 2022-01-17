import { html } from "../lib/utils";

export function SiteMenu() {
  return html`<div class="site-menu">
    <h1>
      <a href="https://nicolasgrenier.com" style="font-family: 'Times New Roman', Times, serif">Nicolas Grenier</a>
      <span style="font-weight: normal">
        ${" // "}
        <a href="https://pluralism.xyz/" style="font-size: 0.95em">pluralism.xyz</a>
      </span>
    </h1>
  </div>`;
}
