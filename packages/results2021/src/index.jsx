import { h, render, Fragment } from "preact";

import { I18nProvider } from "./lib/i18n";
import { MobileContextProvider } from "./context/mobile-context";
import App from "./App";
import "./index.css";
import { useDb } from "./hooks/useDb";

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
