const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/vue2-black-jack/" : "/",
  pages: {
    index: {
      entry: "src/main.js",
      title: "Black Jack",
    },
  },
  chainWebpack: (config) => {
    // Pug Loader
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader")
      .end();
  },
});
