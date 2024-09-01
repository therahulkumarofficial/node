// Problem 1

var prompt = require('prompt-sync')();
// var age = prompt("Please enter your age: ");
// if(age < 18){
//     console.log("You get a 20% discount!")
// }else if(age >=18 && age < 65){
//     console.log("Normal ticket price applies.")
// }else {
//     console.log("You get a 30% discount!")
// }


// Problem 2

// var length = prompt("Enter length of Rectangle: ");
// var breadth = prompt("Enter breadth of Rectangle: ");
// var area = length * breadth;

// console.log("The area of the Rectangle is: ", area);


// Problem 3

var product1 = {
    name: "Pencil",
    price: 5,
    inStock: true
}
var product2 = {
    name: "Pen",
    price: 10,
    inStock: true
}
var product3 = {
    name: "Colors",
    price: 30,
    inStock: false
}
console.log(product1, product2, product3);



// Method 2

// // Define the product template using an object
// function createProduct(name, price, inStock){
//     return {
//         name: name,
//         price: price,
//         inStock: inStock
//     };
// }
// // Create three products
// const product01 = createProduct("Laptop", 25000, true);
// const product02 = createProduct("Pendrive", 650, true);
// const product03 = createProduct("Hard Disk", 4500, false);
// // Display product details using console.log
// console.log("Product 01: ", product01);
// console.log("Product 02: ", product02);
// console.log("Product 03: ", product03);


// Problem 4

let guestList = []
guestList.push({name: "Rahul", age: 20, rsvp: true, RegisterOn: "15 Aug 2024"});
guestList.push({name: "Mohan", age: 24, rsvp: true, RegisterOn: "26 Aug 2024"});
guestList.push({name: "Ram", age: 19, rsvp: true, RegisterOn: "20 Aug 2024"});
guestList.push({name: "Sachin", age: 23, rsvp: true, RegisterOn: "5 Aug 2024"});
guestList.push({name: "Deepak", age: 20, rsvp: true, RegisterOn: "21 Aug 2024"});

console.log("Total guest is: ", guestList.length);
function isPresent(name) {
    const guest = guestList.find(guest => guest.name.toLowerCase() === name.toLowerCase());

    // If guest is found, return true and the RegisterOn date, otherwise false and null
    return guest ? [true, guest.RegisterOn] : [false, null];
}


let name = prompt("Enter name for check in guest List: ");
const [present, date] = isPresent(name);

if(present){
    console.log(`${name} is on the guest List. He is register on ${date}.`);
}else {
    console.log(`${name} is not on the guest List.`);
}

// Problem 5

const weatherData = {
    date: "2024-08-26",
    temperature: {
        morning: "22°C",
        afternoon: "28°C",
        evening: "24°C",
        night: "20°C"
    },
    conditions: "Partly Cloudy",
    humidity: "60%",
    windSpeed: "15 km/h",
    chanceOfRain: "20%"
};

// Displaying the weather information using console.log
console.log("Weather Information for:", weatherData.date);
console.log("Temperature:");
console.log("  Morning:", weatherData.temperature.morning);
console.log("  Afternoon:", weatherData.temperature.afternoon);
console.log("  Evening:", weatherData.temperature.evening);
console.log("  Night:", weatherData.temperature.night);
console.log("Conditions:", weatherData.conditions);
console.log("Humidity:", weatherData.humidity);
console.log("Wind Speed:", weatherData.windSpeed);
console.log("Chance of Rain:", weatherData.chanceOfRain);
