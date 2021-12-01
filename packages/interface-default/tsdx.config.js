const postcss = require('rollup-plugin-postcss')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true,
        extract: 'default.min.css',
        minimize: true,
      })
    )
    delete config.output.file
    config.output.dir = './dist'
    return config
  },
}
