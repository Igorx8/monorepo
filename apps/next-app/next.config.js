const withTM = require('next-transpile-modules')([
  '@monorepo/react-ui',
]);


module.exports = withTM({
    reactStrictMode: true,
})
