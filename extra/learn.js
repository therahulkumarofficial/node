var _ = require('lodash');

var a = [5, 3, 6, 8];
var last = _.last(a);
console.log(last);


var array = [1, 2, 3, 4];
// var evens = _.remove(array, function(n) {
//   return n % 2 == 0;
// });
var evens = _.remove(array, (n) => n % 2);


console.log(evens);

for (var a of [1, 2, 3, 49]);
console.log(a);
