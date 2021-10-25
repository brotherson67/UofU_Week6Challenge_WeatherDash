var queryInputE1 = document.getElementById("chosenCity")
var userFormE2 = document.getElementById("user-form");
var searchedCitiesE1 = document.getElementById("searchedCities");


// adding previously searched elements to list
var test = function(evnt) {
    evnt.preventDefault(); 
    var newlistItem = document.createElement("p");
    newlistItem.append(queryInputE1.value);
    searchedCitiesE1.appendChild(newlistItem);
}

userFormE2.addEventListener("submit", test)

var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
    var cityChosen = queryInputE1;
    console.log(cityChosen.value)
};

// userFormE2.addEventListener("submit", formSubmitHandler)


// // get latitude and lognitude functions
// var getLatitude = function(queryInputE1) {

// }


// var getWeather = function() {
     
// }

// var test = function(city) {
//     city.preventDefault;
//     console.log(city);
//     var newCity = "http://api.positionstack.com/v1/forward?access_key=e7949c6fceedc4d1e2efdc230e79764e&query=" + city + "&limit=1";
//     console.log(newCity);
     
// }

// test("New York");