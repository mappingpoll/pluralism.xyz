if (process.env.NODE_ENV === "development") {
  require("preact/debug")
}
import { h, render } from "preact";

import { LanguageContextProvider } from "./context/language-context";
import { MobileContextProvider } from "./context/mobile-context";
import Results from "./components/results";
import "./index.css";

function App() {
  return (
    <LanguageContextProvider>
      <MobileContextProvider>
          <Results />
      </MobileContextProvider>
    </LanguageContextProvider>
  );
}

render(<App/>, document.body)

