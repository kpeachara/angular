angular.module('myApp', [])
.controller('MainController',['$scope','$q','$interval',
    function($scope,$q,$interval){
        $scope.getpromise = function(){
            var i =0;
            var deferred = $q.defer();
            var timer = $interval(function(){
                if(!!$scope.cancelRequested){
                    deferred.reject('Promise rejected due to cancellation');
                    $interval.cancel(timer);
                }
                i=i+1;

                if(i==5){

                }
            })
        }
    }    
    )]);