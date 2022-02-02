import { css, cx } from "@emotion/css";
import { html } from "htm/preact";
import { ComponentChildren } from "preact";
import { useState } from "preact/hooks";
import { wavyBorder, leftRightPadding, baseColor } from "../lib/style";

const styles = css`
  ${wavyBorder}

  ${leftRightPadding()}

  ${baseColor}

  & > div:first-child {
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }
`;

interface Props {
  title: string;
  children: ComponentChildren;
  open?: boolean;
  style?: string;
}

export function Collapsible({ children, title, open = false, style = css`` }: Props) {
  const [isOpen, setIsOpen] = useState(open);

  return html`
    <div class=${cx(styles, style)}>
      <div onclick=${() => setIsOpen(!isOpen)}>
        <h1>${title}</h1>
        <h1>${!isOpen ? "+" : "−"}</h1>
      </div>
      ${isOpen && children}
    </div>
  `;
}
