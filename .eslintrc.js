module.exports = {
  env: {
    node: true,
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-undef": "warn",
    "no-unused-vars": "warn",
    quotes: ["warn", "double"],
  },
};
