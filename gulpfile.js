var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.task('reload', function () {
    	browserSync.reload();
   	 	done();
	});


    gulp.watch("./css/*.css").on("change", reload);
    gulp.watch("./*.html").on("change", reload);
    gulp.watch("./js/*.js").on('change', reload);	
});
