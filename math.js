add = (a, b) => {
  return a + b;
};

subtract = (a, b) => {
  return a - b;
};

/*
if it is remember iffe has five parameter in which 
exports and module ref is there therefore only exports is enough
*/

module.exports = {
  add,
  subtract,
};

/*
exports is the reference to the module.exports 
but of we use only exports the ref will be broken
there for it is highly recomended to use module.exports 
instead of only exports
*/
