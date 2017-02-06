const drakov = require('./drakov/index')
const watcher = require('./drakov/watcher')
const options = require('./config').get('drakovOptions')

module.exports = function mock(done) {
  drakov.run(options, () => {
    watcher(options)
    done()
  })
}
