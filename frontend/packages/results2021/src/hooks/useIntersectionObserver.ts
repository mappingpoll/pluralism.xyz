import { useEffect, useRef } from "preact/hooks";

export function useIntersectionObserver(callback) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current == null) return;
    const introObserver = new IntersectionObserver(callback);
    introObserver.observe(ref.current);
  }, [callback, ref]);

  return ref;
}
