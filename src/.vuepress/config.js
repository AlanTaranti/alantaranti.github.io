const TITLE = "Alan Taranti";
const URL = "https://alantaranti.github.io/";
const IMAGE_SVG = "https://alantaranti.github.io/me_landscape.svg";
const MIME_SVG = "image/svg+xml";
const IMAGE_TWITTER = "https://alantaranti.github.io/me.png";
const DESCRIPTION = "Apenas mais um Engenheiro de Dados";
const LOCALE = 'pt-BR';
const LOCALE_OG = LOCALE.replace('-', '_');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: TITLE,
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: DESCRIPTION,

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

    /* Open Graph */
    ["meta", { property: "og:title", content: TITLE }],
    ["meta", { property: "og:type", content: 'website' }],
    ["meta", { property: "og:url", content: URL }],
    ["meta", { property: "og:image", content: IMAGE_SVG }],
    ["meta", { property: "og:image:type", content: MIME_SVG }],
    ["meta", { property: "og:description", content: DESCRIPTION }],
    ["meta", { property: "og:locale", content: LOCALE_OG }],

    /* Twitter Card */
    ["meta", { property: "twitter:card", content: "summary" }],
    ["meta", { property: "twitter:site", content: "@AlanTaranti" }],
    ["meta", { property: "twitter:title", content: TITLE }],
    ["meta", { property: "twitter:description", content: DESCRIPTION }],
    ["meta", { property: "twitter:image", content: IMAGE_TWITTER }],


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
      lang: LOCALE
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
