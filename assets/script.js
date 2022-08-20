// API Key
var apiKey = "347512a67c1356d53c95e3fcd968bdac";

// Input Variables
var city;

// Fetch
var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
fetch(requestURL);