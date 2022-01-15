import { h } from "preact";
import { useState } from "preact/hooks";
import { ACTION } from "../lib/asyncReducer";

import { axisOptions } from "../lib/questions";

export function Options(props) {
  const { dispatch } = props.reducer;
  const { getIntroBottom } = props;

  let [showOptions, setShowOptions] = useState(false);

  const handleSettingChange =
    (type, prop, callback = null) =>
    (event) => {
      dispatch({ type, payload: { [prop]: event.target.value } });
      if (callback != null && typeof callback === "function") callback();
    };

  function handleShowHideClick() {
    setShowOptions(!showOptions);
    dispatch({ type: ACTION.TOGGLE_CUSTOM });
  }

  const scroll = () => {
    const introBottom = getIntroBottom();
    if (!introBottom) return;
    const target = window.pageYOffset + introBottom + 240; // + ref.current.clientHeight;
    window.scrollTo(0, target);
  };

  const handleXSelectChange = handleSettingChange(ACTION.SET_X_AXIS, "x", scroll);
  const handleYSelectChange = handleSettingChange(ACTION.SET_Y_AXIS, "y", scroll);
  const handleResetClick = () => {
    dispatch({ type: ACTION.RESET });
    scroll();
  };

  return (
    <div
      class="options"
      style={props.visible ? "" : "opacity: 0;pointer-events: none;"}
    >
      <div class="collapse-title" onClick={handleShowHideClick}>
        <h1>
          Options
        </h1>
        <h1 class="show-hide">
          {showOptions ? "−" : "+"}
        </h1>
      </div>
      {showOptions && (
        <div>
          <div id="axesselectors">
            <div class="labeled-input">
              <label for="xselect">X Axis:</label>
              <select id="xselect" onchange={handleXSelectChange}>
                <option value="">-- (show all answers)</option>
                {axisOptions}
              </select>
            </div>
            <div class="labeled-input">
              <label for="yselect">Y Axis:</label>
              <select id="yselect" onchange={handleYSelectChange}>
                <option value="">-- (show all answers)</option>
                {axisOptions}
              </select>
            </div>
          </div>
          <div class="reset-btn">
            <button type="button" onclick={handleResetClick}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
