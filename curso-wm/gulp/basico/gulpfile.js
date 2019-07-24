const gulp = require('gulp')

// parametros: nome da task, funcao que sera chamada quando a task for executada
gulp.task('default', () => {
  gulp.start('copiar', 'fim')
})

//para essa task ser executada, as tasks antes1 e antes2 precisam ser exeutadas antes
gulp.task('copiar', ['antes1', 'antes2'], () => {
  //arquivos que serao trabalhados no script 'copiar'
  gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // .pipe(transformacao1()) transformacoes
    // .pipe(transformacao2()) transformacoes
    .pipe(gulp.dest('pastaB')) // jogar arquivos transformados em determinada pasta
})

gulp.task('antes1', () => {
  console.log('antes 1')
})

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('antes2', () => {
  console.log('antes 2')
})

gulp.task('fim1', () => {
  console.log('fim')
})

gulp.task('fim2', () => {
  console.log()
})