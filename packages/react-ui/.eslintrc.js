module.exports = {
    extends: ['@monorepo/eslint-config'],
    parserOptions: {
        project: './tsconfig.json',
    },
    root: true,
};
