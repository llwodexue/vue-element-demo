"use strict";

module.exports = {
  devServer: {
    port: 9999,
    open: true,
  },
  pages: {
    login: {
      entry: "src/login.js",
      template: "public/login.html",
    },
    index: {
      entry: "src/main.js",
      template: "public/index.html",
    },
  },
};
