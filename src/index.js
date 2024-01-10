function setWeather(response) {
  let temperatureElement = document.querySelector("#temp-today");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector(".city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
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
}

let searchFormElement = document.querySelector(".search");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Pretoria");
