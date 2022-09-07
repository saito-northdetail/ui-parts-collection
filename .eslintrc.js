module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'vue/multi-word-component-names': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'nuxt/no-cjs-in-config': 'off',
  },
};
