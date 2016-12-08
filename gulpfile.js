var gulp 			= require('gulp');
var concat 		= require('gulp-concat');
var watch 		= require('gulp-watch');
var sass 			= require('gulp-sass');
var plumber   = require('gulp-plumber');
// var imagemin  = require('gulp-imagemin');


gulp.task('default', ['js_app', 'sass', 'js_libs', 'watch']);


gulp.task('watch', function(){

  gulp.watch( 'src/js/**/*.js', ['js_app']);

  gulp.watch( 'src/sass/**/*.sass', ['sass']);

  // gulp.watch( 'img/src/**', ['images']);

});

gulp.task('js_app', function() {

  return gulp.src('src/js/**/*.js')
	       .pipe(plumber({
	          errorHandler: function (error) {
	            console.log(error.message);
	            this.emit('end');
	       }}))
         .pipe(concat("app.js"))
         .pipe(gulp.dest( 'reader/static/' ))
         .pipe(gulp.dest('dist/js/'))

});

gulp.task('sass', function(){
  return gulp.src('src/sass/main.sass')
        .pipe(plumber({
          errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe(sass({
          indentedSyntax: false
        }))
        .pipe(concat("main.css"))
        .pipe(gulp.dest( 'reader/static/' ))
        .pipe(gulp.dest( 'dist/css/' ))
});


//libs
gulp.task('js_libs', function() {
  return gulp.src('src/vendor/**/*.js')
         .pipe(plumber({
            errorHandler: function (error) {
              console.log(error.message);
              this.emit('end');
         }}))
         .pipe(concat("vendors.js"))
         .pipe(gulp.dest( 'reader/static/' ))
         .pipe(gulp.dest('dist/js/'))
});

// Image files

// gulp.task('images', function () {

//     return gulp.src('img/**')
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}]
//         }))
//         .pipe(gulp.dest('img/'));
// });