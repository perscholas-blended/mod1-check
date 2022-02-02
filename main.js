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

const filtertype = carBrands.filter((eachitem) => {
  return eachitem.type == "sedan";
});
console.log(filtertype);

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
function reverseString(string1) {
  for (let i = string1.length - 1; i >= 0; i--) {
    console.log(string1[i]);
  }
}
reverseString("vedha");
// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

function longestString(string3) {
  let splitstring = string3.split(" ");
  let length1 = 0;
  let longstring;
  for (let i = 0; i < splitstring.length; i++) {
    if (splitstring[i].length > length1) {
      length1 = splitstring[i].length;
    }
    longestString = splitstring[i];
  }
  return longestString;
}

console.log(longestString(" Life is fragile and temporary"));
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
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i].price;
  }
  return total;
}
console.log(shop(wishlist));

//5. OOP has 4 pillars and we learned about each in this phase.
//Choose the pillar you are most comfortable with
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as
//instructors and you will be banished to the nether realms.

  encapsulation: encapsulating data from user
class student(){
  constructor (){
    let name;
    let mark;
  }
  getname(){
    return this.name;
  }
  setname(){
    this.name=name;
  }
}
var student1= new student();
student1.setname("vedha");
student1.getname();
console.log(student1.getname());

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
  let arr1 = arr.map((item) => {
    return !item;
  });
  console.log(arr1);
};
flipBool([false, true, true, false]);

// 7.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

function feastfamine(str1, str2) {
  if (str1[0] === str2[0] && str1[str1.length - 1] === str2[str2.length - 1]) {
    return (newstring = str1[0] + str1[str1.length - 1]);
  } else {
    return false;
  }
}
console.log(feastfamine("great blue heron", "garlic naan"));
