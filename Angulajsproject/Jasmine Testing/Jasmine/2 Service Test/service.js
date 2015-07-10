angular.module('ExampleApp', [])

.service('DataService', ['$http',function ($http) {

    var response;
    this.getData= function () {
       
        var futureResponse = $http.get('data.json'); // futureResponse is Promise 
        futureResponse.success(
            function (data, status, headers, config) {
                response= data.name;
        });
        futureResponse.error(function (data, status, headers, config) {
                     throw new Error('Something went wrong...');
        });

        return response;
    };
        
   

}]);