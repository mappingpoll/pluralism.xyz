const esbuild = require("esbuild");
const { copyFile, readdir, cp, mkdir, rm } = require("fs/promises");
const path = require("path");

const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");

const BUILD_DIR = "build";

const preserveAbsImgPath = {
  name: "absImages",
  setup(build) {
    build.onResolve({ filter: /^\/images\// }, args => {
      return {
        path: args.path,
        external: true,
      };
    });
  },
};

const isDev = process.env.NODE_ENV === "development";

const clean = async () => {
  await rm(BUILD_DIR, { force: true, recursive: true });
  await mkdir(BUILD_DIR);
};

const images = async () => {
  await cp("images", `${BUILD_DIR}/images`, { recursive: true });
};

const assets = async () => {
  await cp("assets", `${BUILD_DIR}/assets`, { recursive: true });
};

const buildConfig = {
  plugins: [preserveAbsImgPath, pnpPlugin()],
  bundle: true,
  format: "esm",
  target: ["es6", "edge95", "firefox93", "chrome92", "safari14"],
  sourcemap: isDev ? "inline" : false,
  minify: !isDev,
  watch: isDev,
  logLevel: "info",
};

async function copyDirContent(dir, outdir) {
  const files = await readdir(dir);
  for (const file of files) {
    await copyFile(path.join(dir, file), path.join(outdir, file));
  }
}

const homepage = async () => {
  await copyDirContent("frontend/packages/homepage", BUILD_DIR);
};

const results20192020 = async () => {
  const APP_NAME = "survey2019-2020";
  const OUTDIR = `${BUILD_DIR}/${APP_NAME}`;

  await mkdir(OUTDIR);
  await copyFile("frontend/packages/results2019-2020/src/index.html", path.join(OUTDIR, "index.html"));
  await cp("frontend/packages/results2019-2020/src/assets", path.join(OUTDIR, "assets"), { recursive: true });
  await esbuild.build({
    ...buildConfig,
    entryPoints: ["frontend/packages/results2019-2020/src/index.jsx"],
    publicPath: `https://www.pluralism.xyz/${APP_NAME}`,
    jsxFactory: "h",
    jsxFragment: "Fragment",
    define: {
      APP_NAME: `"${APP_NAME}"`,
      APP_BASE_URL: `"/${APP_NAME}"`,
    },
    outdir: OUTDIR,
  });
};

const results2021 = async () => {
  const APP_NAME = "survey2021";
  const DIR = "frontend/packages/results2021/src";
  const OUTDIR = `${BUILD_DIR}/${APP_NAME}`;

  await mkdir(OUTDIR);
  await copyDirContent(path.join(DIR, "public"), OUTDIR);

  await esbuild.build({
    ...buildConfig,
    entryPoints: [`${DIR}/index.ts`],
    publicPath: `https://www.pluralism.xyz/${APP_NAME}`,
    define: {
      APP_NAME: `"${APP_NAME}"`,
      APP_BASE_URL: `"/${APP_NAME}/"`,
    },
    outdir: OUTDIR,
  });
};

const build = async () => {
  try {
    await clean();
    await images();
    await assets();
    await homepage();
    await results20192020();
    await results2021();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

build();
