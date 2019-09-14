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


//CSS Tasks

function scss() {
    return gulp
        .src('_src/scss/main.scss')
        //   .pipe(sourcemaps.init({
        //       loadMaps: true
        //     })
        //     .on('error', sass.logError))
        .pipe(sass({
                // includePaths: './static-src/scss',
                outputStyle: 'compressed' //minifies
            })
            .on('error', sass.logError))
        .pipe(autoprefixer())
        // .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('_dist/assets/css/'))
    //   .pipe(server.stream());
}

//JS Tasks

function jsCompiled() {
    return gulp.src(jsCompiledPaths)
        // .pipe(jshint('.jshintrc'))
        // .pipe(jshint.reporter('default'))
        .pipe(concat('sama.js'))
        .pipe(terser())
        .pipe(gulp.dest('_dist/assets/js/'));
}

function jsSingles() {
    return gulp.src(jsSinglesPaths)
        // .pipe(jshint('.jshintrc'))
        // .pipe(jshint.reporter('default'))

        .pipe(terser())
        .pipe(gulp.dest('_dist/assets/js/'));
}

//FTP Shizz

/** Configuration **/
const user = process.env.FTP_USER
const password = process.env.FTP_PWD
const host = 'ftp.hubapi.com'
const port = 3200
const localGlob = [
    '_assetDist/**/*'
]
const remoteFolder = '/portals/6398568-hubspot-developers-34rjat_com/content/files/'

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
 
    return gulp.src( localGlob, { base: '.', buffer: false } )
        .pipe( conn.newer( remoteFolder ) ) // only upload newer files
        .pipe( conn.dest( remoteFolder ) );
 
}


gulp.task(scss);
gulp.task(jsCompiled);
gulp.task(jsSingles);
gulp.task(assetDeploy)