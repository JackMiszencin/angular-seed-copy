'use strict';

/* Controllers */

var animalsControllers = angular.module('animalsControllers', []);
animalsControllers.controller('MyCtrl1', [function() {

}]);
animalsControllers.controller('MyCtrl2', [function() {

}]);
animalsControllers.controller('AnimalsCtrl', ['$scope', 'Animal', function($scope, Animal){
	$scope.animals = Animal.query();
}]); 
