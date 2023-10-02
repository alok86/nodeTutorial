function greet(name) {
  console.log(`hello ${name}`);
}

function greetToMe(greetFn) {
  const name = 'developer';
  greetFn(name);
  //and above function call is call back function
}
// above function is higher order function
// because it is calling to another function
greetToMe(greet);

// any function call to another function called
// call back function

// Synchronous call back function call immeditately when
// control goes to higher order function

// Asynchronus call back

// A Call back that is often used to continue or resume
// code execution after an asynchronous operation has completed

// callback are used to delay the execution of a function until
// a particulat time of event has occurred

// in node.js have an asynchronous to prevent
// blocking of execution
// ex - reading data from file , fetching data from
// a database or hadling a network request
