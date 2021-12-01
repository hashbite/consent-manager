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
    const extension = config.output.format === 'esm' ? '.esm.js' : '.js'
    config.output.chunkFileNames = `[name]-[hash]${extension}`
    config.output.entryFileNames = `[name]${extension}`
    config.output.compact = false
    return config
  },
}
