class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }
  paint(weather) {
    console.log(weather);
    //http://openweathermap.org/img/w/10d.png
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${((weather.main.temp*9/5)-459.67).toFixed(2)} F`;
    this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.pressure.textContent = `Atmospheric Pressure: ${weather.main.pressure} hPa`;
    this.wind.textContent = `Wind Speed: ${(weather.wind.speed*2.24).toFixed(0)} mph`;
  }

}