class Weather {
  constructor(city, country, icon) {
    this.apiKey = "ff28116e5c08847e66fb5db40ff09cbc";
    this.city = city;
    this.country = country;
    this.icon = icon;
  }

  async getWeather() {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${this.apiKey}&q=${this.city},${this.country}}`
    );
      const data = await res.json({
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      return data;

  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}

