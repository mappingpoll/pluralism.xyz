import { h } from "preact";

import "./SiteMenu.css";

export function SiteMenu(props) {
  return (
    <div class="site-menu" style={props.style}>
      <h1>
        <span style={{ "font-family": '"Times New Roman", Times, serif' }}>
          Nicolas Grenier{" "}
        </span>
        <span style="font-weight: normal">
          {" // "}
          <a href="https://pluralism.xyz/" style="font-size: 0.9em">
            pluralism.xyz
          </a>
        </span>
      </h1>
      {/*<h3>
        <a href="https://nicolasgrenier.com/Exhibitions-Projects">
          Exhibitions &amp; Projects /
        </a>
        <a href="https://nicolasgrenier.com/Paintings">/ Paintings /</a>
        <a href="https://nicolasgrenier.com/Research">/ Research /</a>
        <a href="https://nicolasgrenier.com/About">/ About&nbsp;</a>
      </h3>*/}
    </div>
  );
}
