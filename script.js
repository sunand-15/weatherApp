//https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=90f54331e3ee074fcdef82c6ca2e9ca4

const apiKey = "90f54331e3ee074fcdef82c6ca2e9ca4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
//  const weathericon = document.querySelector("#weathericon");
 
async function getWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main === "Clouds") {
    // weathericon.src = "weatherimg/cloud.jpg";
    document.body.style.backgroundImage = "url('cloud.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

  } else if (data.weather[0].main === "Clear") {
    // weathericon.src = "weatherimg/clear.jpg";
    document.body.style.backgroundImage = "url('clear.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

  } else if (data.weather[0].main === "Rain") {
    // weathericon.src = "weatherimg/rain.jpg";
    document.body.style.backgroundImage = "url('rain.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition ="center";
     
  } else if (data.weather[0].main === "Drizzle") {
    // weathericon.src = "weatherimg/Drizzle.jpg";
    document.body.style.backgroundImage = "url('Drizzle.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  } else if (data.weather[0].main === "Mist") {
    // weathericon.src = "weatherimg/Mist.jpg";
    document.body.style.backgroundImage = "url('Mist.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }

  if (response.status == 404) {
    document.querySelector(".city").innerHTML = "City Not Found!";
    document.querySelector(".temp").innerHTML = "--";
    document.querySelector(".humidity").innerHTML = "--";
    document.querySelector(".wind").innerHTML = "--";
    return;
  }
}

searchbtn.addEventListener("click", () => {
  getWeather(searchbox.value);
});
