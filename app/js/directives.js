'use strict';

/* Directives */


var animalsDirectives = angular.module('animalsDirectives', []);
animalsDirectives.directive('appVersion', ['version', function(version) {
	return function(scope, elm, attrs) {
	  elm.text(version);
	};
}]);
