import { html } from "../lib/utils";

export function CollapsibleSection({ children, title, cb, isOpen }) {
  return html`<section>
    <div class="collapse-title" onclick="${cb}">
      <h1>${title}</h1>
      <h1 class="show-hide">
        <strong>${!isOpen ? "+" : "−"}</strong>
      </h1>
    </div>
    ${isOpen && children} ${isOpen && html`<h1 class="show-hide" onclick=${cb}>−</h1>`}
  </section>`;
}
