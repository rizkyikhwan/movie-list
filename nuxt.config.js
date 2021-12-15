export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'movie-list',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
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
    height: '2.5px',
    throttle: 0,
    continous: true
  },

  pageTransition: {
    name: 'pages',
    mode: 'out-in'
  },

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
    backdropImg: process.env.BACKDROP_IMG
  },
  
  privateRuntimeConfig: {
  },
  
  env: {
    apiKey: process.env.API_KEY
  },
    

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
