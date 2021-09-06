"use strict";
let searchInputBox = document.getElementById("input-box");
let city = document.getElementById("city");
let date = document.getElementById("date");
let temperature = document.getElementById("temp");
let minMaxTemp = document.getElementById("min-max");
let weatherType = document.getElementById("weather");
let image = document.getElementById("img");
const aboutBtn = document.getElementById("about");
const loader = document.getElementById("loader");
// variables to store api
let loadedApi;
let apiWeather = {
  key: "2f0d52849c8534bd3913da57a792ec44",
  apiUrl: "https://api.openweathermap.org/data/2.5/weather",
};

// Key pressing event press enter
function keypress(event) {
  if (event.key == "Enter") {
    //   console.log(searchInputBox.value);
    //   here we are calling to get weather report
    getWeatherReport(searchInputBox.value);
    document.querySelector(".weather-body").style.display = "block";
  }
}

// Event Listeners
searchInputBox.addEventListener("keypress", keypress);
aboutBtn.addEventListener("click", aboutMe);

// getweather report
async function getWeatherReport(city) {
  const apiLoad = `${apiWeather.apiUrl}?q=${city}&appid=${apiWeather.key}&units=metric`;
  try {
    const response = await fetch(apiLoad);
    loadedApi = await response.json();
    showWeatherReport(loadedApi);
  } catch (error) {
    //   if (error) {
        // InvalidReport(error);
    //   }
          
    console.log("whooops!! api crushed", error);
  }
}
//  console.log(loadedApi);

// Show error report
// function invalidReport(weather) {
//     console.log(weather);
//     city.textContent = "Please Enter";
//     // console.log(city.textContent);
//     // temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
//     // minMaxTemp.innerHTML = `min: ${Math.floor(
//     //   weather.main.temp_min
//     // )}&deg;C | max: ${Math.ceil(weather.main.temp_max)}&deg;C`;
//     // weatherType.textContent = `${weather.weather[0].main}`;
  
//     // new Date() this function use to generate todays date specification
  
//     // let todaysDate = new Date();
//     date.textContent = "Valid City Name.";
//     changeBackground(weatherType.textContent);
//   }




// Show Weather Report
function showWeatherReport(weather) {
    console.log(weather);
    if (weather.cod == "404"||weather.cod == "400") {
        city.textContent = "Invalid ";
        temperature.innerHTML = " ";
        minMaxTemp.innerHTML = " ";
        weatherType.textContent = "Please enter valid city name.";
        date.textContent = "City Name!!!";
    } else {
        city.textContent = `${weather.name},${weather.sys.country}`;
  // console.log(city.textContent);
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
  minMaxTemp.innerHTML = `min: ${Math.floor(
    weather.main.temp_min
  )}&deg;C | max: ${Math.ceil(weather.main.temp_max)}&deg;C`;
  weatherType.textContent = `${weather.weather[0].main}`;

  // new Date() this function use to generate todays date specification

  let todaysDate = new Date();
  date.textContent = dateManage(todaysDate);
  changeBackground(weatherType.textContent);      
    }
  
}

// Generating today's Date from new Date()
function dateManage(dateArg) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let dt = dateArg.getDate();
  let day = days[dateArg.getDay()];
  return `${dt} ${month} (${day}),${year}`;
}

// This function changes Background according to weather type
function changeBackground(type) {
  switch (type) {
    case "Haze":
      document.body.style.backgroundImage = "url('images/Haze.jpg')";
      break;
    case "Clouds":
      document.body.style.backgroundImage = "url('images/Clouds.jpg')";
      //   city.style="font-size=30pt";
      break;
    case "Ash":
      document.body.style.backgroundImage = "url('images/Ash.jpg')";
      break;
    case "Clear":
      document.body.style.backgroundImage = "url('images/Clear.jpg')";
      break;
    case "Drizzle":
      document.body.style.backgroundImage = "url('images/Drizzle.jpg')";
      break;
    case "Dust":
      document.body.style.backgroundImage = "url('images/Dust.jpg')";
      break;
    case "Fog":
      document.body.style.backgroundImage = "url('images/Fog.jpg')";
      break;
    case "Mist":
      document.body.style.backgroundImage = "url('images/Mist.jpg')";
      break;
    case "Rain":
      document.body.style.backgroundImage = "url('images/Rain.jpg')";
      break;
    case "Sand":
      document.body.style.backgroundImage = "url('images/Sand.jpg')";
      break;
    case "Smoke":
      document.body.style.backgroundImage = "url('images/Smoke.jpg')";
      break;
    case "Snow":
      document.body.style.backgroundImage = "url('images/Snow.jpg')";
      break;
    case "Squall":
      document.body.style.backgroundImage = "url('images/Squall.jpg')";
      break;
    case "Thunderstorm":
      document.body.style.backgroundImage = "url('images/Thunderstorm.jpg')";
      break;
    case "Tornado":
      document.body.style.backgroundImage = "url('images/Tornado.jpg')";
      break;
  }
}

// About Button
function aboutMe() {
  const aboutUrl = "about/about.html";
  window.open(aboutUrl, "_blank");
}
