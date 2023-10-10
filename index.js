const fs = require('node:fs');
/**
 * without encoding it will return the result in
 * the form of binary data
 *
 * functon readFileSync , sync stand for synchronous
 * it mean no statement will execute utill file read
 *
 */
const file_content = fs.readFileSync('./file.txt', 'utf-8');
console.log(file_content);
/**  if error is first argument then it called
 * error first callback function
 * this this async way of function calling
 * pass utf8 as second argument it return
 * data in humen readable format
 */
fs.readFile('./file.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

/**
 * writing file synchronously
 */
fs.writeFileSync('./greet.txt', 'welcoming you to the wordld of file');
/**
 *
 *  writing file asynchronously
 * if want to append content in previous content
 * then add third argument object with property flag:"a"
 */
fs.writeFile('./greet.txt', ' hello students', { flag: 'a' }, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('file written');
  }
});
