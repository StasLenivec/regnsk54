// import configService from "./config/config";
const env = require("dotenv").config();

const serverConfig = {
  port: 3000,
  host: "0.0.0.0",
};
console.log("serverConfig", serverConfig);
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "regnsk54",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
    ],
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        integrity:
          "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        crossorigin: "anonymous",
      },
    ],
  },

  env: env.parsed,

  loading: { color: "#fff" },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["assets/sass/argon.scss", "assets/sass/my-style.sass"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/dashboard/dashboard-plugin" },
    // { src: "~/plugins/flag-langs.js", mode: "client" },
    { src: "~/plugins/dashboard/full-calendar", ssr: false },
    { src: "~/plugins/dashboard/world-map", ssr: false },
    { src: "plugins/swiper.js", ssr: false },
    // { src: "~/plugins/vueditor.js", ssr: false, mode: "client" },
    // { src: "~/plugins/systemMessagesHandler.js" },
    // { src: "~/plugins/dashboard/getGenericEntityData" },
    // { src: "~/plugins/dashboard/globalHelper" },
    // { src: "~/plugins/vue-screen" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  router: {
    // middleware: ["settingLang"],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/dotenv",
    // https://go.nuxtjs.dev/eslint
    () => {
      if (process.env.NODE_ENV === "development") {
        return "@nuxtjs/eslint-module";
      }
    },
    // https://github.com/nuxt-community/moment-module
    ["@nuxtjs/moment", { timezone: true }],
    "@nuxtjs/svg",
    // '@nuxtjs/composition-api/module',
  ],

  generate: {
    // choose to suit your project
    interval: 2000,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-i18n",
      {
        loadLanguagesAsync: true,
        locales: [
          {
            code: "ru",
            iso: "ru-RU",
            file: "ru.js",
          },
          {
            code: "en",
            iso: "en-US",
            file: "en.js",
            isCatchallLocale: true,
          },
        ],
        vueI18n: {
          fallbackLocale: "en",
          silentTranslationWarn: true,
        },
        vueI18nLoader: true,
        detectBrowserLanguage: {
          fallbackLocale: "en",
          redirectOn: "root",
          useCookie: true,
          cookieKey: "lang",
          // cookieSecure: true,
        },
        defaultLocale: "ru",
        parsePages: false,
        strategy: "no_prefix",
        lazy: true,
        langDir: "i18n/",
      },
    ],
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    ["bootstrap-vue/nuxt", { icons: false }],
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/dotenv",
    "cookie-universal-nuxt",
    "@nuxtjs/auth-next",
    // https://www.npmjs.com/package/@nuxtjs/toast
    // https://github.com/shakee93/vue-toasted
    // "@nuxtjs/toast",
  ],

  // auth: {
  //   strategies: {
  //     local: {
  //       scheme: "refresh",
  //       token: {
  //         property: "access_token",
  //         required: true,
  //         global: true,
  //         type: "Bearer",
  //         maxAge: 60 * 60,
  //       },
  //       refreshToken: {
  //         property: "refresh_token",
  //         data: "refresh_token",
  //         maxAge: 60 * 60 * 24 * 30,
  //       },
  //       user: {
  //         property: false,
  //         autoFetch: false,
  //       },
  //       endpoints: {
  //         login: {
  //           url: "/login",
  //           method: "post",
  //         },
  //         refresh: {
  //           url: "/refresh",
  //           method: "post",
  //         },
  //         logout: {
  //           url: "/logout",
  //           method: "get",
  //         },
  //         user: {
  //           url: "/user",
  //           method: "get",
  //         },
  //       },
  //     },
  //   },
  //   redirect: {
  //     login: "/login",
  //     logout: "/login",
  //     callback: "/login",
  //     home: "/",
  //   },
  //   plugins: ["~/plugins/auth-redirect.js"],
  // },

  bootstrapVue: {
    // https://bootstrap-vue.org/docs/icons
    icons: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   baseUrl: configService.api.url || "http://134.209.76.92:8100/api",
  // },

  server: serverConfig,

  // toast: {
  //   theme: "outline",
  //   position: "top-right",
  //   duration: 3500,
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: ["vue-awesome-swiper"],
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool =
          process.env.NODE_ENV === "development" ? "source-map" : "";
      }
    },
    transpile: ["vee-validate/dist/rules"],
    extractCSS: process.env.NODE_ENV === "production",
    babel: {
      compact: true,
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk",
          },
        ],
        ["@babel/plugin-syntax-dynamic-import", { loose: true }],
        ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        ["@babel/plugin-proposal-private-methods", { loose: true }],
      ],
    },

    postcss: {
      plugins: {
        // Disable `postcss-url`
        "postcss-url": {},
        // Add some plugins
        // 'postcss-nested': {},
        // 'postcss-responsive-type': {},
        // 'postcss-hexrgba': {},
      },
      preset: {
        autoprefixer: {
          flex: true,
        },
      },
    },
  },
};
