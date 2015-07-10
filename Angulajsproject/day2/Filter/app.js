angular.module('myApp', [])
.controller(
'FriendsController', function ($scope, $filter) {
    $scope.friends = [{
        name: 'krishna',
        phone: '1234',
        country: 'India'
    }, {
        name: 'Anu',
        phone: '12345',
        country: 'TS'
    },{
        name: 'chinnu',
        phone: '1234',
        country: 'India'
    },{
        name: 'druva',
        phone: '1234',
        country: 'India'
    },{
        name: 'dhatri',
        phone: '1234',
        country: 'India'
    }
    ];
}
);