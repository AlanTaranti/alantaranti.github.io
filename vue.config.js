/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require("webpack-merge");
const purgeCssConfig = require("./purgecss.config");

const vueConfig = {
  transpileDependencies: ["vuetify"]
};

module.exports = merge(purgeCssConfig, vueConfig);
