const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
    },
})
