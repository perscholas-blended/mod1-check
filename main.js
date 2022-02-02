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
console.log("1st question------------")
const resCarBrands = carBrands.filter( carBrands => carBrands.type === "sedan");
console.log(resCarBrands);
console.log("------------------------------")
/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
console.log("2nd question------------")
function reverseString(s){
    let str = "";
    for(let i = s.length-1; i >= 0 ;i--){
      str += s[i];
    }
    return str;
}
console.log(reverseString('cat'));
console.log("------------------------------")

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array
console.log("3nd question------------")

function strgFunction(s){
const longString = s.reduce(function(a,b) {
  return a.length > b.length ? a : b
},'');
return longString;
}
let stringArray = ['abc','abcd','abcde','fgh','ijklmnopq','ab','cd','a']
console.log(strgFunction(stringArray));

console.log("------------------------------")
// 4.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005

console.log("4th question------------")
let wishlist = [
  { title: "tesla", price: 90000 },
  { title: "tesla", price: 45000 },
  { title: "tesla", price: 5 },
  { title: "tesla", price: 2000 },
  { title: "tesla", price: 90000 },
];
function shop(arr) {
  const totalPrice = arr.reduce((acc,val)=>{
    return acc + val.price;
  },0);
  return totalPrice;
}
console.log(shop(wishlist));

console.log("------------------------------")


//5. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.

//Polymorphism : poly - many/more than; morphism - to change;
//child class which extends parents class, can use the same method defined in parent class(when 
//class extends other class- it inherits the properties and methods) to customize in its implementation(in the child class) 
console.log("5th question------------")
class Transportation{
    numberOfWheels(){
      console.log('Vehicle has 4 wheels');
    }
}
class Bike extends Transportation{
  //accessing and customizing the parent method -polymorphism
    numberOfWheels(){
      console.log('Bike has 2 wheels');
    }
}
class Car extends Transportation{
   //accessing and customizing the parent method -polymorphism
  numberOfWheels(){
    console.log('Car has 4 wheels');
  }
} 

let bike1 = new Bike();
bike1.numberOfWheels();
let car1 = new Car();
car1.numberOfWheels();


console.log("------------------------------")
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
console.log("6th question------------")

function flipBool(a){
const resultBooleanArray = a.map((element) => !(element));
return resultBooleanArray;
}
// const flipBool = (arr) => {arr.map((element) => !(element))};

console.log(flipBool([true]))
console.log(flipBool([false, true]))


console.log("------------------------------")
// 7.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
console.log("7th question------------")
function fun(animal,food){
  let afc = animal[0];
 let alc = animal[animal.length-1];
 let ffc = food[0];
 let flc = food[food.length - 1];
    if(afc === ffc && alc === flc){
      return afc + alc;
    }
    else{
      return false;
    }
}
console.log(fun("great blue heron","garlic naan"));
console.log(fun("white tiger","caramel candy"));
console.log(fun("dragon","ddjdjdn"));
console.log(fun("yak","yellow rice"));
console.log("------------------------------")