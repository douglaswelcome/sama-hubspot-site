require('dotenv').config();

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const gutil = require('gulp-util');
const ftp = require('vinyl-ftp');



const watchPaths = {
    scssSrc: '_src/scss/**/*.scss',
    jsSrcCompile: '_src/js/compile/**/*.js',
    jsSrcSingles: '_src/js/singles/**/*.js'
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
        .pipe(gulp.dest('_codeDist/assets/css/'))
    //   .pipe(server.stream());
}

//JS Tasks__________________________

function jsCompiled() {
    return gulp.src(jsCompiledPaths)
        // .pipe(jshint('.jshintrc'))
        // .pipe(jshint.reporter('default'))
        .pipe(concat('sama.js'))
        .pipe(terser())
        .pipe(gulp.dest('_codeDist/assets/js/'));
}

function jsSingles() {
    return gulp.src(jsSinglesPaths)
        // .pipe(jshint('.jshintrc'))
        // .pipe(jshint.reporter('default'))

        .pipe(terser())
        .pipe(gulp.dest('_codeDist/assets/js/'));
}

//FTP Shizz______________________

/** Configuration **/
const user = process.env.FTP_USER
const password = process.env.FTP_PWD
const host = 'ftp.hubapi.com'
const port = 3200
const assetLocalGlob = '_assetDist/**/*'
// const codeLocalGlob = '_codeDist/**/*'


const assetRemoteFolder = '/portals/6398568-hubspot-developers-34rjat_com/content/files/'
// const codeRemoteFolder = '/portals/6398568-hubspot-developers-34rjat_com/content/designs/'


//non-codey things deploy to File Manager
async function assetDeploy() {
 
    var conn = ftp.create( {
        host:     host,
        port:     port,
        user:     user,
        password: password,
        parallel: 5,
        log:      gutil.log,
        secure: true
    } );

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
 
    return gulp.src( assetLocalGlob, { base: '.', buffer: false } )
        .pipe( conn.newer( assetRemoteFolder ) ) // only upload newer files
        .pipe( conn.dest( assetRemoteFolder ) );
 
}

// //codey things deploy to Design Manager

// async function codeDeploy() {
 
//     var conn = ftp.create( {
//         host:     host,
//         port:     port,
//         user:     user,
//         password: password,
//         parallel: 5,
//         log:      gutil.log,
//         secure: true
//     } );

//     // using base = '.' will transfer everything to /public_html correctly
//     // turn off buffering in gulp.src for best performance
 
//     return gulp.src( codeLocalGlob, { base: '.', buffer: false } )
//         .pipe( conn.newer( codeRemoteFolder ) ) // only upload newer files
//         .pipe( conn.dest( codeRemoteFolder ) );
 
// }



gulp.task(assetDeploy);
gulp.task(scss);
gulp.task(jsCompiled);
gulp.task(jsSingles);




//watchers

function watchFiles () {
    gulp.watch(watchPaths.scssSrc, scss);
    // gulp.watch(watchPaths.htmlSrc, reload);
    gulp.watch(watchPaths.jsSrcCompile, jsCompiled);
    gulp.watch(watchPaths.jsSrcSingles,jsSingles);
    gulp.watch(assetLocalGlob, assetDeploy)
}


// exports.default = gulp.series(scss, js, serve, watchFiles);
gulp.task(watchFiles);
//change in scss

// function watchFiles () {
//     gulp.watch(paths.scssSrc, gulp.series(scss)
// }


