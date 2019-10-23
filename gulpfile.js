require('dotenv').config();

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const gutil = require('gulp-util');
const ftp = require('vinyl-ftp');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const browserSync = require('browser-sync').create();



const watchPaths = {
    scssSrc: '_src/scss/**/*.scss',
    jsSrcCompile: '_src/js/compile/**/*.js',
    jsSrcSingles: '_src/js/singles/**/*.js',
    imgSrc: '_src/img/**/*',
    assetLocal: '_assetDist/img/testftp/*'
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


// fix those damn huge ass images

async function imgOpt () {
    gulp.src(watchPaths.imgSrc)
        // .pipe(newer('_assetDist/img/'))
		.pipe(imagemin())
		.pipe(gulp.dest('_assetDist/img/'))
}



//FTP Shizz______________________

/** Configuration **/
const user = process.env.FTP_USER
const password = process.env.FTP_PWD
const host = 'ftp.hubapi.com'
const port = 3200
const assetRemoteFolderDEV = '/portals/6398568-hubspot-developers-34rjat_com/content/files/'
const assetRemoteFolderPROD = '/portals/4379491-hubspot-developers-34rjat_com/content/files/custom/assets/static-assets/img/testftp/'

// const codeLocalGlob = '_codeDist/**/*'



// const codeRemoteFolder = '/portals/6398568-hubspot-developers-34rjat_com/content/designs/'


//non-codey things deploy to File Manager
async function assetDeploy(status) {
 
    var conn = ftp.create( {
        host:     host,
        port:     port,
        user:     user,
        password: password,
        parallel: 5,
        log:      gutil.log,
        secure: true,
        timeOffset: 280
        
        
    } );

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
 
    return gulp.src(watchPaths.assetLocal, { base: '', buffer: false } )
        // .pipe(conn.changed(assetRemoteFolderPROD))
        .pipe(conn.newer(assetRemoteFolderPROD))// only upload newer files
        .pipe(conn.dest(assetRemoteFolderPROD));
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




//watchers



function watchCodeFiles () {
    gulp.watch(watchPaths.scssSrc, scss);
    // gulp.watch(watchPaths.htmlSrc, reload);
    gulp.watch(watchPaths.jsSrcCompile, jsCompiled);
    gulp.watch(watchPaths.jsSrcSingles,jsSingles);
}

async function watchAssetFiles () {
    gulp.watch(watchPaths.imgSrc, imgOpt);
    gulp.watch(watchPaths.assetLocal, assetDeploy)
}

gulp.task(watchCodeFiles);
gulp.task(watchAssetFiles);
gulp.task(assetDeploy);
gulp.task(imgOpt);
gulp.task(scss);
gulp.task(jsCompiled);
gulp.task(jsSingles);
gulp.task(serve);



async function testing (){
    gulp.watch(watchPaths.assetLocal, assetDeploy)
}

gulp.task(testing)

function serve (done) {
    browserSync.init({
        proxy: "https://hubspot-developers-34rjat-6398568.hs-sites.com/-temporary-slug-d18912b1-c8b6-4849-8841-2de5046f87c3?hs_preview=MvaNeNDJ-18105079929"
    });
    done();
  
}

function reload (done) {
    browserSync.reload();
    console.log('donker');
    done();
  }





function watcher() {
    gulp.watch('_codeDist/**/*', reload);
    
}




const maxzone = gulp.parallel(watchCodeFiles, watchAssetFiles);

exports.dev = gulp.parallel(maxzone, gulp.series(serve, watcher))
