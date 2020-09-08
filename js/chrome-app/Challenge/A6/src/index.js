// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const country = document.querySelector(".country");

const COUNTRY_LS = "country";

let selectedCountry = "";

function handleChange(event) {
    selectedCountry = event.target.value;
    localStorage.setItem(COUNTRY_LS, selectedCountry);
}

function loadCountry() {
    const loadedCountry = localStorage.getItem(COUNTRY_LS);
    const option = document.querySelector(
        `select.country option[value=${loadedCountry}]`
    );
    option.selected = "true";
    selectedCountry = loadedCountry;
}

function init() {
    loadCountry();
    country.addEventListener("change", handleChange);
}

init();
