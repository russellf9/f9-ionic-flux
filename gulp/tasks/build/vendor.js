'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    sourcemaps = require('gulp-sourcemaps'),
    path = require('path');

// performs all required operations to distribute the vendor js files
gulp.task('vendor', function() {

    var build = gulp.args.build || gulp.args.emulate || gulp.args.run,
        targetDir = path.resolve(build ? './www/' : './.tmp/');

    return gulp.src(gulp.vendorFiles,
        {base: 'bower_components/'})
        .pipe(sourcemaps.init())
        .pipe(gulp.plugins.concat('vendor.js'))
        .pipe(gulp.plugins.if(build, gulp.plugins.uglify()))
        .pipe(sourcemaps.write())
        .pipe(gulp.plugins.if(build, gulp.plugins.rename({extname: '.min.js'})))
        .pipe(gulp.dest(targetDir + '/js'))
        .on('error', errorHandler);
});


// Handle errors
function errorHandler(error) {
    gulp.plugins.util.log('Gulp Vendor Error: ', error.toString());
    /*jshint validthis:true */
    this.emit('end');
}
