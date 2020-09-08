// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const taskForm = document.querySelector(".js-taskForm"),
    taskInput = taskForm.querySelector("input"),
    pendingList = document.querySelector(".js-pendingList"),
    finishedList = document.querySelector(".js-finishedList");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let pending = [],
    finished = [];

function deletePending(event) {
    const btn = event.target;
    const li = btn.parentNode;
    pendingList.removeChild(li);
    const cleanPending = pending.filter(function (pend) {
        return pend.id !== li.id;
    });
    pending = cleanPending;
    savePending();
}

function deleteFinished(event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.removeChild(li);
    const cleanFinished = finished.filter(function (finish) {
        return finish.id !== li.id;
    });
    finished = cleanFinished;
    saveFinished();
}

function finishPending(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const task = li.querySelector("span");
    paintFinished(task.innerHTML, li.id);
    deletePending(event);
}

function undoFinished(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const task = li.querySelector("span");
    paintPending(task.innerHTML, li.id);
    deleteFinished(event);
}

function savePending() {
    localStorage.setItem(PENDING_LS, JSON.stringify(pending));
}

function saveFinished() {
    localStorage.setItem(FINISHED_LS, JSON.stringify(finished));
}

function paintPending(text, newID) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const finBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deletePending);
    finBtn.innerHTML = "✔";
    finBtn.addEventListener("click", finishPending);
    span.innerText = text;
    li.appendChild(finBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newID;
    pendingList.appendChild(li);
    const pendingObj = {
        text: text,
        id: newID,
    };
    pending.push(pendingObj);
    savePending();
}

function paintFinished(text, newID) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const undoBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteFinished);
    undoBtn.innerHTML = "⏪";
    undoBtn.addEventListener("click", undoFinished);
    span.innerText = text;
    li.appendChild(undoBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newID;
    finishedList.appendChild(li);
    const finishedObj = {
        text: text,
        id: newID,
    };
    finished.push(finishedObj);
    saveFinished();
}

function loadPending() {
    const loadedPending = localStorage.getItem(PENDING_LS);
    if (loadedPending !== null) {
        const parsedPending = JSON.parse(loadedPending);
        parsedPending.forEach(function (pending) {
            paintPending(pending.text, pending.id);
        });
    }
}

function loadFinished() {
    const loadedFinished = localStorage.getItem(FINISHED_LS);
    if (loadedFinished !== null) {
        const parsedFinished = JSON.parse(loadedFinished);
        parsedFinished.forEach(function (finished) {
            paintFinished(finished.text, finished.id);
        });
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = taskInput.value;
    const newID = new Date().getTime();
    paintPending(currentValue, newID.toString());
    taskInput.value = "";
}

function init() {
    loadPending();
    loadFinished();
    taskForm.addEventListener("submit", handleSubmit);
}

init();
