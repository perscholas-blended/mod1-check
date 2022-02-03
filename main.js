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

const sedanCar = carBrands.filter((objects)=>
  objects.type == "sedan"
)
console.log(sedanCar)
/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
const reverseString=(s)=> s.split("").reverse().join("")  //reverse is only used for array so need to convert string to array
console.log(reverseString('cat'))
// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

const longestString = (arrayStrings) => {
  let longestS = arrayStrings[0]
  for (s of arrayStrings){
    if (s.length >= longestS.length){longestS = s}
  }
  return longestS
}
const arrayS=['hello','buy','love','strong']
console.log(longestString(arrayS))
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
const shop=(arr)=>{
  return arr.reduce((accu, current) => ({price : accu.price + current.price}))
}

console.log(shop(wishlist));

//5. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.

 //one of the pillars is inheritance, child extends the trails from ancestors, such as all cars has color but each car has different shape
 //Inheritance is a parent-child relationship where we create a new class by using existing class code. It is just like saying that “A is type of B”. For example is “Apple is a fruit”, “Ferrari is a car”


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
  const newArray= arr.map(x=> !x)
  return newArray
};

console.log(flipBool([false,true, false,true]))

// 7.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
const  matchLetters =(animal, food)=>{
  //remove space
  animal = animal.replace(/ /g,'')
  food = food.replace(/ /g,'')  //g means global
  if (animal.toLowerCase().length > 2 && food.toLowerCase().length >2){
    if (animal[0] == food[0] && animal[animal.length-1] == food[food.length-1]){
      return (animal[0]+animal[animal.length-1])
    }
  }
}

console.log(matchLetters("preat blue heron", "parlic naan"))