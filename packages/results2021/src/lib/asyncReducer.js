/* eslint-disable no-fallthrough */
import cloneDeep from "lodash.clonedeep";
import assign from "lodash.assign";

import { initialState } from "./state";

export const ACTION= {
  RESET: "reset",
  SET_Y_AXIS: "set_y_axis",
  SET_X_AXIS: "set_x_axis",
  SELECT_ONE: "select",
  SELECT_ADD: "select_add",
  SELECT_NONE: "select_none",
  TOGGLE_CUSTOM: "toggle_custom",
}

export async function reducer(state, action) {
  switch (action.type) {
    case ACTION.RESET:
      return cloneDeep(initialState);
    case ACTION.TOGGLE_CUSTOM: {
      return assign({ ...state }, { customPair: initialState.customPair });
    }
    case ACTION.SET_X_AXIS: {
      const { x } = action.payload;
      return assign({ ...state }, { customPair: { ...state.customPair, x } });
    }
    case ACTION.SET_Y_AXIS: {
      const { y } = action.payload;
      return assign({ ...state }, { customPair: { ...state.customPair, y } });
    }
    case ACTION.SELECT_ONE: {
      const user = action.payload;
      return assign({ ...state, user: [user] });
    }
    case ACTION.SELECT_ADD: {
      const user = action.payload;
      if (state.user.includes(user)) return state;
      return assign({ ...state, user: [...state.user, user] });
    }
    case ACTION.SELECT_NONE: {
      return assign({...state}, {user: []});
    }
    default:
      throw new ReferenceError(`unknown action: '${action.type}' received`);
  }
}
