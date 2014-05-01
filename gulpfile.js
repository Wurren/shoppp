
/*
|--------------------------------------------------------------------------
| Build for JS
|--------------------------------------------------------------------------
*/

var  gulp           = require('gulp'),
     notify         = require('gulp-notify'),
     uglify         = require('gulp-uglify'),
     rename         = require('gulp-rename'),
     livereload     = require('gulp-livereload');   

gulp.task('uglify', function() {
     return gulp.src('src/shoppp.js')
          .pipe(rename('shoppp.min.js'))
          .pipe(uglify())
          .pipe(gulp.dest('src'))
          .pipe(notify({ message: 'Build - Done!' }))
});

gulp.task('watch', function() {
     gulp.watch('src/shoppp.js', ['uglify']);
     var server = livereload();
     gulp.watch(['js/shoppp.min.js', '*.html']).on('change', function(file) {
          server.changed('*.html');
     });
});
