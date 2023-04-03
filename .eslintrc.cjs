module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  overrides: [
    {
      files: '*.ts, *.tsx',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: 'tsconfig.json',
      },
      extends: [
        'airbnb-typescript/base',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
    },
  ],
};
