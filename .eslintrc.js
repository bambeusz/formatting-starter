module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint/eslint-plugin"],
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    project: "tsconfig.json",
  },
  rules: {
    semi: ["off"],
    quotes: ["error", "double", { allowTemplateLiterals: true, avoidEscape: false }],
    curly: "error",
    "arrow-parens": ["error", "always"],
    "max-len": ["error", { code: 120 }],
    "space-infix-ops": "error",
    "prefer-const": "error",
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],
    // do not allow relative path import. only import from @app/*
    "no-restricted-imports": ["error", { patterns: ["./*", "../*"] }],
    "object-curly-spacing": ["error", "always"],
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        ignoreParameters: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  ignorePatterns: [".eslintrc.js"],
};
