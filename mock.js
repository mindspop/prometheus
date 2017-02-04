const drakov = require('./drakov/index')
const watcher = require('./drakov/watcher')
const options = require('./config').drakovOptions

module.exports = function mock(done) {
  drakov.run(options, () => {
    watcher(options)
    done()
  })
}
