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

// const onlySedans = carBrands.filter(car => car.type ==  "sedan")

// console.log(onlySedans) //works

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

// let reversed = ""

// function reverseString (word){
//   for (let i = word.length - 1; i >= 0; i--){
//     reversed += word[i];
//   }
//   return reversed;

// }


// console.log(reverseString('cat')) // works

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

// function longest (arr) {
//   let maxString = arr[0];
//   for (let i = 1; i < arr.length; i++){
//     if (arr[i].length > maxString.length){
//       maxString = arr[i];
//     }
//   }
//   return maxString;

// }
// console.log(longest(["hello", "hi", "whatsup", "ok", "lalaalala"])) // works

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
  const prices = arr.map

  const total = arr.reduce((a, c) => {
    a + c.price;
   
  })
  return total


}
console.log(shop(wishlist)); 




//5. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.

// Polymorphism is one of the key concepts of object oriented programming. It is the ability of any data to be processed in more than one form. It allows us to perform a single action in multiple ways. 

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
// const flipBool = (arr) => {
//   return arr.map(bool => bool == false? true : false);
// };

// console.log(flipBool([true, false, true, true, false])) //works

// 7.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

// function feastOrFamine (animal, food) {
//   return animal[0] == food[0] && animal.charAt(animal.length -1) == food.charAt(food.length -1)

// }

// console.log(feastOrFamine ("great blue herobn", "garlic naanpn")) //works