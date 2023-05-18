const request = require('request');
var city = 'london';
request.get({
  url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
  headers: {
    'X-Api-Key': 'YOUR_API_KEY'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
}); 