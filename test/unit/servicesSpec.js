'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('animalsServices'));

  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });

  describe('Animal', function(){
  	it('should give me right names for animals', inject(function($httpBackend, Animal){
  		$httpBackend.expectGET("animals/animals.json").respond([{name: "Dogs"}, {name: "Pigs (Three Different Ones)"}]);
  		Animal.query();
  		$httpBackend.flush();
  		var arry;
  		Animal.query({}, function(results){
  			expect(results).toBe([{name: "Dogs"}, {name: "Pigs (Three Different Ones)"}]);
  		});
  	}));

  	it('should give me right name for pig', inject(function($httpBackend, Animal){
  		$httpBackend.expectGET("animals/pigs.json").respond({name: "Pigs (Three Different Ones)"});
			Animal.get({animalId: "pigs"});
  		$httpBackend.flush();
  		Animal.get({animalId: "pigs"}, function(result){
	  		expect(result.name).toEqual("Pigs (Three Different Ones)");
  		});
  	}));
  });
});
