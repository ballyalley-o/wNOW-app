

class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.country = document.getElementById("w-country");
    this.string = document.getElementById("w-string");
    this.weatherdesc = document.getElementById("w-weatherdesc");
    this.weathermain = document.getElementById("w-weathermain");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.city.name;
    this.country.textContent = weather.city.country;
    this.string.textContent = weather.list[0].main.temp + " °C";
    this.weathermain.textContent = weather.list[0].weather[0].main;
    this.weatherdesc.textContent = weather.list[0].weather[0].description;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.list[0].main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.list[0].main.feels_like}`;
    this.dewpoint.textContent = `Sea Level: ${weather.list[0].main.sea_level}`;
    this.wind.textContent = `Wind: ${weather.list[0].wind.speed}`;
  }
}
