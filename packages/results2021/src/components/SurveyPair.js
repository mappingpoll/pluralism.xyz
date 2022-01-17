import { html } from "../lib/utils";

export function SurveyPair({ viz, content, describe = true }) {
  const { x, y } = content;

  return html`<div class="map">
    <div class="maptitle">
      <div>${x.title}</div>
      <div>${y?.title}</div>
    </div>
    <div class="mapviz">${viz}</div>
    <div class="maptext">
      ${describe &&
      [x, y].map(
        (v, i) => html`<p>
            <strong style="text-transform: uppercase"> ${i === 0 ? "X" : "Y"}: ${v.title} </strong>
            <br />
            <strong>${v.question}</strong>
          </p>
          <table>
            <tr>
              <td>${v.table.max.value}</td>
              <td>${v.table.max.name}</td>
            </tr>
            ${v.table.midMax &&
            html`<tr>
              <td>${v.table.midMax.value}</td>
              <td>${v.table.midMax.name}</td>
            </tr> `}
            ${v.table.zero &&
            html`<tr>
              <td>${v.table.zero.value}</td>
              <td>${v.table.zero.name}</td>
            </tr> `}
            ${v.table.midMin &&
            html`<tr>
              <td>${v.table.midMin.value}</td>
              <td>${v.table.midMin.name}</td>
            </tr> `}
            <tr>
              <td>${v.table.min.value}</td>
              <td>${v.table.min.name}</td>
            </tr>
          </table>`
      )}
    </div>
  </div>`;
}
