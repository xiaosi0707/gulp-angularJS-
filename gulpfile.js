'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var webServer = require('gulp-webserver');
var sass = require('gulp-ruby-sass');

// 复制html
gulp.task('copyHtml', function () {
    var files = [
        './index.html',
        './src/**/*.html',
        '!./src/assets/**/*.html'
    ]
    return gulp.src(files)
        .pipe(gulp.dest('./dist'));
});
// 编译sass
gulp.task('sassTask', function () {
    return sass('./src/assets/css/app.scss')
        .on('error', sass.logError) // 错误信息
        .pipe(gulp.dest('./dist'));
});

// 合并第三库
gulp.task('lib-bundle', function () {
    var files =[
        './lib/angularJS/angular.js',
        './lib/angularJS/angular-ui-router.js'
    ]
    return gulp.src(files)
        .pipe(concat('lib-bundle.js'))
        .pipe(gulp.dest('./dist'));
});

// 合并自己写的js代码
gulp.task('jsTask', function () {
    gulp.src(['./src/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist'));
})

// 打包
gulp.task('default',['copyHtml', 'lib-bundle', 'sassTask', 'jsTask'], function () {

});

// 监听
gulp.task('sassWatch', function () {
    gulp.watch('./src/assets/css/**/*.scss', ['sassTask']);
    gulp.watch('./index.html', ['copyHtml']);
})

// 服务器
gulp.task('server',['sassWatch'], function () {
    gulp.src('./dist')
        .pipe(webServer({
            port: 8081,
            livereload: true,
            directoryListing: false,
            open: true
        }));
});
