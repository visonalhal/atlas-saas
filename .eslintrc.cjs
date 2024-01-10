module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["simple-import-sort", "prettier"],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        directory: "./tsconfig.json",
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension
      extends: ["airbnb", "airbnb-typescript", "prettier"],
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "prettier/prettier": ["error"],
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", "tsx"] }],
        "react/require-default-props": "off",
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Side effect imports.
              ["^\\u0000"],
              // Node.js builtins. You could also generate this regex if you use a `.js` config.
              [
                "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
              ],
              // Packages. `react` related packages come first.
              ["^react", "^@?\\w"],
              // Parent imports. Put `..` last. Other relative imports. Put same-folder imports and `.` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$", "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.s?css$"],
            ],
          },
        ],
      },
    },
  ],
}
