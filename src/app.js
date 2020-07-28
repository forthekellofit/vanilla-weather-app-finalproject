function displayTemperature(response) {
  console.log(response.data);

  let temperature = document.querySelector("#current-temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let description = document.querySelector("#conditions");
  description.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}%`;
}

let apiKey = "855dcf2816c3df70674db30fa73e361c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
