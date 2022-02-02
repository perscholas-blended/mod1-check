// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
  { brand: "Ford", model: "mustang", type: "convertible" },
  { brand: "Toyota", model: "camry", type: "sedan" },
  { brand: "Ram", model: "1500", type: "pickup" },
  { brand: "Hyundai", model: "Sonata", type: "sedan" },
  { brand: "Jeep", model: "wrangler", type: "suv" },
  { brand: "Nissan", model: "frontier", type: "pickup" },
];

let sed = carBrands.filter(cars => cars.type == "sedan");  //filters the cars with type "sedan"
console.log(sed);  //prints the car details with type "sedan"



/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */


function reverseString(str) {
  let revStr = "";   //empty string
  let len = str.length -1 ; //assigning length of the string to len
  for(let i = len ; i >= 0; i--) {    //start from end of string and iterate through to the start of the string
    revStr += str[i];     // adds characters from the string to the reverse string
  }
  return revStr;
}
console.log(reverseString('hello'));

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

let arr = ["First string", "Second string", "Third string","Longest string"];

function longStr(str) {
  let lonStr = "";
  for(let i = 0; i< str.length; i++) {
     if(str[i].length > lonStr.length) {
       lonStr = str[i];
     }
  }
  return lonStr;
}
let finStr = longStr(arr);
console.log(finStr);


// 4.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005

let wishlist = [
  { title: "tesla", price: 90000 },
  { title: "tesla", price: 45000 },
  { title: "tesla", price: 5 },
  { title: "tesla", price: 2000 },
  { title: "tesla", price: 90000 },
];

function shop(arr) {
let totalPrice = arr.reduce((oldPrice, newPrice) => {
    return oldPrice + newPrice.price  },0);
    return totalPrice;
}

console.log(shop(wishlist));


//5. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.

class Mobile {
  constructor(brand,color) {
    this.brand = brand;
    this.color = color;
    this.carrier = "ATT";
  }
  
  carrier() {
    this.carrier = "Verizon";
  }
}     // Inheritance is one the 4 pillars of OOP. In inheritance child class inherits all the properties of the parent class which provides reusability.

  class Apple extends Mobile {
    constructor(brand,color,memory) {
      super(brand,color);
      this.memory = memory;
    }
    model() {
      console.log("This is a new model from Apple");
    }
  }
 let app = new Apple("Apple","Blue","256G");
 app.model();



/*  6.
 * flipBool takes an array of Boolean values
 * it should call map on the array and flip
 * each Boolean value to its opposite,
 * e.g., flipBool([true]) => [false]
 *       flipBool([false, true]) => [true, false]
 *       etc
 * then return the new array
 * Be sure to use map()!
 */

const flipBool = arr =>  arr.map((bool) => !bool); //it flips the values of array to it's opposite value
let arr1 = [true,false,true];
console.log(flipBool(arr1));

// 7.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`


 function matchStr(animal,food) {
 let charAnim = animal[0] + animal.slice(-1);   //slices first and last character of animal and joins them together in charAnim
 let charFood = food[0] + food.slice(-1);      //slices first and last character of food and joins them together in charFood

 if(charAnim == charFood) {    
   return charAnim;
 } else {
   return false;
 }
}
console.log(matchStr('Hello','Hero'));
console.log(matchStr("hello","world"));




          