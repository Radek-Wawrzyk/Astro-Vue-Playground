module.exports = {
  root: true,
  extends: [
    'plugin:astro/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    '@vue/airbnb',
    'prettier',
    'eslint:recommended',
  ],
  rules: {
    "import/prefer-default-export": 0,
  },
};
