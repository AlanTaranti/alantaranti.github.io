const TITLE = "Alan Taranti";
const URL = "https://alantaranti.github.io/";
const IMAGE_SVG = "https://alantaranti.github.io/me_landscape.svg";
const MIME_SVG = "image/svg+xml";
const IMAGE_TWITTER = "https://alantaranti.github.io/me.png";
const DESCRIPTION = "Apenas mais um Engenheiro de Dados";
const LOCALE = "pt-BR";
const LOCALE_OG = LOCALE.replace("-", "_");
const THEME_COLOR = "#228B22";
const TWITTER_PROFILE = "@AlanTaranti";
const FONT_AWESOME_URL = "https://kit.fontawesome.com/19b73b5b5d.js";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  modern: "client",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: TITLE,
    htmlAttrs: {
      lang: LOCALE,
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: DESCRIPTION },
      { name: "format-detection", content: "telephone=no" },
      { name: "theme-color", content: THEME_COLOR },

      /* Open Graph */
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: URL,
      },
      {
        property: "og:image",
        content: IMAGE_SVG,
      },
      {
        property: "og:image:type",
        content: MIME_SVG,
      },
      {
        property: "og:description",
        content: DESCRIPTION,
      },
      {
        property: "og:locale",
        content: LOCALE_OG,
      },

      /* Twitter Card */
      {
        property: "twitter:card",
        content: "summary",
      },
      {
        property: "twitter:site",
        content: TWITTER_PROFILE,
      },
      {
        property: "twitter:description",
        content: DESCRIPTION,
      },
      {
        property: "twitter:image",
        content: IMAGE_TWITTER,
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: FONT_AWESOME_URL,
        crossorigin: "anonymous",
        defer: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCss: true,
  },
};
