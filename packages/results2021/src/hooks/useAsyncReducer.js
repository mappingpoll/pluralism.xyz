import { useCallback, useState } from "preact/hooks";
import { reducer } from "../lib/asyncReducer";

export function useAsyncReducer(initState) {
  const [state, setState] = useState(initState);
  const dispatchState = useCallback(
    async (action) => setState(await reducer(state, action)),
    [state]
  );
  return [state, dispatchState];
}
