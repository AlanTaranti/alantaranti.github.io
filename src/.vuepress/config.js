const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Alan Taranti",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#228B22" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "script",
      {
        src: "https://kit.fontawesome.com/19b73b5b5d.js",
        crossorigin: "anonymous"
      }
    ]
  ],

  locales: {
    '/': {
      lang: 'pt-BR'
    }
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "AlanTaranti",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    search: false,
    nav: [],
    sidebar: {}
  },

  dest: 'dist',

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/google-analytics",
    [
      "@vuepress/google-analytics",
      {
        ga: " UA-126741876-1"
      }
    ]
  ]
};
