var app = angular.module("myApp", ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
    .when("/persons", {
        templateUrl: "personList.html"
    })
    .when("/persons/:id", {
        templateUrl: "personDetails.html",
        controller: "ShowController"
    })
    .when("/persons/:id/:age", {
        template: "<h1>Multiple parameters in routing</h1>",
        controller: "MultiController"
    })
    .otherwise({ redirectTo: "/persons" });
});

app.factory("PersonFactory", function () {
    var persons = [
        { name: "Sri", age: 25, id: 1 },
        { name: "abc", age: 24, id: 1 },
        { name: "def", age: 23, id: 1 },
        { name: "ghi", age: 22, id: 1 },
        { name: "jkl", age: 21, id: 1 },
        { name: "mno", age: 20, id: 1 }
    ];
    return {
        all: function () {
            return persons;
        },
        get: function(id){
            var result = null;
            angular.forEach(persons, function(p){
            if(p.id == id)
                result=p;
            });
        return result;
    }//end of get
};//end of return
});//end of factory

app.controller("IndexController", function ($scope, PersonFactory) {
    $scope.persons = PersonFactory.all();
});

app.controller("ShowController", function ($scope, $routeParams, PersonFactory) {
    $scope.person = PersonFactory.get($routeParams.id);
});

app.controller("MultiController", function ($scope, $routeParams, PersonFactory) {
    alert($routeParams.id + "-" + $routeParams.age)
});