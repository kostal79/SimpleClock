
function tik() {
    let date = new Date();
    let hours = date.getHours() % 12 ;
    let minutes = date.getMinutes();
    let hourehand = document.querySelector('.hourehand');
    let minutehand = document.querySelector('.minutehand');
    minutehand.setAttribute('transform', `rotate(${minutes * 6}, 50, 50)`)
    hourehand.setAttribute('transform', `rotate(${(hours * 60 + minutes) * 0.5}, 50, 50)`)
}

tik();

setInterval(tik, 1000);