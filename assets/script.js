// API Key
var apiKey = "347512a67c1356d53c95e3fcd968bdac";

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
      var date = moment(dateUX, 'X').format('M/D/YYYY');
      var icon = info.weather[0].icon;
      var iconImg = document.createElement("img");
      iconImg.src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
      $('#cityName').text(city + ' (' + date + ')');
      $('#cityName').append(iconImg)
      $('#temp').text('Temp: ' + temp + '°F');
      $('#wind').text('Wind: ' + wind + ' MPH');
      $('#humidity').text('Humidity: ' + humidity +' %');
    })

  var requestURL2 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=' + apiKey;
  fetch(requestURL2)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var forecastInfo = {
      date: [],
      icon: [],
      temp: [],
      wind: [],
      humidity: []
    };
    for (var i=7; i<data.list.length; i+=8) {
      var dates = moment(data.list[i].dt, 'X').format('M/D/YYYY');
      var icons = data.list[i].weather[0].icon;;
      forecastInfo.date.push(dates);
      forecastInfo.icon.push(icons);
      forecastInfo.temp.push(data.list[i].main.temp);
      forecastInfo.wind.push(data.list[i].wind.speed);
      forecastInfo.humidity.push(data.list[i].main.humidity);
    }
    console.log(forecastInfo.date[0])
    for (var i=0; i<forecastInfo.date.length; i++) {
      var j = i + 1;
      var iconImg = document.createElement("img");
      iconImg.src = 'https://openweathermap.org/img/wn/' + forecastInfo.icon[i] + '@2x.png';
      iconImg.className = 'icons';
      $(`#dates${j}`).text(forecastInfo.date[i]);
      $(`#icon${j}`).append(iconImg);
      $(`#temp${j}`).text('Temp: ' + forecastInfo.temp[i] + '°F');
      $(`#wind${j}`).text('Wind: ' + forecastInfo.wind[i] + ' MPH');
      $(`#humidity${j}`).text('Humidity: ' + forecastInfo.humidity[i] +' %');
    }
  console.log(forecastInfo)
  })
}

$('#button-addon2').on('click', getWeather)
