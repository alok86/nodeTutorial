(function () {
  const superHero = 'Batman';
  console.log(superHero);
})();

(function () {
  const superHero = 'superman';
  console.log(superHero);
})();

// here each function has ther own private scope
//Before a module's code is executed , Node.js
//will wrap it with a function wrapper that provides
// module scope
/**
 * (function(){
 * module code actully lives in here
 * }
 * )
 */
