class Weather {
  constructor(city, country) {
    this.apiKey = '35582a52d1c6320ae4e0178391889b69';
    this.city = city;
    this.country = country;

    //http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID={this.apiKey}
    //api.openweathermap.org/data/2.5/weather?q=London,uk
  }

  // Fetch weather
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location 
  changeLocation(city,country) {
    this.city = city;
    this.country = country;
  }
}