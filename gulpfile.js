// 载入外挂
var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'), //压缩CSS
//	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	livereload = require('gulp-livereload'),
//	htmlmin = require('gulp-htmlmin'),
	autoprefixer = require('gulp-autoprefixer');

// 压缩非minjs,检查JS
gulp.task('scripts', function() {
	return gulp.src(['Public/5.4/*.js', '!js/*min.js'])// 要压缩的js文件
//		.pipe(jshint())
//		.pipe(jshint.reporter('default'))
		//		.pipe(rename({
		//			suffix: '.min'
		//		}))
		.pipe(uglify()) //使用uglify进行压缩,更多配置请参考：
		.pipe(gulp.dest('dist/js'))//压缩后的路径
		.pipe(notify({
			message: 'Scripts task complete'
		}));
});


//手机端js压缩
gulp.task('scriptsphone', function() {
	return gulp.src(['view/js/*.js', '!js/*min.js'])// 要压缩的js文件
//		.pipe(jshint())
//		.pipe(jshint.reporter('default'))
		//		.pipe(rename({
		//			suffix: '.min'
		//		}))
		.pipe(uglify()) //使用uglify进行压缩,更多配置请参考：
		.pipe(gulp.dest('view/js/min'))//压缩后的路径
		.pipe(notify({
			message: 'Scripts task complete'
		}));
});

// 压缩非mincss
gulp.task('styles', function() {
	return gulp.src(['assets/*.css', '!**/*min.css'])
		.pipe(autoprefixer())
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'))
		.pipe(notify({
			message: 'styles task complete'
		}));
});


//压缩手机端样式
gulp.task('stylesphone', function() {
	return gulp.src(['view/css/*.css', '!**/*min.css'])
		.pipe(autoprefixer())
		.pipe(minifycss())
		.pipe(gulp.dest('view/css/min'))
		.pipe(notify({
			message: 'styles task complete'
		}));
});

//压缩图片
gulp.task('images', function() {
	return gulp.src(['assets/images/**/*.png', 'assets/images/**/*.jpg', 'assets/images/**/*.gif','assets/images/**/*.jpeg'])
				.pipe(cache(imagemin({
					optimizationLevel: 3,
					progressive: true,
					interlaced: true
				})))
		.pipe(gulp.dest('build'))
		.pipe(notify({
			message: 'Images task complete'
		}));
});

// 压缩html
gulp.task('htmls', function() {
	return gulp.src('src/**/*.shtml')
//		.pipe(htmlmin())
		.pipe(gulp.dest('build'))
		.pipe(notify({
			message: 'htmls task complete'
		}));
});

// 移动MINJS,MINCSS
gulp.task('min_css_js', function() {
	return gulp.src(['src/**/*min.js', 'src/**/*min.css'])
		.pipe(gulp.dest('build'))
		.pipe(notify({
			message: 'build min css / js task complete'
		}));
});

// 移动字体文件
gulp.task('fonts', function() {
	return gulp.src('src/**/*.ttf')
		.pipe(gulp.dest('build'))
		.pipe(notify({
			message: 'fonts task complete'
		}));
});

/**
 * 删除所有编译文件
 */
gulp.task('clean', function() {
	return gulp.src(['build'], {
			read: false
		})
		.pipe(clean());
});

// 预设任务
gulp.task('default', ['clean'], function() {
	gulp.start(['scripts', 'styles', 'images', 'htmls', 'min_css_js', 'fonts']);
});

// 看手
//gulp.task('watch', function() {

// 看守所有.scss档
//	gulp.watch('src/styles/**/*.scss', ['styles']);
//
//
//	// 看守所有.js档
//	gulp.watch('src/scripts/**/*.js', ['scripts']);
//
//
//	// 看守所有图片档
//	gulp.watch('src/images/**/*', ['images']);

// 建立即时重整伺服器
//	var server = livereload();

// 看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整
//	gulp.watch(['src/**']).on('change', function(file) {
//		server.changed(file.path);
//	});

//});

gulp.task('default',function(){
	gulp.run('scripts');
	gulp.run('scriptsphone');
	gulp.run('styles');
	gulp.run('stylesphone');
	gulp.run('images');
	console.log('hello world');
});