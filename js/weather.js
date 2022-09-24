function geoOn(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API = "efc645bd848daf6b8bd453a45964ecfe";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const weatherKr = (data.weather[0].main) === "Clear" ? "오늘 날씨가 좋아요" : "오늘도 힘내세요";
            weather.innerText = `${weatherKr} / ${data.main.temp}도`;
        }); 
    }
function geoError(){
    modalM1.classList.remove("hidden");
    modalM2.classList.add("hidden");
    modal.classList.remove("hidden");
    weather.innerText = "오늘도 힘내세요!";
}

navigator.geolocation.getCurrentPosition(geoOn, geoError);