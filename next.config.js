// next.config.js
const withTypescript = require("@zeit/next-typescript");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withTypescript({
    webpack(config, options) {
      // Do not run type checking twice:
      if (options.isServer)
        config.plugins.push(new ForkTsCheckerWebpackPlugin());

      return config;
    }
  })
);
