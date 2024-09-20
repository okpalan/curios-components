module.exports = {
  extends: [
      'plugin:vue/vue3-essential',
      '@vue/typescript/recommended',
      'plugin:prettier/recommended' // Add this line
  ],
  parserOptions: {
      ecmaVersion: 2020
  },
  rules: {
      'vue/no-unused-vars': 'error'
  }
};
