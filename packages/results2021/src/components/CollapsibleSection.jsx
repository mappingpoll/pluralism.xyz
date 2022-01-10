import { h } from "preact";

import "./CollapsibleSection";

export function CollapsibleSection({ children, title, cb, isOpen }) {
  return (
    <section class={isOpen ? "open" : "collapsed"}>
      <div class="title" onclick={cb}>
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
