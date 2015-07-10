angular.module('nameApp', []).controller('NameCtrl', function ($scope) {

    $scope.addName = function () {
        $scope.names.push($scope.newname)
        $scope.newname =;
    };

    $scope.removeName = funtion(name){
    var i = $scope.names.indexOf(name)
    };

});