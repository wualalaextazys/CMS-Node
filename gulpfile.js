var gulp = require("gulp");


//imported task
gulp.task('lint',require('./gulp/eslint'));

//Tasks
gulp.task('analyze',['lint']);
gulp.task('pre-push',['lint']);
