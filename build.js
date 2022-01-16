const esbuild = require("esbuild");
const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");
const { copyFile, readdir, cp, mkdir, rm } = require("fs/promises");
const path = require("path");

const absImages = {
  name: "absImages",
  setup(build) {
    build.onResolve({ filter: /^(?:url\()?\/images\// }, args => {
      // let absPath = require('path').resolve(args.resolveDir, args.path)
      return {
        path: args.path,
        external: true,
      };
    });
  },
};

const isDev = process.env.NODE_ENV === "development";

const clean = async () => {
  await rm("public", { force: true, recursive: true });
  await mkdir("public");
};

const images = async () => {
  await cp("images", "public/images", { recursive: true });
};

const commonBuildConfig = {
  plugins: [absImages, pnpPlugin()],
  bundle: true,
  format: "esm",
  sourcemap: isDev,
  minify: !isDev,
  jsxFactory: "h",
  jsxFragment: "Fragment",
  logLevel: "debug",
  loader: { ".png": "file" },
  watch: isDev,
};

const homepage = async () => {
  const files = await readdir("packages/homepage");
  for (const file of files) {
    await copyFile(path.join("packages/homepage", file), path.join("public", file));
  }
};

const results20192020 = async () => {
  const appName = "survey2019-2020";
  const outdir = `public/${appName}`;
  await mkdir(outdir);
  await copyFile("packages/results2019-2020/src/index.html", path.join(outdir, "index.html"));
  await cp("packages/results2019-2020/src/assets", path.join(outdir, "assets"), { recursive: true });
  await esbuild.build({
    ...commonBuildConfig,
    entryPoints: ["packages/results2019-2020/src/index.jsx"],
    publicPath: `https://www.pluralism.xyz/${appName}`,
    target: ["es6"],
    define: {
      APP_NAME: `"${appName}"`,
      APP_BASE_URL: `"/${appName}"`,
    },
    outdir,
  });
};

const results2021 = async () => {
  const appName = "survey2021";
  const outdir = `public/${appName}`;
  await mkdir(outdir);
  // yarn will take care of expanding these
  const workerPath = require.resolve("sql.js-httpvfs/dist/sqlite.worker.js");
  const wasmPath = require.resolve("sql.js-httpvfs/dist/sql-wasm.wasm");

  await copyFile("packages/results2021/src/index.html", path.join(outdir, "index.html"));
  await cp("packages/results2021/src/assets", path.join(outdir, "assets"), {
    recursive: true,
  });
  await copyFile(workerPath, path.join(outdir, "assets", "sqlite.worker.js"));
  await copyFile(wasmPath, path.join(outdir, "assets", "sql-wasm.wasm"));
  await esbuild.build({
    ...commonBuildConfig,
    entryPoints: ["packages/results2021/src/index.jsx"],
    publicPath: `https://www.pluralism.xyz/${appName}`,
    target: ["es2020"],
    define: {
      APP_NAME: `"${appName}"`,
      APP_BASE_URL: `"/${appName}/"`,
      WORKER_PATH: `"/${appName}/assets/sqlite.worker.js"`,
      WASM_PATH: `"/${appName}/assets/sql-wasm.wasm"`,
    },
    outdir,
  });
};

const build = async () => {
  try {
    await clean();
    await images();
    await homepage();
    await results20192020();
    await results2021();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

build();
