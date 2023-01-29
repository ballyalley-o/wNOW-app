//initialize weather object
const weather = new Weather("London", "United Kingdom");

//initialize UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather)

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value
    const country = document.getElementById('country').value

    weather.changeLocation(city, country)

    //get and display weather
    getWeather()

    //close modal
    $('#locModal').modal('hide')
})


function getWeather() {
    weather.getWeather()
        .then(results => {
            //parse the results
            console.log(results)
           ui.paint(results)
    })
        .catch(err => console.log(err))
}


console.log(weather.getWeather())

