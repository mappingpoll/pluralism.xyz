import { createDbWorker } from "sql.js-httpvfs";

const workerUrl = WORKER_PATH;
const wasmUrl = WASM_PATH;

// the config is either the url to the create_db script, or a inline configuration:
const config = {
  from: "inline",
  config: {
    serverMode: "full", // file is just a plain old full sqlite database
    requestChunkSize: 1024, // the page size of the  sqlite database (by default 4096)
    url: `/${APP_NAME}/assets/data.sqlite`, // url to the database (relative or full)
  },
};

let maxBytesToRead = 10 * 1024 * 1024;

async function initWorker() {
  return await createDbWorker(
    [config],
    workerUrl.toString(),
    wasmUrl.toString(),
    maxBytesToRead // optional, defaults to Infinity
  );
}
// you can also pass multiple config objects which can then be used as separate database schemas with `ATTACH virtualFilename as schemaname`, where virtualFilename is also set in the config object.

export { initWorker };
