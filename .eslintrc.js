module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-console': ['error', { allow: ['tron', 'log'] }],
    'jsx-a11y/control-has-associated-label': [
      2,
      {
        labelAttributes: ['label'],
        controlComponents: ['CustomComponent'],
        ignoreElements: ['th', 'input'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
