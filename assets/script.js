// API Key
var apiKey = "347512a67c1356d53c95e3fcd968bdac";

// Input Variables
var city="Atlanta";

// Fetch
var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(info) {
    console.log(info);
  })
