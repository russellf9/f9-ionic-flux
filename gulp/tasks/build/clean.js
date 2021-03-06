'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    path = require('path');


// cleans the distribution folder
gulp.task('clean', function(cb) {

    var build = gulp.args.build || gulp.args.emulate || gulp.args.run,
        targetDir = path.resolve(build ? './www' : './.tmp');

    return gulp.src(targetDir, {read: false})
        .pipe(gulp.plugins.clean({force: true})).on('error', errorHandler);
    cb();
});

// Handle errors
function errorHandler(error) {
    console.log('Gulp Clean Error: ', error.toString());
    /*jshint validthis:true */
    this.emit('end');
}
