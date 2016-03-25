[![Build Status](https://travis-ci.org/dxprog/molecule-singleton.svg)](https://travis-ci.org/dxprog/molecule-singleton)

#molecule-singleton

A library for building and managing singletons built on moleculejs.

##Example:

```javascript

// MySingleton.js
import Singleton from 'molecule-singleton';

export default Singleton({
  property: '',
  setProperty(prop) {
    this.property = prop;
  }
});

// ExecutedFirst.js
import MySingleton from './MySingleton.js';
MySingleton.setProperty('hey!');

// ExecutedNext.js
import MySingleton from './MySingleton.js';
console.log(MySingleton.property); // "hey!"
```

Singleton extends Molecule, so you can use this as a drop in replacement. The difference between the two is that Molecule will return a constructor, whereas Singleton returns an instance of the object. [Check out the moleculejs repository](https://github.com/dxprog/molecule.js) for more information.