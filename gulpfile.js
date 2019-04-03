var gulp        = require('gulp');
const del 		= require('del');
const fileinclude  = require('gulp-file-include');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// 清除 dist 文件夹
gulp.task('clean', function () {
    return del.sync('./app/dist');
});

//ico
gulp.task('ico', function() {
    gulp.src('src/**.ico')
        .pipe(gulp.dest('dist'));
});

//copy 整合资源
gulp.task('assets', function() {
    gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/assets'));
});
gulp.task('static', function() {
    gulp.src('src/static/**/*')
        .pipe(gulp.dest('dist/static'));
});

// html 整合
gulp.task('html', function() {
    gulp.src('src/template/**/*.*')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});


//代理服务器 + 监听src文件夹下的所有文件
gulp.task('serve', function() {
    browserSync.init({
        server: {
        	baseDir: ['dist']
        },
        port: 4000
    });
});

//监听
gulp.task('watch',function(){
    gulp.watch('src/**/*',['assets','static','html']).on('change', reload);
})
//将serve设为gulp的默认任务
gulp.task('default',['serve','clean','assets','static','html','ico','watch']);
