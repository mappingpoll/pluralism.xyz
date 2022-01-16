import { h } from "preact";

export function CollapsibleSection({ children, title, cb, isOpen }) {
  return (
    <section>
      <div class="collapse-title" onclick={cb}>
        <h1>{title}</h1>
        <h1 class="show-hide">
          <strong>{!isOpen ? "+" : "−"}</strong>
        </h1>
      </div>
      {isOpen && children}
      {isOpen && (
        <h1 class="show-hide" onclick={cb}>
          −
        </h1>
      )}
    </section>
  );
}
