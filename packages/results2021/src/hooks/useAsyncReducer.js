import { useState } from "preact/hooks";

export function useAsyncReducer(reducer, initState) {
  const [state, setState] = useState(initState),
    dispatchState = async (action) => setState(await reducer(state, action));
  return [state, dispatchState];
}
