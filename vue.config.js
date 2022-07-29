const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  pwa: {
    themeColor: '#012A4A',
    name: 'Home Works',
    msTileColor: '#012A4A',
    manifestOptions: {
      background_color: '#012A4A'
    }
  },

  pluginOptions: {
    i18n: {
      locale: undefined,
      fallbackLocale: undefined,
      localeDir: undefined,
      enableInSFC: undefined,
      enableBridge: undefined
    }
  }
})
