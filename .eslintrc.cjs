module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:astro/recommended',
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
