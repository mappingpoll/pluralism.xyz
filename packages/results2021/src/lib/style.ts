import { css } from "@emotion/css";
import { State } from "./state";
import { isClientUser } from "./user";

export const color = {
  bg: "white",
  fg: "black",
  selectionBg: "red",
  selectionFg: "white",
  userBg: "#18ad2a",
  userFg: "white",
  hoverBg: "cornflowerblue",
  baseGrey: "#1a1a1a",
};

export const baseColor = css`
  background-color: ${color.bg};
  color: ${color.fg};

  ::selection,
  ::-moz-selection {
    background-color: ${color.fg};
    color: ${color.bg};
  }
`;

export const inverted = css`
  background-color: ${color.fg};
  color: ${color.bg};

  ::selection,
  ::-moz-selection {
    background-color: ${color.bg};
    color: ${color.fg};
  }
`;

export const wavyBorder = css`
  border-image: url(/images/little_wave_template.png) 18 0 18 0 repeat;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
`;

export const leftRightPadding = () => css`
  padding-left: calc((100% - var(--content-width)) / 2);
  padding-right: calc((100% - var(--content-width)) / 2);
`;

export const constrainLeftRight = css`
  max-width: var(--content-width);
  margin: 0 auto;
`;

export enum Highlight {
  Selection,
  User,
  None,
}

function getHighlight(state: State, user: string): Highlight {
  const isSelected = state.selectedUsers.includes(user);
  if (isSelected) return Highlight.Selection;
  if (isClientUser(user)) return Highlight.User;
  return Highlight.None;
}

export function getColors(state: State, user: string) {
  switch (getHighlight(state, user)) {
    case Highlight.None:
      return baseColor;
    case Highlight.Selection:
      return css`
        background-color: ${color.selectionBg};
        color: ${color.selectionFg};
        font-weight: bold;
      `;
    case Highlight.User:
      return css`
        background-color: ${color.userBg};
        color: ${color.userFg};
        font-weight: bold;
      `;
  }
}
export function getFill(state: State, user: string) {
  switch (getHighlight(state, user)) {
    case Highlight.None:
      return color.baseGrey;
    case Highlight.Selection:
      return color.selectionBg;
    case Highlight.User:
      return color.userBg;
  }
}
