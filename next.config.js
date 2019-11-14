// eslint-disable-next-line @typescript-eslint/no-var-requires
const withCSS = require('@zeit/next-css')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = withCSS({
    /* config options here*/
    webpack(config, options) {
        config.resolve.extensions.push('.ts', '.tsx')
        return config
    },
})
