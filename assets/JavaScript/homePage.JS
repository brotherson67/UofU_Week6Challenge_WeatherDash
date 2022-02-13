const apiKey = "cf086a894f4a176fb09f73e8ee662b24";
let queryInputE1 = document.getElementById("chosenCity");
let userFormE2 = document.getElementById("user-form");
let searchedCitiesE1 = document.getElementById("searchedCities");
let city = document.getElementById("chosenCity");
const getCityBtn = document.getElementById("getCityBtn");

const kelvin2Fer = (tempKelvin) => {
  if (tempKelvin !== Number) {
    console.log("We can't translate a string like that dude")
    return
  }
  const tempFer = ((tempKelvin - 273.15) * (9 / 5) + 32)
  return tempFer
}

const getWeather = function (lat, lon) {
  //get value from input element
  var cityCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;
  fetch(cityCall)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const temp = 
      return data;
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
      getWeather(lat, lon);
    })
    .catch((err) => console.log(err)); // catch with err if something goes wrong
};

// get information from objects

userFormE2.addEventListener("submit", function (e) {
  e.preventDefault();
  city = city.value;
  coordinates(city);
});
