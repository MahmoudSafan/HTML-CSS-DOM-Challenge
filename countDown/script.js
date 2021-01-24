const dayEl = document.getElementById("dayc");
const hourEl = document.getElementById("hourc");
const minutesEl = document.getElementById("minc");
const secondsEl = document.getElementById("secc");

const newYears = '1 Jan 2022';

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalTime = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalTime / 3600 / 24);
    const hours = Math.floor((totalTime / 3600) % 24);
    const minutes = Math.floor((totalTime / 60) % 60);
    const seconds = Math.floor(totalTime % 60);

    console.log(dayEl.innerHTML);

    dayEl.innerHTML = days;
    hourEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

countDown();

setInterval(countDown, 1000);