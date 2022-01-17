if (process.env.NODE_ENV !== "production") require("preact/debug");
import { html, render } from "./lib/utils";

import { App } from "./App";
import "./index.css";

render(html`<${App} />`, document.body);
