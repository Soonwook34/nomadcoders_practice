// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.getElementsByTagName("body")[0];

function handleResize(event) {
    const width = window.innerWidth;
    if (width > 900) {
        body.style.background = "#f1c40f";
    } else if (width <= 900 && width > 650) {
        body.style.background = "#8e44ad";
    } else {
        body.style.background = "#3498db";
    }
    console.log(event);
}

function init() {
    handleResize();
    const h2 = document.createElement("h2");
    h2.innerText = "Hello!";
    h2.style.color = "white";
    body.appendChild(h2);
    window.addEventListener("resize", handleResize);
}

init();
