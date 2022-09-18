const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

const opToggle = document.querySelector(".mode-toggle");
let modeBtn = document.createElement("div");
modeBtn.classList = "mode-btn";
opToggle.appendChild(modeBtn);

const root = document.querySelector(":root");
const body = document.body;

function toggleDarkMode() {
    modeBtn.style.transform = "translateX(127%)";
    modeBtn.style.backgroundColor = "#232323";
    opToggle.style.border = "0.14rem solid #232323";
    root.style.setProperty("--light-bg-color", "#333");
    root.style.setProperty("--light-btn-color", "#222");
    root.style.setProperty("--dark-bg-color", "linear-gradient(180deg, #CEE8F2, #E2EFF5)");
    root.style.setProperty("--dark-btn-color", "#ACD7F2");
    body.style.backgroundColor = "#000";
    localStorage.setItem("mode", "dark");
}

function toggleLightMode() {
    modeBtn.style.transform = "translateX(0)";
    modeBtn.style.backgroundColor = "#fff";
    opToggle.style.border = "0.14rem solid #fff";
    root.style.setProperty("--light-bg-color", "linear-gradient(180deg, #CEE8F2, #E2EFF5)");
    root.style.setProperty("--light-btn-color", "#ACD7F2");
    root.style.setProperty("--dark-bg-color", "linear-gradient(180deg, #000, #111)");
    root.style.setProperty("--dark-btn-color", "#222");
    body.style.backgroundColor = "#fff";
    localStorage.setItem("mode", "light");
}

sunIcon.addEventListener("click", toggleLightMode);
moonIcon.addEventListener("click", toggleDarkMode);

const savedMode = localStorage.getItem("mode");

if(savedMode == "dark"){
    toggleDarkMode()
}
