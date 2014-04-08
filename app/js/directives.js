'use strict';

/* Directives */


angular.module('animalsDirectives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
