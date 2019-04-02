'use strict';
let socket = io();

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")
updateCanvasSize();

function updateCanvasSize() {
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;
}

function drawHex(center, radius, fill) {
    ctx.beginPath();
    for(let i=0; i<6; i++) {
        let x = Math.cos((Math.PI / 3) * i) * radius
        let y = Math.sin((Math.PI / 3) * i) * radius
        ctx.lineTo(center[0] + x, center[1] + y)
    }
    ctx.closePath();
    
    if(fill)
    ctx.fill();
    else
    ctx.stroke();
}

function drawMap(map) {
    if(map.majorAxis = 'x') {
        radius = (canvas.width * (map.axisSize*2 - 1) ) / 4 * map.axisSize**2
    } else if(map.majorAxis = 'y') {
        radius = (canvas.height / (map.axisSize*2)) * Math.sqrt(3)
    }

    for (i in map.struct) {
        map.struct
    }
}

map = {
    struct:[[0,0],[1,0],[1,0],[1,1]],
    majorAxis:'x',
    axisSize:2
}