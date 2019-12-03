module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  extends: ["airbnb", "prettier", "prettier/react", "plugin:jsx-a11y/recommended"],
  plugins: ["react", "prettier", "react-hooks", "import", "jsx-a11y"],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    "max-len": ["error", { code: 100 }],
    // 'prefer-promise-reject-errors': ['off'],
    "react/jsx-filename-extension": ["off"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // 'no-return-assign': ['off'],
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "no-console": "off",
  },
};
