gulp = require 'gulp'
nodemon = require 'gulp-nodemon'
plumber = require 'gulp-plumber'
livereload = require 'gulp-livereload'
sass = require 'gulp-sass'
pug = require 'gulp-pug'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'
cleanCSS = require 'gulp-clean-css'
notify = require 'gulp-notify'

gulp.task 'sass', ->
  gulp.src './src/sass/*.scss'
    .pipe plumber(errorHandler: notify.onError '<%= error.message %>')
    .pipe sass()
    .pipe concat 'filters.css'
    .pipe gulp.dest './bin/css'
    .pipe livereload()

gulp.task 'coffee', ->
  gulp.src './src/coffee/*.coffee'
    .pipe plumber(errorHandler: notify.onError '<%= error.message %>')
    .pipe coffee()
    .pipe concat 'filters.js'
    .pipe gulp.dest './bin/js'
    .pipe livereload()

gulp.task 'pug', ->
  gulp.src './src/pug/*.pug'
    .pipe plumber(errorHandler: notify.onError '<%= error.message %>')
    .pipe pug
      pretty: true
    .pipe gulp.dest './'
    .pipe livereload()

gulp.task 'watch', ->
  livereload.listen()
  gulp.watch './src/sass/*.scss', ['sass']
  gulp.watch './src/coffee/*.coffee', ['coffee']
  gulp.watch './src/pug/*.pug', ['pug']

gulp.task 'default', ['sass', 'coffee', 'pug', 'watch']
