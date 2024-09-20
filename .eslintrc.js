module.exports = {
  extends: [
      'plugin:vue/vue3-essential',
      '@vue/typescript/recommended',
      'plugin:prettier/recommended' 
  ],
  "overrides": [
    {
        "files": ["tests/unit/noisy-notification.test.js"],
        "rules": {
            "no-unused-vars": "off"
        }
    }
],
  parserOptions: {
      ecmaVersion: 2020
  },
  rules: {
      'vue/no-unused-vars': 'error'
  }
};
