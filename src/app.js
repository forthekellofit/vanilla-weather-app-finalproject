function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
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
  let month = months[date.getMonth()];

  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperature = document.querySelector("#current-temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let h1 = document.querySelector("#city-headline");
  h1.innerHTML = response.data.name;
  let description = document.querySelector("#conditions");
  description.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}%`;

  let dateElement = document.querySelector("#day-date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  let weatherIcon = document.querySelector("#current-weather-icon");
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(city) {
  let apiKey = "855dcf2816c3df70674db30fa73e361c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("#location-input");
  search(input.value);
}

search("Toronto");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
