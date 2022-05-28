import { html, render } from "htm/preact";

import { App } from "./App";
import "./index.css";

render(html`<${App} />`, document.body);
