// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const textInfo = document.getElementsByTagName("h2")[0];
/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
    enter: handleEnter,
    leave: handleLeave,
    resize: handleResize,
    contextMenu: handleContextMenu,
};

function handleEnter(event) {
    textInfo.innerHTML = "The Mouse is Here!";
    textInfo.style.color = colors[0];
}

function handleLeave(event) {
    textInfo.innerHTML = "The Mouse is gone!";
    textInfo.style.color = colors[1];
}

function handleResize(event) {
    textInfo.innerHTML = "You just resized!";
    textInfo.style.color = colors[2];
}

function handleContextMenu(evnet) {
    textInfo.innerHTML = "That was a right click!";
    textInfo.style.color = colors[3];
}

function init() {
    if (textInfo !== null) {
        textInfo.addEventListener("mouseenter", superEventHandler.enter);
        textInfo.addEventListener("mouseleave", superEventHandler.leave);
    }
    window.addEventListener("resize", superEventHandler.resize);
    window.addEventListener("contextmenu", superEventHandler.contextMenu);
}

init();
