module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended", "preact"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-undef": "warn",
    "no-unused-vars": "warn",
    quotes: ["warn", "double"],
  },
};
