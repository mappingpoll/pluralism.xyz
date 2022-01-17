import { select } from "d3";
import { useEffect, useRef } from "../lib/utils";

export const useD3 = (renderChartFn, dependencies) => {
  const ref = useRef();

  useEffect(() => {
    renderChartFn(select(ref.current));
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderChartFn, ...dependencies]);

  return ref;
};
