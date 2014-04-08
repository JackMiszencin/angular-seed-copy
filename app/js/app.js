'use strict';


// Declare app level module which depends on filters, and services
angular.module('animals', [
  'ngRoute',
  'animalsFilters',
  'animalsServices',
  'animalsDirectives',
  'animalsControllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/animals', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/animals', {templateUrl: 'partials/animals.html', controller: 'AnimalsCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
