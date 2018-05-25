
const withCSS = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript(withSourceMaps(withCSS({ cssModules: true })))
