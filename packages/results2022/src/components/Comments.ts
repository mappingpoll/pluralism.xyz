import { html } from "htm/preact";
import { css } from "@emotion/css";
import { ActionType, Reducer } from "../lib/reducer";
import { comments } from "../lib/data";
import { getColors } from "../lib/style";
import { Collapsible } from "./Collapsible";

const styles = css`
  padding: 2rem 0;
  user-select: none;

  table {
    border-collapse: collapse;
  }

  td {
    border: 1px solid black;
    text-align: center;
    padding: 0.5rem 1rem;
  }
`;

export function Comments({ reducer }: { reducer: Reducer }) {
  const { state, dispatch } = reducer;

  function handleClick(ev: MouseEvent, user: string) {
    ev.shiftKey
      ? dispatch({ type: ActionType.SelectAdd, payload: user })
      : dispatch({ type: ActionType.SelectOne, payload: user });
  }

  return html`
    <${Collapsible}
      title="Comments"
      style=${css`
        border-top: none;
      `}
    >
      <div class=${styles}>
        <p>A space at the end of the questionnaire allowed those who wanted to leave comments.</p>
        <table>
          <tbody>
            ${comments != null &&
            comments.map(
              ({ user, comment }, i) => html`
                <tr key=${i}>
                  <td class=${getColors(state, user)} onclick=${(ev: MouseEvent) => handleClick(ev, user)}>
                    "${comment}"
                  </td>
                </tr>
              `,
            )}
          </tbody>
        </table>
      </div>
    <//>
  `;
}
