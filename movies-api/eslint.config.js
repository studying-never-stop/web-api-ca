// eslint.config.js
import eslintPluginReact from "eslint-plugin-react";

export default [
  {
    files: ["*.js", "*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // 设置环境：启用 Node.js 和 ES2021 的全局变量
        es2021: true,
        node: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      // 引入插件
      react: eslintPluginReact,
    },
    rules: {
      // 继承推荐规则
      ...eslintPluginReact.configs.recommended.rules,
      "no-console": "off", // 允许 console.log 等
    },
  },
];
