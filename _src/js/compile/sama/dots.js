
    // canvas.width = canvas.clientWidth;
    // canvas.height = canvas.clientHeight;


function getDocumentWidth() {
    return canvas.clientWidth;
};

function getDocumentHeight() {
    return canvas.clientHeight;
};

var canvas = document.getElementById('dotCanvas');
var context = canvas.getContext('2d');

var vw = getDocumentWidth(),
    vh = getDocumentHeight();

// grid

// function drawGrid() {
//     var cellW = 10,
//         cellH = 10;

//     // vertical lines
//     for (var x = 0; x <= vw; x += cellW) {
//         context.moveTo(x, 0); // x, y
//         context.lineTo(x, vh);
//     }

//     // horizontal lines
//     for (var y = 0; y <= vh; y += cellH) {
//         context.moveTo(0, y); // x, y
//         context.lineTo(vw, y);
//     }

//     context.strokeStyle = "#cccccc";
//     context.stroke();
// }
// drawGrid();

// dots

function drawDots() {
    var r = 4,
        cw = 44,
        ch = 44;

    for (
        var x = 20; 
        x < vw; 
        x += cw) 
        {
        for (var y = 20; y < vh; y += ch) {

            var circle = new Path2D ();

            var circle = new Path2D();
            circle.arc(x - r / 2, y - r / 2, r, 0, 2 * Math.PI );

          

            context.fillStyle = '#fff';
            context.fill(circle);
        }
    }
}
drawDots();



//fix it on resize

function resizeCanvas() {
    canvas.width =  vw;
    canvas.height =  vh;
    drawDots();
}



function onResize() {
    vw = getDocumentWidth();
    vh = getDocumentHeight();
    resizeCanvas();
}

resizeCanvas();

// resize the canvas to fill the browser window
window.addEventListener('resize', onResize, false);