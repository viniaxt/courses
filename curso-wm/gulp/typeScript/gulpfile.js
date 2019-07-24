const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

// estamos criando a pasta build, onde ts foi transferido para js

gulp.task('default', () => {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('build'))
})