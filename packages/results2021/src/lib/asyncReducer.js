/* eslint-disable no-fallthrough */
import cloneDeep from "lodash.clonedeep";
import assign from "lodash.assign";

import { AXES_DOMAIN } from "./constants";
import {
  filterDataByDataset,
  applyJitter,
  countStandardSetGraphRegions,
  countGraphRegionProportions,
} from "./data-manipulation";
import { getColorScale } from "./viztools";
import { initialState } from "./state";

export async function reducer(state, action) {
  switch (action.type) {
    case "RESET":
      return cloneDeep(initialState);
    case "FILTER_DATASET": {
      const options = { ...state.options };
      options.dataset = action.payload.dataset;
      const filteredData = filterDataByDataset(state.rawData, options.dataset);
      const jittery = applyJitter(filteredData);
      const standardRegionCounts = countStandardSetGraphRegions(
        filteredData,
        state.questions
      );
      const standardProportions = state.surveyPairs.reduce((obj, pair) => {
        obj[pair[0]] = countGraphRegionProportions(
          null,
          null,
          standardRegionCounts[pair[0]]
        );
        return obj;
      }, {});
      return assign(
        { ...state },
        {
          data: jittery,
          processedRawData: filteredData,
          standardRegionCounts,
          standardProportions,
          options,
        }
      );
    }
    case "TOGGLE_REV_COLOR": {
      const options = assign(state.options, {
        reverseColor: !state.options.reverseColor,
      });
      const colorScale = getColorScale(
        options.color,
        AXES_DOMAIN,
        options.reverseColor
      );
      return assign({ ...state }, { options, colorScale });
    }
    case "CHANGE_COLOR_SCHEME": {
      const options = assign(state.options, action.payload);
      const colorScale = getColorScale(
        options.color,
        AXES_DOMAIN,
        options.reverseColor
      );
      return assign({ ...state }, { options, colorScale });
    }
    case "CHANGE_GRAPH_TYPE":
    case "CHANGE_DOT_OPACITY":
    case "CHANGE_DOT_SIZE":
    case "CHANGE_CONTOUR_BANDWIDTH": {
      const options = assign(state.options, action.payload);
      return assign({ ...state }, { options });
    }
    case "TOGGLE_CUSTOM": {
      return assign({ ...state }, { customPair: initialState.customPair });
    }
    case "SET_X_AXIS": {
      const { x } = action.payload;
      return assign({ ...state }, { customPair: { ...state.customPair, x } });
    }
    case "SET_Y_AXIS": {
      const { y } = action.payload;
      return assign({ ...state }, { customPair: { ...state.customPair, y } });
    }
    case "SELECT": {
      const user = action.payload;
      return assign({ ...state, user });
    }
    case "BRUSH": {
      const brushMap = action.payload;
      return assign({ ...state }, { brushMap });
    }
    case "OLDBRUSH": {
      return assign({ ...state }, { newBrushing: 0 });
    }

    default:
      throw new ReferenceError(`unknown action: '${action.type}' received`);
  }
}
