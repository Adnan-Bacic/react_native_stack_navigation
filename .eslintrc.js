module.exports = {
  env: {
    'react-native/react-native': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:jest/recommended',
  ],
  parser: 'babel-eslint',
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    'import',
    'jsx-a11y',
    'jest',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'no-console': 'off',
  },
};
