gulp = require 'gulp'
coffee = require 'gulp-coffee'
pug = require 'gulp-pug'
sass = require 'gulp-sass'
uglify = require 'gulp-uglify'
minifyCss = require 'gulp-minify-css'
concat = require 'gulp-concat'

gulp.task 'browserify', () ->
  browserify './'

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

gulp.task 'compile', ['coffee', 'sass', 'pug', 'js', 'css']
