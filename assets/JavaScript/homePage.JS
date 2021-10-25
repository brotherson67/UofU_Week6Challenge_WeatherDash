var queryInputE1 = document.getElementById("chosenCity")
var userFormE2 = document.getElementById("user-form");

console.log(queryInputE1)


var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
    var cityChosen = queryInputE1;
    console.log(cityChosen.value)
};

userFormE2.addEventListener("submit", formSubmitHandler)


// get latitude and lognitude functions
var getLatitude = function(queryInputE1) {

}


var getWeather = function() {
     
}

var test = function(city) {
    city.preventDefault;
    console.log(city);
    var newCity = "http://api.positionstack.com/v1/forward?access_key=e7949c6fceedc4d1e2efdc230e79764e&query=" + city + "&limit=1";
    console.log(newCity);
     
}

test("New York");