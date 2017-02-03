gulp = require 'gulp'
coffee = require 'gulp-coffee'
pug = require 'gulp-pug'
sass = require 'gulp-sass'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'
minifyCss = require 'gulp-minify-css'
del = require 'del'
runSequence = require 'run-sequence'

gulp.task 'clean', () ->
  del './gen/**/*'

gulp.task 'coffee', () ->
  gulp.src './src/coffee/*.coffee'
      .pipe coffee()
      .pipe gulp.dest './gen/js'

gulp.task 'pug', () ->
  gulp.src './src/pug/*.pug'
    .pipe pug
      pretty: true
    .pipe gulp.dest './'

gulp.task 'sass', () ->
  gulp.src './src/sass/*.scss'
    .pipe sass()
    .pipe gulp.dest './gen/css'

gulp.task 'js', () ->
  gulp.src ['./gen/js/*.js']
    .pipe concat 'filters.js'
    .pipe uglify()
    .pipe gulp.dest './bin/js'

gulp.task 'css', () ->
  gulp.src ['./gen/css/*.css']
    .pipe concat 'filters.css'
    .pipe minifyCss()
    .pipe gulp.dest './bin/css'

gulp.task 'compile', () ->
  runSequence('clean', 'coffee', 'sass', 'pug', 'js', 'css')

gulp.task 'default', () ->
  runSequence('compile')

gulp.task 'watch', () ->
  coffeePath = './src/coffee/*.coffee'
  pugPath = './src/pug/*.pug'
  sassPath = './src/sass/*.scss'
  gulp.watch [coffeePath, pugPath, sassPath], ['compile']
