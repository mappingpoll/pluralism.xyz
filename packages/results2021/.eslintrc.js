module.exports = {
  env: {
    browser: true,
  },
  plugins: ["prettier"],
  extends: ["preact", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "no-undef": "warn",
    "no-unused-vars": "warn",
    quotes: ["warn", "double"],
  },
};
