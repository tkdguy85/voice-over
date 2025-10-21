const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  },
  devServer: {
    port: 4001,
    host: 'localhost',
    open: true
  }
})
