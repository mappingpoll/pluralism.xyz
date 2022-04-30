import assign from "lodash.assign";
import { graphs } from "../components/graphs";

import { initialState, State } from "./state";

export enum ActionType {
  Reset,
  Set_X_Axis,
  Set_Y_Axis,
  SelectOne,
  SelectAdd,
  SelectRemove,
  SelectNone,
  Set_Graph_Style,
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
    case ActionType.Set_Graph_Style: {
      const { graph } = action.payload as { graph: keyof typeof graphs };
      return assign({ ...state }, { graph });
    }
    case ActionType.SelectOne: {
      const users = action.payload as string | string[];
      if (typeof users === "string") return assign({ ...state, selectedUsers: [users] });
      return assign({ ...state, selectedUsers: [...users] });
    }

    case ActionType.SelectAdd: {
      const users = action.payload as string | string[];
      if (typeof users === "string") {
        if (state.selectedUsers.includes(users))
          return reducer(state, { type: ActionType.SelectRemove, payload: users });
        return assign({ ...state, selectedUsers: [...state.selectedUsers, users] });
      }
      const selectedUsers = [...state.selectedUsers, ...users].reduce((arr: string[], u) => {
        return arr.includes(u) ? arr.filter(a => a !== u) : [...arr, u];
      }, []);
      return assign({ ...state, selectedUsers });
    }

    case ActionType.SelectRemove: {
      const users = action.payload as string;
      if (!state.selectedUsers.includes(users)) return state;
      return assign({ ...state, selectedUsers: state.selectedUsers.filter(u => u !== users) });
    }
    case ActionType.SelectNone: {
      return assign({ ...state }, { selectedUsers: [] });
    }
    default:
      throw new ReferenceError(`unknown action: '${action.type}' received`);
  }
}
