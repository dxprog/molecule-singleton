'use strict';

const Molecule = require('moleculejs');

// For node or browser
const globalScope = global || window;

if (!globalScope._singletons) {
  globalScope._singletons = {};
}

module.exports = function Singleton(name, classDefinition) {
  let retVal = globalScope._singletons[name];

  if (!retVal && (typeof classDefinition === 'object' || classDefinition._isMolecule)) {
    // If the passed definition is a Molecule already, just instantiate that
    // Otherwise, create a new one
    if (classDefinition._isMolecule) {
      retVal = globalScope._singletons[name] = new classDefinition();
    } else {
      retVal = globalScope._singletons[name] = new (Molecule(classDefinition));
    }
  }

  return retVal;
};
