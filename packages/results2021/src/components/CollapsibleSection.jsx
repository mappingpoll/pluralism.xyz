import { h } from "preact";

import "./CollapsibleSection";

export function CollapsibleSection({ children, title, cb, isOpen }) {
  return (
    <section style={!isOpen && "padding-bottom: 0"}>
      <div
        style="display: flex; justify-content: space-between; align-items: center"
        onclick={cb}
      >
        <h1>{title}</h1>
        <h1>
          <strong>{!isOpen ? "+" : "−"}</strong>
        </h1>
      </div>
      {isOpen && children}
      {isOpen && (
        <h1 style="text-align: right; cursor: pointer;" onclick={cb}>
          <strong>−</strong>
        </h1>
      )}
    </section>
  );
}
