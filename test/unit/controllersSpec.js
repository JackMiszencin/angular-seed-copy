'use strict';

/* jasmine specs for controllers go here */
describe('animals animalsControllers', function(){
  beforeEach(module('animals'));
  beforeEach(module('animalsServices'));

  describe('controllers', function(){
    var scope, ctrl, $httpBackend;
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('animals/animals.json').respond([{name:"Dogs"},{name:"Pigs (Three Diffent Ones)"}]);
      scope = $rootScope.$new();
      ctrl = $controller('MyCtrl1', {$scope: scope});
    }));


    it('should ....', inject(function($controller) {
      //spec body
      var myCtrl1 = $controller('MyCtrl1');
      expect(myCtrl1).toBeDefined();
    }));
  });

  describe('controllers', function(){
    var scope, ctrl, $httpBackend;
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('animals/animals.json').respond([{name:"Dogs"},{name:"Pigs (Three Diffent Ones)"}]);
      scope = $rootScope.$new();
      ctrl = $controller('MyCtrl2', {$scope: scope});
    }));

    it('should ....', inject(function($controller) {
      //spec body
      var myCtrl2 = $controller('MyCtrl2');
      expect(myCtrl2).toBeDefined();
    }));
  });

});