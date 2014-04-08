'use strict';

/* jasmine specs for controllers go here */
describe('animals animalsControllers', function(){
  beforeEach(module('animals'));
  beforeEach(module('animalsServices'));

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

});