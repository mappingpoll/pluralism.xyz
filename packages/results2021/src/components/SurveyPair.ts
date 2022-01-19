import { css } from "@emotion/css";
import { html } from "htm/preact";
import { FunctionComponent } from "preact";
import { VizDescription } from "../lib/viztools";

const styles = css`
  padding: 5rem 0;

  figure {
  }
`;

interface Props {
  viz: FunctionComponent;
  description: Partial<VizDescription>;
  noDescribe: boolean;
}

export function SurveyPair({ viz, description, noDescribe = false }: Props) {
  const { x, y } = description;

  return html`
    <section class=${styles}>
      <header class="maptitle">
        <div>${x?.title}</div>
        <div>${y?.title}</div>
      </header>
      <figure class="mapviz">${viz}</figure>
      <aside class="maptext">
        ${!noDescribe &&
        [x, y].map(
          (v, i) => html`
            <p>
              <strong style="text-transform: uppercase"> ${i === 0 ? "X" : "Y"}: ${v?.title} </strong>
              <br />
              <strong>${v?.question}</strong>
            </p>
            <table>
              <tr>
                <td>${v?.table.max.value}</td>
                <td>${v?.table.max.name}</td>
              </tr>
              ${v?.table.midMax &&
              html`<tr>
                <td>${v?.table.midMax.value}</td>
                <td>${v?.table.midMax.name}</td>
              </tr> `}
              ${v?.table.zero &&
              html`<tr>
                <td>${v?.table.zero.value}</td>
                <td>${v?.table.zero.name}</td>
              </tr> `}
              ${v?.table.midMin &&
              html`<tr>
                <td>${v?.table.midMin.value}</td>
                <td>${v?.table.midMin.name}</td>
              </tr> `}
              <tr>
                <td>${v?.table.min.value}</td>
                <td>${v?.table.min.name}</td>
              </tr>
            </table>
          `,
        )}
      </aside>
    </section>
  `;
}
