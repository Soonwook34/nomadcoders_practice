//import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const timer = document.querySelector(".timer");

function getTime() {
    // Don't delete this.
    const xmasDay = new Date("2020-12-24:00:00:00+0900");
    const today = new Date();

    const dDay = new Date(xmasDay - today - NINE_HOURS_MILLISECONDS);
    const date = Math.floor(dDay.getTime() / (24 * 60 * 60 * 1000));
    const hours = dDay.getHours();
    const minutes = dDay.getMinutes();
    const seconds = dDay.getSeconds();

    timer.innerText = `${date}d ${hours < 10 ? `0${hours}` : hours}h ${
        minutes < 10 ? `0${minutes}` : minutes
    }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
