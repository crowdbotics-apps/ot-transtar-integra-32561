module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier', 'eslint-config-airbnb-base'], 
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error'
    ],
  },
  plugins: ["prettier"],
};
