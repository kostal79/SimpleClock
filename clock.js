
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