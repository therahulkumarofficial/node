/*

const { log } = require('console');
var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);

var type = os.type();
console.log(type);


fs.appendFile('append.txt', 'Hi' + user.username + '!\n', () => {console.log('file is created');} );

// console.log(os);
console.log(fs);


*/


const notes = require('./notes.js');
var _ = require('lodash');
var age = notes.age;
console.log(age);
console.log('server file is available');

var result = notes.addNumber(age + 5, 15);
console.log('Result is: ', result);


var data = ["person", "person", 1, 1, 2, 3, 2, 'name', 'age', '2']
var filter = _.uniq(data);
console.log(filter);
console.log(_.isString("Rahul"));
console.log(_.isNumber(5.3));
console.log(_.isBoolean(false));


var array = [2, 3, 5, 7, 8];
// array.reverse()
console.log(_.reverse(array));

var array2 = [2, 3, 5, 7, 8, 3, 5, 6];
console.log(_.lastIndexOf(array2, 5));






// const jsonString = '{"name":"John Doe","age":30,"city":"New York"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);


const objectToConvert = { name: "John Doe", age: 30, city: "New York" };
const json = JSON.stringify(objectToConvert);
console.log(json);

console.log(typeof json); // string
console.log(json.length); 

// // Create a long string
// const longString = 'a'.repeat(9999); // 9999 characters long

// // Create a JSON object with the long string
// const jsonObject = {
//   "longField": longString
// };

// // Convert the object to a JSON string
// const jsonString = JSON.stringify(jsonObject);

// // Ensure the length is exactly 10,000 characters
// console.log(jsonString.length); // Should output 10000
// console.log(jsonString);
