const buffer = new Buffer.from('aalok');

/**
 * As buffer has limited memory therefore it
 * will replace aalo from aalok and place Code
 * over there and form Codek
 */
buffer.write('Code');

console.log(buffer.toString());
/*
 * if we print the buffer  directly it will return the
 * hexadecimal value of each word individually
 * for example out put of following console log
 * will be <Buffer 61 61 6c 6f 6b> which is
 * hexadecimal equivalant of 97,97,108,111,107
 */
console.log(buffer);

/*
 * like the above code following code will also
 * genereate data encoding but in assci equivelent of
 * of chatecter like
 * 97 ,97 ,108 , 111, 107 in data segment
 */
console.log(buffer.toJSON());
