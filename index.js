const data = require('./data.json');

console.log(data);
console.log(data.name);
console.log(data.address.city);
console.log(data.address.street);

// you can ignore .json extension while importing it
// wath mode is node 18 feature
// to start write on console node --watch <file name>
