const apiKey = "cf086a894f4a176fb09f73e8ee662b24";
let queryInputE1 = document.getElementById("chosenCity");
let userFormE2 = document.getElementById("user-form");
let searchedCitiesE1 = document.getElementById("searchedCities");
let city = document.getElementById("chosenCity");
const getCityBtn = document.getElementById("getCityBtn");

const getWeather = function (lat, lon) {
  //get value from input element
  var cityCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;
  fetch(cityCall)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

// get city coordinates
const coordinates = (cityName) => {
  const endpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
  fetch(endpoint) // fetch API data
    .then((res) => res.json()) // then turn returned data into json
    .then((data) => {
      // then split lat and long
      console.log(data);
      let lat = data[0].lat;
      let lon = data[0].lon;
      getWeather(lat, lon);
    })
    .catch((err) => console.log(err)); // catch with err if something goes wrong
};

userFormE2.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.dir(city)
  city = city.value;
  coordinates(city);
});
