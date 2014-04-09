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
animalsControllers.controller('AnimalCtrl', ['$scope', '$routeParams', 'Animal', function($scope, $routeParams, Animal){
	$scope.animal = Animal.get({animalId: $routeParams.animalId}, function(result){
		$scope.lines = (result.lines);
	});
	$scope.addLine = function(line){
		var arry = $scope.lines;
		var newArry = arry.push(line);
		$scope.lines = newArry;
	}
}]);