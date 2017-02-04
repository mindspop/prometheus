const del = require('del')

const htmlPath = require('./config').base.htmlPath

module.exports = function clean() {
  return del(htmlPath).then(paths => {
    console.log(paths)
  })
}
