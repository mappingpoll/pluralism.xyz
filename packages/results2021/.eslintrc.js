module.exports = {
  env: {
    browser: true,
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "preact", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-undef": "warn",
    "no-unused-vars": "warn",
    quotes: ["warn", "double"],
  },
};
