'use strict';

var Molecule = require('moleculejs');

// For node or browser
var globalScope = global || window;

if (!globalScope._singletons) {
  globalScope._singletons = {};
}

module.exports = function Singleton(name, classDefinition) {
  if (!name) {
    throw new Error('A singleton name and class definition must be provided');
  }

  var retVal = globalScope._singletons[name];
  if (!retVal) {
    if (!!classDefinition && (typeof classDefinition === 'object' || classDefinition._isMolecule)) {
      // If the passed definition is a Molecule already, just instantiate that
      // Otherwise, create a new one
      if (classDefinition._isMolecule) {
        retVal = globalScope._singletons[name] = new classDefinition();
      } else {
        retVal = globalScope._singletons[name] = new (Molecule(classDefinition));
      }
    } else {
      throw new Error('Trying to fetch singleton "' + name + '" that has not been defined');
    }
  }

  return retVal;
};
