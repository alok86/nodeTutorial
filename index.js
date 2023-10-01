const superHero = require('./super-hero');
console.log(superHero.getName());
superHero.setName('Superman');
console.log(superHero.getName());

const newSuperHero = require('./super-hero');
console.log(newSuperHero.getName());
// and output of above line is Superman this is called module caching
// and instead of loading fresh module it loaded the previously loaded module

// even the both module have same code and variable
// still there is no conflict because each module has
// there own scope
//require('./fighter');
//require('./warrior');

// const add = require('./add');

// console.log('hello , node js');
// const sum = add(4, 6);
// console.log(sum);
