module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Liminal Network',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Decentralized creative space.' },
      { hid: 'og_title', property: 'og:title', content: 'The Liminal Network' },
      { hid: 'og_description', property: 'og:description', content: 'Decentralized creative space.' },
      { hid: 'og_image', property: 'og:image', content: 'https://liminal.network/_nuxt/img/liminal.aaf41b4.png'},
      { hid: 'og_url', property: 'og:url', content: 'https://liminal.network' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/liminal-favicon.png' },
      // { href: 'https://fonts.googleapis.com/css?family=Archivo+Black', rel: 'stylesheet'}
    ],
    script: [
      // { src: 'https://js.stripe.com/v3/'}
      { src: 'https://www.universe.com/embed2.js', 'data-state': '' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
