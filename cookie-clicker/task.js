const img = document.getElementById(`cookie`);
const counter = document.getElementById(`clicker__counter`);
let count = parseInt(counter.textContent);
const newDiv = document.createElement(`div`);
newDiv.className = `clicker__speed`;
let lastClickTime = Date.now();
parentElement = document.getElementsByClassName(`clicker`)[0];
parentElement.insertBefore(newDiv, parentElement.firstChild);

let click = false

img.onclick = () => {
    count += 1
    counter.textContent = count;
    let time = Date.now();
    timePassed = (time - lastClickTime) /1000;
    speed = 1 / timePassed;
    lastClickTime = time;
    newDiv.textContent= `Скорость клика: ${speed.toFixed(2)} кл/с`;
    if (click) {
        img.width /= 1.2;
        click = !click
    } else {
        img.width *= 1.2;
        click = !click
    }

}


