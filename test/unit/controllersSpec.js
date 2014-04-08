'use strict';

/* jasmine specs for controllers go here */
describe('animals animalsControllers', function(){
  beforeEach(module('animals'));
  beforeEach(module('animalsServices'));

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected){
        return angular.equals(this.actual, expected);
      }
    })
  });

  var animalsResponse = [{name:"Dogs"},{name:"Pigs (Three Different Ones)"}];

  describe('controllers', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var myCtrl1 = $controller('MyCtrl1');
      expect(myCtrl1).toBeDefined();
    }));

  });

  describe('controllers', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var myCtrl2 = $controller('MyCtrl2');
      expect(myCtrl2).toBeDefined();
    }));

  });

  describe('AnimalsController', function(){
    it('should give back both pigs and dogs', inject(function($controller, _$httpBackend_, $rootScope){
      _$httpBackend_.expectGET('animals/animals.json').respond([{name:"Dogs"},{name:"Pigs (Three Different Ones)"}]);
      var scope = $rootScope.$new();
      var aniCtrl = $controller('AnimalsCtrl', {$scope: scope})
      _$httpBackend_.flush();
      expect(scope.animals).toEqualData(animalsResponse);
    }));
  });

});