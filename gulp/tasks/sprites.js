'use strict';

module.exports = function() {
  $.gulp.task('sprites', function() {
    var spriteData = $.gulp.src('source/images/sprite/*.png')
        .pipe($.gp.spritesmith({
          imgName: 'sprite.png',
          imgPath: '../images/sprite.png',
          cssName: 'sprite.scss'
        }));
    spriteData.img.pipe($.gulp.dest('source/images'));
    spriteData.css.pipe($.gulp.dest('source/style/'));
    return spriteData;
  });
};
