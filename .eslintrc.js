module.exports = {
  extends: ["eslint:recommended", "prettier"],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true,
    jquery: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "no-undef": "warn",
    "no-console": "warn",
    "no-unused-vars": "warn",
  },
};
