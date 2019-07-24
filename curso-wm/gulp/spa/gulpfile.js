const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')
//run-sequence executa ordens determinadas em sequencia
// run-sequence so vai funcionar se vc estiver dando return em todos os metodos

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
  if (util.env.production) {
    sequence('deps', 'app')
    // gulp.start('deps', 'app')
  } else {
    sequence('deps', 'app', 'servidor')
    // gulp.start('deps', 'app', 'servidor')
  }
})