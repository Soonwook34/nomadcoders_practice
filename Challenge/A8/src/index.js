// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const maxNum = document.querySelector("#jsMaxNum"),
    range = document.querySelector("#jsRange"),
    guessNum = document.querySelector("#jsGuessNum"),
    play = document.querySelector("#jsPlay"),
    resultMsg = document.querySelector("#jsResultMsg"),
    errorMsg = document.querySelector("#jsErrorMsg");
const userNum = resultMsg.querySelector("#jsUserNum"),
    machineNum = resultMsg.querySelector("#jsMachineNum"),
    result = resultMsg.querySelector("#jsResult");

let currMax = 100;

function handlePlay(event) {
    const choice = parseInt(guessNum.value, 10);
    userNum.innerHTML = choice;
    if (choice <= currMax) {
        const random = Math.floor(Math.random() * (currMax + 1));
        machineNum.innerHTML = random;
        if (choice === random) {
            result.innerHTML = "won";
        } else {
            result.innerHTML = "lost";
        }
        resultMsg.removeAttribute("hidden");
        errorMsg.setAttribute("hidden", true);
    } else {
        resultMsg.setAttribute("hidden", true);
        errorMsg.removeAttribute("hidden");
    }
}

function handleRangeChange(event) {
    currMax = parseInt(event.target.value, 10);
    maxNum.innerHTML = currMax.toString();
    guessNum.setAttribute("max", currMax.toString());
}

function init() {
    if (range) {
        range.addEventListener("input", handleRangeChange);
    }
    if (play) {
        play.addEventListener("click", handlePlay);
    }
}

init();
