//initialize localstorage
const storage = new Storage();

//get stored loc data
const weatherLoc = storage.getLocData()

//initialize weather object
const weather = new Weather(weatherLoc.city, weatherLoc.country);

//initialize UI
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

//change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  //change loc
  weather.changeLocation(city, country);

  //set loc datas
  storage.setLocData(city, country)

  //get and display weather
  getWeather();

  //close modal
  $("#locModal").modal("hide");
});


// //clear cache
document.getElementById('w-clear-btn').addEventListener('click', (e) => {
    e.preventDefault()
    window.localStorage.clear()
})

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      //parse the results
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}

console.log(weather.getWeather());
