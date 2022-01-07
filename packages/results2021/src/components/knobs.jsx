import { h } from "preact";

import { DATASETS, GRAPH_TYPE } from "../lib/constants";
import { hasXAxis } from "../lib/misc";
import { useState } from "preact/hooks";
import {questions} from "../lib/questions";
import "./knobs.css"
import { i18n } from "../lib/i18n";

export default function Knobs(props) {
  const { state, dispatch } = props.reducer;

  let [shouldShowKnobs, setShouldShowKnobs] = useState(false);

  function handleShowHideClick() {
    setShouldShowKnobs(!shouldShowKnobs);
  }

  let [wantsChooseRespondents, setWantsChooseRespondents] = useState(false);

  // ALIASES
  const totalRespondents = state.data?.length;
  const graphType = state.options.graph;

  // CONDITIONALS
  const isScatterplot = graphType === GRAPH_TYPE.scatterplot;
  const isHeatmap = graphType === GRAPH_TYPE.heatmap;
  const isNumbers = graphType === GRAPH_TYPE.numbers;
  const isProportions = graphType === GRAPH_TYPE.proportions;
  const isContour = graphType === GRAPH_TYPE.contour;
  const isColorContour = graphType === GRAPH_TYPE.colorContour;
  const hasDots =
    graphType === GRAPH_TYPE.scatterplot ||
    graphType === GRAPH_TYPE.contourScatterplot ||
    graphType === GRAPH_TYPE.density;

  const shouldDisableDotSize = !isScatterplot;
  const shouldDisableDotOpacity = shouldDisableDotSize;
  const shouldDisableXAxisSelect = !state.customViz;
  const shouldDisableYAxisSelect =
    !state.customViz || !hasXAxis(state.userAxes);

  // EVENT HANDLERS
  const handleSettingChange = (type, prop, callback = null) => event => {
    dispatch({ type, payload: { [prop]: event.target.value } });
    if (callback != null && typeof callback === "function") callback();
  };
  const handleGraphTypeChange = handleSettingChange(
    "CHANGE_GRAPH_TYPE",
    "graph"
  );
  const handleDotSizeChange = handleSettingChange("CHANGE_DOT_SIZE", "size");
  const handleDotOpacityChange = handleSettingChange(
    "CHANGE_DOT_OPACITY",
    "opacity"
  );
  const handleWantsCustomGraphClick = handleSettingChange("TOGGLE_CUSTOM");
  const handleXSelectChange = handleSettingChange("SET_X_AXIS", "x");
  const handleYSelectChange = handleSettingChange("SET_Y_AXIS", "y");
  const handleDatasetChange = event => {
    const clicked = event.target.value;
    let other,
      dataset = { ...state.options.dataset };
    if (DATASETS.form.includes(clicked))
      other = clicked === "aga" ? "ba" : "aga";
    else if (DATASETS.language.includes(clicked))
      other = clicked === "en" ? "fr" : "en";
    dataset[clicked] = !dataset[clicked];
    if (!dataset[clicked] && !dataset[other]) {
      dataset[other] = true;
    }
    dispatch({ type: "FILTER_DATASET", payload: { dataset } });
  };
  const handleResetClick = () => dispatch({ type: "RESET" });

  const axesOptions =
    state.questions != null &&
    Object.keys(state.questions).map(question_num => (
      <option value={question_num.toString()}>
      {questions[question_num].question}
      </option>
    ));
  return (
    <div
      class="knobs"
      style={props.visible ? "" : "opacity: 0;pointer-events: none;"}
    >
      <div style="display: flex; justify-content: space-between; align-items: center">
        <h1
          class="title"
          style="cursor: pointer"
          onClick={handleShowHideClick}
        >
          Options
        </h1>
        <div class="show-hide" onClick={handleShowHideClick}>
          <h1 style="margin: 0 2rem 0 0;">
            <strong>{shouldShowKnobs ? "−" : "+"}</strong>
          </h1>
        </div>
      </div>
      {shouldShowKnobs && (
        <div class="grid-container">
          <div class="knob">
            <div class="labeled-input">
              <label for="graphselect">
                {i18n("graph.type")}
              </label>
              <select
                id="graphselect"
                name="graphselect"
                onchange={handleGraphTypeChange}
              >
                <option selected={isScatterplot} value={GRAPH_TYPE.scatterplot}>
                {i18n( "graph.scatterplot" )}
                </option>
                <option selected={isHeatmap} value={GRAPH_TYPE.heatmap}>
                {i18n("graph.heatmap")}
                </option>
                <option selected={isNumbers} value={GRAPH_TYPE.numbers}>
                {i18n("graph.numbers")}
                </option>
                <option selected={isProportions} value={GRAPH_TYPE.proportions}>
                {i18n("graph.proportions")}
                </option>
                <option selected={isContour} value={GRAPH_TYPE.contour}>
                {i18n("graph.contour")}
                </option>
                <option
                  selected={isColorContour}
                  value={GRAPH_TYPE.colorContour}
                >
                {i18n("graph.color_contour")}
                </option>
              </select>
            </div>
          </div>
          <div class="subknob">
            <div
              class="labeled-input"
              style={hasDots ? "" : "display: none"}
            >
              <label for="dotsize">
                {i18n("graph.dot_size")}
              </label>
              <input
                type="range"
                id="dotsize"
                min="1"
                max="90"
                step="0.1"
                name="size"
                value={state.options.size}
                onchange={handleDotSizeChange}
                disabled={shouldDisableDotSize}
              />
            </div>
            <div
              class="labeled-input"
              style={hasDots ? "" : "display: none"}
            >
              <label for="dotopacity">
                {i18n("graph.opacity")}
              </label>
              <input
                type="range"
                id="dotopacity"
                min="0.01"
                max="1"
                step="0.01"
                name="opacity"
                value={state.options.opacity}
                onchange={handleDotOpacityChange}
                disabled={shouldDisableDotOpacity}
              />
            </div>
          </div>
          <div class="knob">
            <input
              type="checkbox"
              id="customgraphcheckbox"
              value="custom"
              checked={state.customViz}
              onclick={handleWantsCustomGraphClick}
            />
            <label for="customgraphcheckbox">
                {i18n("graph.choose_custom")}
            </label>
          </div>
          <div
            id="axesselectors"
            class="subknob"
            style={state.customViz ? "" : "display: none"}
          >
            <div class="labeled-input">
              <label for="xselect">
                {i18n("graph.x_select")}
              </label>
              <select
                id="xselect"
                onchange={handleXSelectChange}
                disabled={shouldDisableXAxisSelect}
              >
                <option value="">
                {i18n("graph.choose_option")}
                </option>
                {axesOptions}
              </select>
            </div>
            <div class="labeled-input">
              <label for="yselect">
                {i18n("graph.y_select")}
              </label>
              <select
                id="yselect"
                onchange={handleYSelectChange}
                disabled={shouldDisableYAxisSelect}
              >
                <option value="">
                {i18n("graph.choose_option")}
                </option>
                {axesOptions}
              </select>
            </div>
          </div>
          <div class="knob">
            Total = {totalRespondents}{" "}
                {i18n("graph.respondents")}
            {props.selected > 0 && (
              <span>
                &nbsp;({props.selected}&nbsp;
                {i18n("graph.selected")}
              </span>
            )}
          </div>

          <div class="reset-btn">
            <button type="button" onclick={handleResetClick}>
                {i18n("graph.reset")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
