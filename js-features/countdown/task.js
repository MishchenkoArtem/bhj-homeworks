const timer = document.querySelector("#timer");
let timerValue = timer.textContent.split(":");

// ---------- часы
let hh = timerValue[0];

// ---------- минуты
let mm = timerValue[1];

// ---------- секунды
let ss = timerValue[2];

// ---------- начать выполнение интервала
const intervalId = setInterval(() => {
    countdownSs();
    countdownMm();
    countdownHh();
    
    timer.textContent = `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}:${ss < 10 ? `0${ss}` : ss}`;

    if (hh <= 0 && mm <= 0 && ss === 1) {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
    }
}, 1000);

// ---------- отматать секунды
const countdownSs = () => {
    ss -= 1;
};

// ---------- отматать минуты
const countdownMm = () => {
    if (ss === 0) {
        mm -= 1;
        ss = 59;
    }
};

// ---------- отматать часы
const countdownHh = () => {
    if (hh === 0) {
        return 0;
    }

    if (mm === 0) {
        hh -= 1
        mm = 59;
    }
};
