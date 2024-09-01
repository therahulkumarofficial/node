var a = 5;
var b = 4;
var ans = a + b;
console.log(ans);
const name = "Rahul"
const name2 = 'Prince'
// name = "Reetul"
console.log(name);
console.log(typeof(name));
console.log(name[0]);
console.log(name.length);
console.log(typeof name);
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(typeof ans);
const color = ["red", "green", "blue", 32, true]
color.push("pink")
console.log(color);
console.log(color[1][0]);
console.log(color.length)
console.log(color.pop());

var hours = 16;

if(hours < 12){
    console.log("Your are not allowed");
} else{
    console.log("Your are allowed");
}

var count = 11;
var sum = 0;
for(var i=1; i<count; i++){
    console.log(i);
    sum += i;
}
console.log("Sum is: ", sum);
var n = 5;
for(var i=0; i<n; i++){
    let row = "";
    for(var j = 1; j<=i; j++){
        row+="*";
    }
    console.log(row);
}

const person = {
    name: "Rahul Kumar",
    age: 20,
    isStudent: true,
    hobbies: ["cricket", "chess", "cooking", "painting"]

}
console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(typeof person.name);
console.log(typeof person.hobbies);
console.log(typeof person.age);
console.log(person.age);
person.age++;
// person.age++;
console.log(person.age);
console.log(person.isStudent);


const ages = [23, 12, 26, 17, 19]
const result = ages.filter(checkAge)

function checkAge(age){
    return age <= 18
}
console.log(result);

var prompt = require('prompt-sync')();
const age = prompt("Please Enter your age: ")

if (age < 18) {
    console.log("You get a 20% discount!");
} else {
    console.log("You get a 30% senior discount!");
}