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

const filteredCars = carBrands.filter((car) => car.type === "sedan");
console.log(filteredCars);

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

console.log(reverseString("happy"));
console.log(reverseString("Jumping"));

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
  return arr.reduce(function (cur, nex) {
    return cur.price + nex.price;
  });
}
//console.log(shop(wishlist));
// console.log(wishlist[1].price);
// console.log(wishlist[3].price);

//5. OOP has 4 pillars and we learned about each in this phase.
//Choose the pillar you are most comfortable with
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as
//instructors and you will be banished to the nether realms.
//=========ANSWER Below========
//Inheritance is when classes can reuse code from other classes. It acts as a blueprint to the class it is being copied by.
//=========Answer Above========
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
const flipBool = (arr) => {
  const newArr = arr.map(function (el) {
    if (el === true) {
      return false;
    } else return true;
  });
  return newArr;
};

console.log(flipBool([true, false, true, false, true, true]));
// 7.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

function feastOrFamine(animal, food) {
  animal = animal.toLowerCase();
  food = food.toLowerCase();
  if (animal.length < 2 || food.length < 2) {
    return false;
  } else if (
    animal[0] === food[0] &&
    animal[animal.length - 1] === food[food.length - 1]
  ) {
    return animal[0] + food[food.length - 1];
  } else return false;
}

console.log(feastOrFamine("great blue heron", "garlic naan"));
console.log(feastOrFamine("panther", "pepper"));
console.log("pizza".length);
