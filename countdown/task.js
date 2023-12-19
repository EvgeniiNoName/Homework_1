// Первый вариант решения:


// const value = document.getElementById("timer");
// let second = parseInt(value.textContent);
// function updateTimer() {
//     value.textContent = second;
//     second--;
//     if (second < 0) {
//         alert("Вы победили в конкурсе!");
//         clearInterval(timerInterval);
//     }
// }
// const timerInterval = setInterval(updateTimer, 1000);

// Повышенный:

// const value = document.getElementById("timer");
// let second = parseInt(value.textContent);
// function updateTimer() {
//     if (second < 10) {
//         value.textContent = `00:00:0${second}`;
//     } else {
//         value.textContent = `00:00:${second}`;
//     }
//     second--;
//     if (second < 0) {
//         alert("Вы победили в конкурсе!");
//         clearInterval(timerInterval);
//     }
// }
// const timerInterval = setInterval(updateTimer, 1000);

const value = document.getElementById("timer");
let timer = parseInt(value.textContent);


function formatTime(timer) {
    if (timer < 86400) {
        let hours = Math.floor(timer / 3600);
        let minutes  = Math.floor((timer % 3600) / 60);
        let seconds  = Math.floor(timer % 60);

        let formattedHours = hours.toString().padStart(2, '0');
        let formattedMinutes = minutes.toString().padStart(2, '0');
        let formattedSeconds = seconds.toString().padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
    }

}

function updateTimer() {
    value.textContent = formatTime(timer);
    timer--;
    if (timer < 0) {
        alert("Вы победили в конкурсе!");
        window.location.href = 'https://ibb.co/jLfyWmM'
        clearInterval(timerInterval);
    }
}
const timerInterval = setInterval(updateTimer, 1000);