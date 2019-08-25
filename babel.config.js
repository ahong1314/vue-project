module.exports = {
  presets: [
      ['@vue/app', {
          polyfills: [
              'es6.promise'
          ]
      }]
  ],
  plugins: [
      ["import", { "libraryName": "vant", "libraryDirectory": "es", 'style': true}, "vant"],
      ["import", { "libraryName": "element-uielement-ui", "libraryDirectory": "packages", 'style': true}, "element-ui"]
  ]
}

