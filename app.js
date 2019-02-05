
//Init UI 
const ui = new UI();
//Init storage
const storage = new Storage();


// get stored locatopn data
const weatherLocation = storage.getLocationData();
//Init weather class
const weather = new Weather(weatherLocation.city,weatherLocation.country);

document.addEventListener('DOMContentLoaded',getWeather);

// Change location event
document.getElementById('w-change-btn')
        .addEventListener('click', (e) => {
          const city = document.getElementById('city').value;
          const country = document.getElementById('country').value;

          weather.changeLocation(city,country);
          storage.setLocationData(city,country);
          getWeather();

          $('#locModal').modal('hide');
        });

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}