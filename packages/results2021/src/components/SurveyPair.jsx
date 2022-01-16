import { h, Fragment } from "preact";

export function SurveyPair({ viz, content, describe = true }) {
  const { x, y } = content;

  return (
    <div class="map">
      <div class="maptitle">
        <div>{x.title}</div>
        <div>{y?.title}</div>
      </div>
      <div class="mapviz">{viz}</div>
      <div class="maptext">
        {describe &&
          [x, y].map((v, i) => (
            <Fragment key={i}>
              <p>
                <strong style="text-transform: uppercase">
                  {i === 0 ? "X" : "Y"}: {v.title}
                </strong>
                <br />
                <strong>{v.question}</strong>
              </p>
              <table>
                <tr>
                  <td>{v.table.max.value}</td>
                  <td>{v.table.max.name}</td>
                </tr>
                {v.table.midMax && (
                  <tr>
                    <td>{v.table.midMax.value}</td>
                    <td>{v.table.midMax.name}</td>
                  </tr>
                )}
                {v.table.zero && (
                  <tr>
                    <td>{v.table.zero.value}</td>
                    <td>{v.table.zero.name}</td>
                  </tr>
                )}
                {v.table.midMin && (
                  <tr>
                    <td>{v.table.midMin.value}</td>
                    <td>{v.table.midMin.name}</td>
                  </tr>
                )}
                <tr>
                  <td>{v.table.min.value}</td>
                  <td>{v.table.min.name}</td>
                </tr>
              </table>
              <p />
            </Fragment>
          ))}
      </div>
    </div>
  );
}
