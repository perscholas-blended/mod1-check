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

const sedans = carBrands.filter(car=> car.type === "sedan");
console.log(sedans);

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

function reverse(str){
  // take an argument from input
  // set const "rev" as an empty string to save reverse string in an order.
  const rev =[];
  // loop all characters in an original string. it will start from end to start. 
  for(let i = str.length-1; i >= 0; i--){
    // push the last element to first element.
    rev.push(str[i]);
  } 
  return rev.join('');
}

console.log(reverse("cat"));


// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

const arrString = (arr) => {return arr.join(" ");}

console.log(arrString(["hey!","Little","monster!","I","will","catch","you!"]));

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
  const total = arr.reduce((acc,cur)=> acc +cur.price,0);
  return total;
}
console.log(shop(wishlist));


//5. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.

// Encapsulation means the action of enclosing something in or as if in a capsule. 


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
  const flip = arr.map((bool)=> {return !bool;});
  return flip;
}
console.log(flipBool([false,true,true,false,false,false]));

// 7.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`


function match(a,b){
  const animal = a.toLowerCase();
  const food = b.toLowerCase();
  const match = []; 
  if(animal< 2 || food <2){
    console.log("type at least two letters each.")
  }
  else if(animal[0]==food[0] && animal[animal.length-1]==food[food.length-1]){
    match.push(animal[0]+food[food.length-1]);
    return match
  }
  return false;
}

console.log(match("great blue heron", "garlic naan"));