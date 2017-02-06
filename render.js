const gulp = require('gulp')
const aglio = require('gulp-aglio')

const options = require('./config').get('renderOptions')

function render(pattern) {
  return function renderAPI(done) {
    return gulp.src(pattern, { base: options.base })
      .pipe(aglio(options))
      .pipe(gulp.dest(options.dest))
  }
}

module.exports = render
