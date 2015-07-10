angular.module('myApp')
.controller('WeatherController',
    function ($scope, weatherService) {
        $scope.getWeather = function () {
            $scope.weatherDescription = "Fetching.....";
            //$http always returns promise object
            weatherService.getWeather($scope.city, $scope.country)
             .then(function (data) {
                 $scope.weatherDescription = data;
             },
             function () {
                 $scope.weatherDescription = "Could not obtain data";
             });
        }
    });//end of controller