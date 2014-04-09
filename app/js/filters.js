'use strict';

/* Filters */

var animalsFilters = angular.module('animalsFilters', [])
animalsFilters.filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);

animalsFilters.filter('firstLine', function(){
	return function(input){
		return String(input[0]);
	}
});