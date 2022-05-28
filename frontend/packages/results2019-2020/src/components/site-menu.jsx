import { h } from "preact";

import "./site-menu.css";

export default function SiteMenu(props) {
  return (
    <h1 class="site-menu" style={props.style}>
      <a href="https://nicolasgrenier.com" style="font-family: 'Times New Roman', Times, serif">
        Nicolas Grenier
      </a>
      <span style="font-weight: normal">
        {" // "}
        <a href="https://pluralism.xyz/" style="font-size: 0.95em">
          pluralism.xyz
        </a>
      </span>
    </h1>
  );
}
