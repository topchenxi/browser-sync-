var gulp = require('gulp');
// 合成sprite图片插件
var spritesmith = require('gulp.spritesmith');

module.exports = () => {
    return gulp.src(['static/sprites/*.png', 'static/sprites/**/*.png'])
        .pipe(spritesmith({
            imgName: 'images/sprites/sprite.png',
            cssName: 'css/sprites/sprite.css',
            cssFormat: 'css',
            padding: 10
        }))
        .pipe(gulp.dest('dist'))
        .on('end', () => {
            console.log('Build sprites successfully');
        });
}