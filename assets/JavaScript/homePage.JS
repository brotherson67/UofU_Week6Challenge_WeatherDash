var queryInputE1 = document.getElementById("chosenCity")
var userFormE2 = document.getElementById("user-form");
var searchedCitiesE1 = document.getElementById("searchedCities");


var getWeather = function() {
    //get value from input element
    var cityChosen = queryInputE1.value;
    var cityCall = "api.openweathermap.org/data/2.5/forecast?q=provo&appid=cf086a894f4a176fb09f73e8ee662b24"
    console.log(cityCall)
    fetch(cityCall).then(function(response) {
        console.log(response)
    })
};


// adding previously searched elements to list
var searchCity = function(evnt) {
    evnt.preventDefault(); 

    // add search to list
    var newlistItem = document.createElement("button");
    newlistItem.className = "btn btn-primary"
    newlistItem.append(queryInputE1.value);
    searchedCitiesE1.appendChild(newlistItem);
    getWeather();
}

userFormE2.addEventListener("submit", searchCity)


console.log