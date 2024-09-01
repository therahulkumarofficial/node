console.log("Server file is running");

// function add(a, b){
//     return a + b;
// }

// var add = function(a, b){
//     return a + b;
// }

// var add = (a, b) => {return a + b;}

// var add = (a, b) => a+b;

// var result = add(123, 61);
// console.log(result);

// (function(){
//     console.log('Rahul is added');
// })();


/*
function callback(){
    console.log('now adding is sucessfully completed');
}
const add = function(a, b, callback){
    var result =  a + b;
    console.log('Result is: ', result); // main function work completed
    callback();
}

add(3, 12340004, callback);
*/

const add = function(a, b, rahul){
    var result =  a + b;
    console.log('Result is: ', result); // main function work completed
    rahul();
}

// add(3, 124, function(){
//     console.log('add is sucessfully completed');
// })

add(5, 123, () => {console.log('add completed')}) // use is because it is handy