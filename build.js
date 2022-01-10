const esbuild = require("esbuild");
const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");
const { copyFile, cp, readdir, mkdir, rm } = require("fs/promises");
const path = require("path");

const isDev = process.env.NODE_ENV === "development";

const clean = async () => {
  await rm("public", { force: true, recursive: true });
  await mkdir("public");
};

const homepage = async () => {
  const files = await readdir("packages/homepage");
  for (const file of files) {
    await copyFile(path.join("packages/homepage", file), path.join("public", file));
  }
}

const commonBuildConfig = {
    plugins: [
      pnpPlugin(),
    ],
    bundle: true,
    sourcemap: isDev,
    format: "esm",
    minify: !isDev,
    jsxFactory: "h",
    jsxFragment: "Fragment",
    loader: {
      ".png": "dataurl",
      ".svg": "file",
      ".jpg": "file",
    },
    logLevel: "debug",
    watch: isDev,
}

const results20192020 = async () => {
  const outdir = "public/survey2019-2020"
  await mkdir(outdir);
  await copyFile("packages/results2019-2020/src/index.html", path.join(outdir, "index.html"));
  await cp("packages/results2019-2020/src/assets", path.join(outdir, "assets"), { recursive: true });
  await esbuild.build({
    ...commonBuildConfig,
    entryPoints: ["packages/results2019-2020/src/index.jsx"],
    target: ["es6"],
    outdir: outdir,
    watch: false,
  });
}

const results2021 = async () => {
  const appName = "survey2021"
  const outdir = `public/${appName}`;
  await mkdir(outdir);
  // yarn will take care of expanding these
  const workerPath = require.resolve("sql.js-httpvfs/dist/sqlite.worker.js");
  const wasmPath = require.resolve("sql.js-httpvfs/dist/sql-wasm.wasm");
  console.log(workerPath);
  console.log(wasmPath);
  
  await copyFile("packages/results2021/src/index.html", path.join(outdir, "index.html"));
  await cp("packages/results2021/src/assets", path.join(outdir, "assets" ), { recursive: true });
  await copyFile(workerPath, path.join(outdir, "assets", "sqlite.worker.js"));
  await copyFile(wasmPath, path.join(outdir, "assets", "sql-wasm.wasm"));
  await esbuild.build({
    ...commonBuildConfig,
    entryPoints: ["packages/results2021/src/index.jsx"],
    target: ["es2020"],
    define: {
      APP_NAME: `"${appName}"`,
      APP_BASE_URL: `"/${appName}/"`,
      WORKER_PATH: `"/${appName}/assets/sqlite.worker.js"`,
      WASM_PATH: `"/${appName}/assets/sql-wasm.wasm"`,
    },
    outdir: outdir,
  });
}

const build = async () => {
  try {
    await clean();
    await homepage();
    await results20192020();
    await results2021();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

build();

