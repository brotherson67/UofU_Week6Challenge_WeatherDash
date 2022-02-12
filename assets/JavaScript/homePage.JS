const apiKey="cf086a894f4a176fb09f73e8ee662b24"
let queryInputE1 = document.getElementById("chosenCity")
let userFormE2 = document.getElementById("user-form");
let searchedCitiesE1 = document.getElementById("searchedCities");
let city = document.getElementById("chosenCity");
const getCityBtn = document.getElementById("getCityBtn")


// get city coordinates
const coordinates = (cityName => {
    const endpoint = `https://api.openweathermap.org/geo/1.0/direct?q=" + ${cityName} + "&limit=1&appid=${apiKey}`
    fetch(endpoint)// fetch API data
      .then((res => res.json())) // then turn returned data into json
      .then(data => { // then split lat and long
          console.log(data)
          let lat = data[0].lat
          let lon = data[0].lon
          return { lat, lon }
        })
      .catch((err) => console.log(err))      // catch with err if something goes wrong
});

const getWeather = function() {
    //get value from input element
    var cityChosen = queryInputE1.value;
    var cityCall = "api.openweathermap.org/data/2.5/forecast?q=provo&appid="
    console.log(cityCall)
    fetch(cityCall).then(function(response) {
        console.log(response)
    })
};


// adding previously searched elements to list
// var searchCity = function(evnt) {
//     evnt.preventDefault(); 

//     // add search to list
//     var newlistItem = document.createElement("button");
//     newlistItem.className = "btn btn-primary"
//     newlistItem.append(queryInputE1.value);
//     searchedCitiesE1.appendChild(newlistItem);
//     getWeather();
// }

userFormE2.addEventListener("submit", function(e) {
    e.preventDefault();
    // console.dir(city)
    city = city.value
    coordinates(city)
});