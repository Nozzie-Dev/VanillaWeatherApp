function setWeather(response) {
  let temperatureElement = document.querySelector("#temp-today");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector(".city");
  let time = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let icon = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  time.innerHTML = setDate(date);
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  wind.innerHTML = `${response.data.wind.speed}km/h`;
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function setDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "78d37e60cbae34922894o08be20fe53t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(setWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector(".search");
searchFormElement.addEventListener("submit", handleSearchSubmit);

//searchCity("Pretoria");
