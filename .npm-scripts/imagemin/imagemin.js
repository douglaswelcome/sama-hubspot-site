console.log("hey baby");

const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');
const imageminGiflossy = require('imagemin-giflossy');

const file_src = ['_src/img/*.{jpg,jpeg,png,gif,svg}']
 
(async () => {
    const files = await imagemin(file_src, {
        destination: '_tempImg',
        plugins: [
            imageminMozjpeg({
                quality:[80]
            }),
            imageminPngquant({
                quality: [0.6, 0.8]
            }),
            imageminGiflossy({}),
            imageminSvgo({})
        ]
    });
 
    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();