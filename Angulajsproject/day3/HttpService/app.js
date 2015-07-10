angular.module('myApp', []);
angular.module('myApp')
    .factory('weatherService', function ($http) {
        return {
            getWeather: function (city, country) {
                var query = city + ',' + country;

                return $http.get('http://api.openweathermap.org/data/2.5/weather', {
                    params: { q: query }// ?q=cityname, country name
                }).then(function (response) {
                    return response.data.weather[0].description;
                });
            }//end of getWeather
        }// end of return
    });//end of module