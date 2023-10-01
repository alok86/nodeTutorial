const obj1 = {
  name: 'Bruce Wayne',
};

const obj2 = obj1;
obj2.name = 'Clark Kent';

console.log(obj1);

// here we can see as we are assign the name to
// object 2  but object 1 also get change because
// both object pointing to same address

let obj3 = obj1;

// when we assign the object litiral reference is broken
console.log(obj3);
obj3 = {
  name: 'local batman',
};
// re-declaring obj3 in above code
console.log(obj3);

/*
var declarations are globally scoped or function
 scoped while let and const are block scoped. 
 var variables can be updated and re-declared 
 within its scope; let variables can be updated 
 but not re-declared; const variables can neither
  be updated nor re-declared. They are all 
  hoisted to the top of their scope.
*/
