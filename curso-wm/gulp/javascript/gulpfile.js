const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

// esse script criou a pasta build com a calculadora compactada

gulp.task('default', () => {
  return gulp.src('src/**/*.js') //pega todos os arquivos incluindo os arquivos na propria src ou em subpastas
    .pipe(babel({
      comments: false,
      presets: ["env"] // recebe todos os presets
    }))
    .pipe(uglify()) //babel tambem faz a minificacao
    .on('error', function (err) { console.log(err) })
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))
})