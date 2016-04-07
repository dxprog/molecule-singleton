'use strict';

var Molecule = require('moleculejs');
var expect = require('expect.js');

var Singleton = require('../index');

describe('Singleton tests', function() {

  it('should create an instantiated Molecule object', function() {
    var instance = Singleton('myObject', {
      method: function() {}
    });
    expect(instance).to.be.an('object');
    expect(instance.method).to.be.a('function');
  });

  it('should throw when no arguments are passed', function() {
    expect(function() {
      Singleton();
    }).to.throwException('A singleton name and class definition must be provided');
  });

  it('should throw when trying to retrieve an undefined class', function() {
    expect(function() {
      Singleton('thing');
    }).to.throwException('Trying to fetch singleton "thing" that has not been defined');
  });

  it('should return an instance if one has already been created', function() {
    var singletonName = 'anotherObject';
    var instance = Singleton(singletonName, {
      setValue: function(val) {
        this.value = val;
      },
      getValue: function() {
        return this.value;
      }
    });
    instance.setValue(singletonName);
    instance = Singleton(singletonName);
    expect(instance.getValue()).to.equal(singletonName);
  });

  it('should instantiate a Molecule if one was passed', function() {
    var TEST_FOR_TRUTH = 'row row fight the powah';
    var myClass = Molecule({
      someValue: function() {
        return TEST_FOR_TRUTH;
      }
    });
    var instance = Singleton('moleculeSingleton', myClass);
    expect(instance.someValue()).to.equal(TEST_FOR_TRUTH);
  });

});
