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