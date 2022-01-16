import { useContext } from "preact/hooks";

import { MobileContext } from "../lib/mobile-context";

export function useMobileContext() {
  const context = useContext(MobileContext);
  if (context == null && typeof window !== "undefined")
    throw new Error("useMobileContext must be used with a MobileContextProvider");
  return context;
}
