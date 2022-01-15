import { h } from "preact";
import { useState } from "preact/hooks";
import { ACTION } from "../lib/asyncReducer";

import { axisOptions } from "../lib/questions";
import "./Options.css";

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

  // const handleGraphTypeChange = handleSettingChange(
  //   "CHANGE_GRAPH_TYPE",
  //   "graph"
  // );
  // // const handleDotSizeChange = handleSettingChange("CHANGE_DOT_SIZE", "size");
  // const handleDotOpacityChange = handleSettingChange(
  //   "CHANGE_DOT_OPACITY",
  //   "opacity"
  // );

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
      <div style="display: flex; justify-content: space-between; align-items: center">
        <h1 class="title" style="cursor: pointer" onClick={handleShowHideClick}>
          Options
        </h1>
        <div class="show-hide" onClick={handleShowHideClick}>
          <h1 style="margin: 0 2rem 0 0;">
            <strong>{showOptions ? "−" : "+"}</strong>
          </h1>
        </div>
      </div>
      {showOptions && (
        <div>
          {/*<div>
            <div class="labeled-input">
              <label for="graphselect">{i18n("graph.type")}</label>
              <select
                id="graphselect"
                name="graphselect"
                onchange={handleGraphTypeChange}
                disabled
              />
            </div>
          </div>
          <div>
            <div class="labeled-input">
              <label for="dotsize">{i18n("graph.dot_size")}</label>
              <input
                type="range"
                id="dotsize"
                min="1"
                max="90"
                step="0.1"
                name="size"
                value={state.options.size}
                // onchange={handleDotSizeChange}
                disabled
              />
            </div>            <div class="labeled-input">
              <label for="dotopacity">{i18n("graph.opacity")}</label>
              <input
                type="range"
                id="dotopacity"
                min="0.01"
                max="1"
                step="0.01"
                name="opacity"
                value={state.options.opacity}
                onchange={handleDotOpacityChange}
              />
            </div>
          </div>*/}
          {/*<div>
            <input
              type="checkbox"
              id="customgraphcheckbox"
              checked={showAxisControls}
              onclick={() => setShowAxisControls(!showAxisControls)}
            />
            <label for="customgraphcheckbox">
              {i18n("graph.choose_custom")}
            </label>
          </div>*/}
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
          {/*<div>
            Total = {totalRespondents} {i18n("graph.respondents")}
            {props.selected > 0 && (
              <span>
                &nbsp;({props.selected}&nbsp;
                {i18n("graph.selected")}
              </span>
            )}
          </div>*/}
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
