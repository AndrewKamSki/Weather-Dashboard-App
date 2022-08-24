// API Key
var apiKey = "347512a67c1356d53c95e3fcd968bdac";

// Test fetch params single day
var city = 'Columbus';
var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

// Test fetch for 5 day
var requestURL2 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey;
// Test Fetchs
// fetch(requestURL)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(info) {
//     console.log(info);
//   })

// fetch(requestURL2)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(info) {
//     console.log(info);
//   })

function getWeather(event) {
  event.preventDefault();
  var city = $('#userInput').val();
  var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&exclude=minutely,hourly&units=imperial&appid=' + apiKey;
  fetch(requestURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(info) {
      console.log(info);
      var temp = info.main.temp;
      var wind = info.wind.speed;
      var humidity = info.main.humidity;
      var dateUX = info.dt;
      var date = moment(dateUX, 'X').format('M/D/YYYY')
      var icon = info.weather[0].icon;
      var iconImg = document.createElement("img");
      iconImg.src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
      $('#cityName').text(city + ' (' + date + ')');
      $('#cityName').append(iconImg)
      $('#temp').text('Temp: ' + temp + '°F');
      $('#wind').text('Wind: ' + wind + ' MPH');
      $('#humidity').text('Humidity: ' + humidity +' %');

      // var uvIndex = info.current.uvi;
      // console.log(uvIndex)
    })
}

$('#button-addon2').on('click', getWeather)
