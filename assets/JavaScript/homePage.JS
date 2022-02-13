const apiKey = "cf086a894f4a176fb09f73e8ee662b24";
let queryInputE1 = document.getElementById("chosenCity");
let userFormE2 = document.getElementById("user-form");
let searchedCitiesE1 = document.getElementById("searchedCities");
let city = document.getElementById("chosenCity");
const getCityBtn = document.getElementById("getCityBtn");

const kelvin2Fer = (tempKelvin) => {
  const tempFer = Math.round((tempKelvin - 273.15) * (9 / 5) + 32);
  return tempFer;
};

const uvSeverity = (currentIndex) => {
  if (currentIndex < 3) return "Low";
  if (currentIndex >= 3 && currentIndex < 5) return "Moderate";
  if (currentIndex >= 5) return "High";
};

// add current weather
const showCurrWeather = (currTemp, windSpeed, currHumid, currUV) => {
  let temp = document.querySelector("#currtemp");
  temp.innerHTML = `Temp: ${currTemp} (F)`;
  let wind = document.querySelector("#currwind");
  wind.innerHTML = `Wind: ${windSpeed}`;
  let humidity = document.querySelector("#currhumidity");
  humidity.innerHTML = `Humidity: ${currHumid}%`;
  let UVI = document.querySelector("#curruvi");
  UVI.innerHTML = `UV Index: ${currUV}`;
};

const showForeWeather = (date, futureTemp, futureWind, futureHumidity) => {
  for (let i = 0; i < 4; i++) {
    let title = document.querySelector("title" + i);
    title.innerHTML = "DATE";
    let temp = document.querySelector("#temp" + i);
    temp.innerHTML = `Temp: ${futureTemp} (F)`;
    let wind = document.querySelector("#wind" + i);
    wind.innerHTML = `Wind: ${futureWind}`;
    let humidity = document.querySelector("#humidity" + i);
    humidity.innerHTML = `Humidity: ${futureHumidity}%`;
  }
};

const getWeather = function (lat, lon) {
  //get value from input element
  var cityCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;
  fetch(cityCall)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const temp = kelvin2Fer(data.current.temp);
      const windSpeed = data.current.wind_speed;
      const humidity = data.current.humidity;
      const UVIndex = data.current.uvi;
      showCurrWeather(temp, windSpeed, humidity, UVIndex);
      for (let i = 0; i > 5; i++) {
        let date = data.daily[i].dt;
        let futureTemp = kelvin2Fer(data.daily[i].temp.day);
        let futureWind = data.daily[i].wind_speed;
        let futureHumidity = data.daily[i].humidity;
        showForeWeather(date, futureTemp, futureWind, futureHumidity);
      }
      console.dir(data);
    })
    .catch((err) => console.log(err));
};

// get city coordinates
const coordinates = (cityName) => {
  const endpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
  fetch(endpoint) // fetch API data
    .then((res) => res.json()) // then turn returned data into json
    .then((data) => {
      // then split lat and long
      let lat = data[0].lat;
      let lon = data[0].lon;
      console.log("happening here");
      const weather = getWeather(lat, lon);
    })
    .catch((err) => console.log(err)); // catch with err if something goes wrong
};

userFormE2.addEventListener("submit", function (e) {
  e.preventDefault();
  city = city.value;
  coordinates(city);
});
