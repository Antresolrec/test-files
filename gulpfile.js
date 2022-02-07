const gulp = require('gulp'); // модуль gulp
const rename = require("gulp-rename"); // rename файлов
const browserSync = require("browser-sync") // перезагрузка браузера
const sourcemaps = require('gulp-sourcemaps'); // карта исходных файлов
const replace = require('gulp-replace'); // замена строки в файлах

let fs = require('fs');

//css
const concatCss = require('gulp-concat-css'); // модуль соединения файлов CSS
// const autoprefixer = require('gulp-autoprefixer'); // автопрефиксер для CSS
const group_media = require("gulp-group-css-media-queries"); // группировка медиазапросов вниз файла стилей
const csso = require('gulp-csso'); // сжатие CSS
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob'); //импорт глубокой вложенности

sass.compiler = require('node-sass');

//js
const webpack = require('webpack'); // webpack
const webpackConfig = require('./src/jsModules/webpack.config.js'); // webpack конфиг с путями для js

//html
const webphtml = require('gulp-webp-html');
const fileinclude = require("gulp-file-include");
const htmlbeautify = require('gulp-html-beautify');
const del = require("del");

//imag
const gulpImagemin = require('gulp-imagemin'); // сжатие изображений
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
// const webp = require('gulp-webp');

//fonts
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

let path = {
	build: {
		html: "./dist/",
		css: "./dist/css/",
		// js: "./dist/js/",
		img: "./dist/img/",
		fonts: "./dist/fonts/",
	},
	src: {
		html: './src/*.html',
		css: "./src/sass/index.sass",
		// js: "./src/js/index.js",
		img: "./src/img/**/*.{jpg,png,svg,gif,ico,webp}",
		fonts: "./src/fonts/**/*.ttf",
		fontsBuild: "./src/fonts/**/*.{ttf,woff,woff2}",
	},
	watch: {
		html: "./src/**/*.html",
		css: "./src/sass/**/*.*",
		// js: source_folder + "./src/js/**/*.js",
		img: "./src/img/**/*.{jpg,png,svg,gif,ico,webp}"
	},
	clean: "./dist/"
}

function browserSyncInit(cb) {
	browserSync.init({
		server: {
			baseDir: "./dist",
			// часть для работы с ajax на http://localhost
			routes: {},
			middleware: function (req, res, next) {
				if (/\.json|\.txt|\.html/.test(req.url) && req.method.toUpperCase() == 'POST') {
					console.log('[POST => GET] : ' + req.url);
					req.method = 'GET';
				}
				next();
			}
			// часть для работы с ajax на http://localhost
		}
	});
	cb();
}

function browserSyncReload(cb) {
	browserSync.reload();
	cb();
}

function watchFiles() {
	gulp.watch(path.watch.css, cssBuild);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.img, images);
}

function cssBuild() {
	return gulp.src(path.src.css)
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(rename('style.min.css'))
		.pipe(group_media())
		// .pipe(autoprefixer({
		// 	grid: true,
		// }))
		.pipe(csso({
			restructure: false,
			sourceMap: true,
			debug: true
		}))
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest(path.build.css))
		.pipe(browserSync.stream());
}

function jsBuild(cb) {
	if (isProductionBuild()) {
		webpackConfig.mode = "production";
	}

	let compiler = webpack(webpackConfig);

	compiler.run(function (err, stats) {
		console.log(stats.toString({
			colors: true
		}));

		if (!err || !stats.hasErrors()) {
			browserSync.reload();
			cb();
		}
	});
}

function jsWatch(cb) {
	let compiler = webpack(webpackConfig),
		watchOptions = {
			aggregateTimeout: 300,
			poll: undefined
		};

	compiler.watch(watchOptions, function (err, stats) {
		console.log(stats.toString({
			colors: true
		}));

		if (!err || !stats.hasErrors()) {
			browserSync.reload();
			cb();
		}
	});

}

function images(cb) {
	gulp.src(path.src.img)
		.pipe(gulpImagemin([
			gulpImagemin.gifsicle({ interlaced: true }),
			gulpImagemin.jpegtran({ progressive: true }),
			imageminJpegRecompress({
				loops: 5,
				min: 65,
				max: 70,
				quality: 'medium',
				progressive: true
			}),
			gulpImagemin.optipng({ optimizationLevel: 3 }),
			pngquant({ quality: [0.7, 0.8], speed: 5 })
		]))
		.pipe(gulp.dest(path.build.img))
	// .pipe(gulp.src(path.src.img))
	// .pipe(
	//     webp({
	//         quality: 95
	//     })
	// )
	// .pipe(gulp.dest(path.build.img));

	browserSync.stream();

	cb();

}

function html() {
	return gulp.src(path.src.html)
		.pipe(fileinclude())
		// .pipe(webphtml())
		.pipe(htmlbeautify())
		.pipe(gulp.dest(path.build.html))
		.pipe(browserSync.stream())
}

//функция замены строки в файлах
function replaceStrFiles(oldStr, newStr, path) {
	gulp.src([path])
		.pipe(replace(oldStr, newStr))
		.pipe(gulp.dest('./'));
}

//проверка есть ли в вызове таска флаг --prod
function isProductionBuild() {
	if (process.argv.length >= 4) {
		if (process.argv[process.argv.length - 1] === "--prod") {
			return true;
		}
	}
}

function fonts() {
	gulp.src(path.src.fonts)
	.pipe(ttf2woff())
	.pipe(gulp.dest('./src/fonts/'))
return gulp.src(path.src.fonts)
	.pipe(ttf2woff2())
	.pipe(gulp.dest('./src/fonts/'))


};

function fontsReplace(cb) {
	gulp.src(path.src.fontsBuild)
		.pipe(gulp.dest(path.build.fonts));

	cb();
};



function fontsStyle(params) {
	let file_content = fs.readFileSync('./src/sass/fonts/fonts.scss');
	if (file_content == '') {
		fs.writeFile('./src/sass/fonts/fonts.scss', '', () => { });
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
					let fontname = items[i].split('.');
					fontname = fontname[0];
					if (c_fontname != fontname) {
						fs.appendFile('./src/sass/fonts/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', () => { });
					}
					c_fontname = fontname;
				}
			}
		})
	}
}

function clean(params) {
	return del(path.clean);
}

exports.zimg = images;
exports.fontsReplace = fontsReplace;
exports.fonts = fonts;
exports.build = gulp.series(clean, images, gulp.parallel(cssBuild, jsBuild, html), fontsReplace); // gulp build --prod (Сборка с сжатым js)
exports.default = gulp.series(clean, images, gulp.parallel(cssBuild, jsWatch, html), fontsReplace, browserSyncInit, watchFiles);
