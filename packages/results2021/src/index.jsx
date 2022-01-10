if (process.env.NODE_ENV !== "production") require("preact/debug");
import { h, render, Fragment } from "preact";

import { I18nProvider } from "./lib/i18n";
import { MobileContextProvider } from "./lib/mobile-context";
import { App } from "./App";
import { useDb } from "./hooks/useDb";
import "./index.css";

function Index() {
  const { db } = useDb();
  return (
    <I18nProvider>
      <MobileContextProvider>
        <App db={db} />
      </MobileContextProvider>
    </I18nProvider>
  );
}

render(<Index />, document.body);
