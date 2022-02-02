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

let carType =[];
for (let i = 0; i < carBrands.length; i++) {
  if (carBrands[i].type !== "sedan") {
      carType.push(carBrands[i]);
  }
} console.log(carType)

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) { 
      newString += string[i]; 
  }
  return newString;  
}
console.log(reverseString('Jonathan'));

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array


let word = findLongestWord(["Helsinki","PanamaCity","Borabora", "Kakkerlak", "Scheveningen", "DarEsSalaam", "Perth", "Ulanbataar", "Johannesburg"]);

function findLongestWord(array) {
  let longestWord = "";
  array.forEach(function(word) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}
console.log(word); 

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
  let newPrice = [];
  for (let i = 0; i < wishlist.length; i++) {
    if (newPrice = arr[i].price + newPrice)
  }
}
console.log(shop(wishlist));


// let carType =[];
// for (let i = 0; i < carBrands.length; i++) {
//   if (carBrands[i].type !== "sedan") {
//       carType.push(carBrands[i]);
//   }
// } console.log(carType)



//5. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.

Encapsulation is a way to bind together the data and method to manipulate them.  

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
const flipBool = (arr) => {};

// 7.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

