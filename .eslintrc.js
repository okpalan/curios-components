module.exports = {
    extends: [
      'plugin:vue/vue3-essential',
      '@vue/typescript/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2020
    },
    rules: {
      'vue/no-unused-vars': 'error'
    }
  };
  