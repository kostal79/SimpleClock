//coords of the hourehand
let hourCoord = {};

//coords of the minutehand
let minCoord = {}


//calculate coords for any hand
function h(angle, len) {
    let x = Math.cos(angle) * len;
    let y = Math.sin(angle) * len;
    return [50 + x, 50 - y]
}


//set hourCoord
(function () {
    let angle = 0;
    let num = 0;
    while (angle < 4 * Math.PI) {
        let key = (27 - num) % 24
        hourCoord[key] = h(angle, 25);
        angle += (Math.PI / 6);
        num++;
    }
})();

//set minCoord
(function () {
    let angle = 0;
    let num = 0;
    while (angle < 2 * Math.PI) {
        let key = (75 - num) % 60
        minCoord[key] = h(angle, 30);
        angle += (Math.PI / 30);
        num++;
    }
})();

function tik() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let hourehand = document.querySelector('.hourehand');
    let minutehand = document.querySelector('.minutehand');
    hourehand.setAttribute('x2',`${hourCoord[hours][0]}`);
    hourehand.setAttribute('y2',`${hourCoord[hours][1]}`);
    minutehand.setAttribute('x2', `${minCoord[minutes][0]}`);
    minutehand.setAttribute('y2', `${minCoord[minutes][1]}`);
    hourehand.setAttribute('transform', `rotate(${minutes / 60 * 30}, 50, 50)`)
}

tik();

setInterval(tik, 1000);