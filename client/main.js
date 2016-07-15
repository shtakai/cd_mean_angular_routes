console.log('start');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/view1.html',
    })
    .when('/partial2',{
      templateUrl: 'partials/view2.html',
    })
    .otherwise({
      redirectTo: '/'
    });
})

myApp.controller('view1Controller', function($scope){
  $scope.sports = [
    'golf',
    'basketball',
    'hockey',
    'tennis',
    'tannis',
  ];
});

myApp.controller('view2Controller', function($scope){
   $scope.message = "We are using another controller";
});