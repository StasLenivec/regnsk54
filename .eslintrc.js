module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module",
    parser: "@babel/eslint-parser",
    // parser: '@typescript-eslint/parser',
    ecmaVersion: 2017,
  },
  extends: [
    "standard",
    "plugin:vue/recommended",
    "@nuxtjs",
    "prettier",
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
  ],

  plugins: ["@typescript-eslint"],

  rules: {
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        singleQuote: false,
        trailingComma: "all",
        bracketSpacing: true,
        endOfLine: "auto",
        jsxSingleQuote: true,
        tabWidth: 2,
        arrowParens: "avoid",
        useTabs: false,
      },
    ],
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
    "import/namespace": ["error", { allowComputed: true }],
    "import/prefer-default-export": "off",
    "import/no-named-as-default": 0,
    // '@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
    "no-unused-vars": "off",
    "no-undef": "off",
    "import/named": "error",
  },

  overrides: [
    {
      files: ["*.vue"],
      rules: {
        indent: "off",
      },
    },
  ],

  settings: {
    "import/resolver": {
      nuxt: {
        extensions: [".js", ".vue"],
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};
