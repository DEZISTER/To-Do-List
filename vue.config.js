const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/utils/_variables.scss"; @import "@/scss/_fonts.scss";`
      }
    }
  }
})

