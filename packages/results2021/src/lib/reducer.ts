import assign from "lodash.assign";

import { initialState, State } from "./state";

export enum ActionType {
  Reset,
  Set_X_Axis,
  Set_Y_Axis,
  SelectOne,
  SelectAdd,
  SelectRemove,
  SelectNone,
}

export interface Action {
  type: ActionType;
  payload?: unknown;
}

export interface Reducer {
  state: State;
  dispatch: (action: Action) => void;
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.Reset:
      return assign({ ...state }, { customPair: initialState.customPair });
    case ActionType.Set_X_Axis: {
      const { x } = action.payload as { x: string };
      return assign({ ...state }, { customPair: { ...state.customPair, x } });
    }
    case ActionType.Set_Y_Axis: {
      const { y } = action.payload as { y: string };
      return assign({ ...state }, { customPair: { ...state.customPair, y } });
    }
    case ActionType.SelectOne: {
      const user = action.payload as string;
      return assign({ ...state, selectedUsers: [user] });
    }
    case ActionType.SelectAdd: {
      const user = action.payload as string;
      if (state.selectedUsers.includes(user)) return state;
      return assign({ ...state, selectedUsers: [...state.selectedUsers, user] });
    }
    case ActionType.SelectRemove: {
      const user = action.payload as string;
      if (!state.selectedUsers.includes(user)) return state;
      return assign({ ...state, selectedUsers: state.selectedUsers.filter(u => u !== user) });
    }
    case ActionType.SelectNone: {
      return assign({ ...state }, { selectedUsers: [] });
    }
    default:
      throw new ReferenceError(`unknown action: '${action.type}' received`);
  }
}
