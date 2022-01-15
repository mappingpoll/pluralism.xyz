if (process.env.NODE_ENV !== "production") require("preact/debug");
import { h, render, Fragment } from "preact";

import { MobileContextProvider } from "./lib/mobile-context";
import { App } from "./App";
import { useDb } from "./hooks/useDb";
import "./index.css";

function Index() {
  const { db } = useDb();
  return (
      <MobileContextProvider>
        <App db={db} />
      </MobileContextProvider>
  );
}

render(<Index />, document.body);
