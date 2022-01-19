import { html } from "htm/preact";
import { css } from "@emotion/css";
import { ActionType, Reducer } from "../lib/reducer";

import { questions, axisOptions } from "../lib/questions";
import { Collapsible } from "./Collapsible";

const styles = (visible: boolean) => css`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;

  transition: opacity 200ms ease;

  ${!visible &&
  css`
    opacity: 0;
    pointer-events: none;
  `}
`;

const getAxisOptions = (chosen?: string) =>
  Object.keys(questions).map((n, i) => {
    return html`<option key=${n} value=${n} selected=${chosen && chosen === n}>${axisOptions[i]}</option>`;
  });

interface Props {
  reducer: Reducer;
  visible: boolean;
}

export function Options({ reducer, visible }: Props) {
  const { state, dispatch } = reducer;

  const handleSettingChange = (type: ActionType, prop: string) => (event: Event) => {
    dispatch({ type, payload: { [prop]: (event.target as HTMLInputElement).value } });
    window.location.hash = "maps";
  };

  const handleXSelectChange = handleSettingChange(ActionType.Set_X_Axis, "x");
  const handleYSelectChange = handleSettingChange(ActionType.Set_Y_Axis, "y");

  const handleResetClick = () => {
    dispatch({ type: ActionType.Reset });
    scroll();
  };

  return html`
    <${Collapsible} title="Options" style=${styles(visible)}>
      <div>
        <div id="axesselectors">
          <div class="labeled-input">
            <label for="xselect">X Axis:</label>
            <select id="xselect" onchange=${handleXSelectChange}>
              <option value="">-- (show all answers)</option>
              ${getAxisOptions(state.customPair.x)}
            </select>
          </div>
          <div class="labeled-input">
            <label for="yselect">Y Axis:</label>
            <select id="yselect" onchange=${handleYSelectChange}>
              <option value="">-- (show all answers)</option>
              ${getAxisOptions(state.customPair.y)}
            </select>
          </div>
        </div>
        <div style="text-align: right">
          <button type="button" onclick=${handleResetClick}>Reset</button>
        </div>
      </div>
    <//>
  `;
}
