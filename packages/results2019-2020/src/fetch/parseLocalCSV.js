import { csv } from "d3-fetch";
import { NA_SYMBOL } from "../constants";

// load & parse the result data asynchronously
export async function parseLocalCSV(path) {
  return await csv(path, d => {
    // convert strings to numbers where appropriate
    const row = d;
    for (let col in row) {
      if (col !== "poll" && col != "Language" && row[col] !== NA_SYMBOL) {
        row[col] = +row[col];
      }
    }
    return row;
  }).then(data => {
    // give unique ids to each respondant
    data.forEach((d, i) => (d.id = i));
    return data;
  });
}
