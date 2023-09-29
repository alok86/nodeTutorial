(function (message) {
  const superHero = 'Batman';
  console.log(message, superHero);
})('hello');

(function (message) {
  const superHero = 'superman';
  console.log(message, superHero);
})('hey');

// here each function has ther own private scope
//Before a module's code is executed , Node.js
//will wrap it with a function wrapper that provides
// module scope
/**
 * (function(exports , require , module , __filename, __dirname){
 * module code actully lives in here
 * }
 * )(parameter string)
 *
 * like this iffe index.js calling the module
 */
