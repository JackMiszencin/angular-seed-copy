'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var animalsServices = angular.module('animalsServices', ['ngResource']);

animalsServices.value('version', '0.1');

animalsServices.factory('Animal', ['$resource', function($resource){
	return $resource('animals/:animalId.json', {}, {
		query: {method:'GET', params:{animalId:'animals'}, isArray:true}
	});
}]);
