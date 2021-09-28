require('dotenv').config();

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const browserSync = require('browser-sync').create();



const watchPaths = {
    scssSrc: '_src/scss/**/*.scss',
    jsSrcCompile: '_src/js/compile/**/*.js',
    jsSrcSingles: '_src/js/singles/**/*.js',
    imgSrc: '_src/img/**/*',
    assetLocal: '_assetDist/**/*'
}

const jsCompiledPaths = [
    '_src/js/compile/sama/*',
    '_src/js/compile/third-party/*'

];

const jsSinglesPaths = [
    '_src/js/singles/sama/*',
    '_src/js/singles/third-party/*'
];


//CSS Tasks_____________________

function scss() {
    return gulp
        .src('_src/scss/main.scss')
        .pipe(sourcemaps.init({
                loadMaps: true
            })
            .on('error', sass.logError))
        .pipe(sass({
                includePaths: './static-src/scss',
                outputStyle: 'compressed' //minifies
            })
            .on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('_codeDist/v1/assets/css/'))
    //   .pipe(server.stream());
}

//JS Tasks__________________________

function jsCompiled() {
    return gulp.src(jsCompiledPaths)
        // .pipe(jshint('.jshintrc'))
        // .pipe(jshint.reporter('default'))
        .pipe(concat('sama.js'))
        .pipe(terser())
        .pipe(gulp.dest('_codeDist/v1/assets/js/'));
}

async function jsSingles() {
    return gulp.src(jsSinglesPaths)
        // .pipe(jshint('.jshintrc'))
        // .pipe(jshint.reporter('default'))

        .pipe(terser())
        .pipe(gulp.dest('_codeDist/v1/assets/js/'));
}


// fix those damn huge ass images

async function imgOpt() {
    gulp.src(watchPaths.imgSrc)
        .pipe(changed('_assetDist/img/'))
        .pipe(imagemin())
        .pipe(gulp.dest('_assetDist/img/'))
        .pipe(gulp.dest('_tempImg/'))
}



//watchers



function watchCodeFiles() {
    gulp.watch(watchPaths.scssSrc, scss);
    // gulp.watch(watchPaths.htmlSrc, reload);
    gulp.watch(watchPaths.jsSrcCompile, jsCompiled);
    gulp.watch(watchPaths.jsSrcSingles, jsSingles);
}


function serve(done) {
    browserSync.init({
        proxy: {
            target: process.env.SANDBOX_URL,
        },
        online: true,
        https: false
    });
    done();

}

function reload(done) {
    browserSync.reload();
    done();
}


function watcher() {
    gulp.watch('_codeDist/**/*', reload);

}

gulp.task(watchCodeFiles);
gulp.task(scss);
gulp.task(jsCompiled);
gulp.task(jsSingles);
gulp.task(serve);
gulp.task(imgOpt);




exports.dev = gulp.parallel(watchCodeFiles, gulp.series(serve, watcher))