export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Movie List - Latest Movie Info',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Get all the latest movies & series info you are looking for' },
      { hid: 'keywords', name: 'keywords', content: 'movies, stream, stremaing' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/main.scss'
  ],

  styleResources: {
    scss: [
      '~assets/scss/variables.scss'
    ]
  },

  loading: {
    color: '#2bbb99',
    height: '2.75px',
    throttle: 0,
    continuous: true
  },

  pageTransition: {
    name: 'pages',
    mode: 'out-in'
  },

  serverMiddleware: [
    '~/middleware/redirects.js'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/swiper.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      regular: true,
      brands: true
    }
  },

  colorMode: {
    storageKey: 'color-mode'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Lexend: true,
      'Readex+Pro': true,
      Raleway: {
        wght: [200, 300, 400, 500, 600, 700]
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL,
    },
    backdrop: process.env.BACKDROP,
    banner: process.env.BANNER,
    poster: process.env.POSTER,
    network: process.env.NETWORK,
    trailer: process.env.TRAILER
  },
  
  privateRuntimeConfig: {
  },
  
  env: {
    apiKey: process.env.API_KEY
  },
    

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
