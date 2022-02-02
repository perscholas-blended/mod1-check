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

const noSedans = carBrands.filter((checkSedan));


function checkSedan(objArray) {
    if (objArray.type === 'sedan') {
      return;
    } else {
      return objArray;
    }
}

console.log(noSedans)

// I must admit to this--- I am still shaky on arrow functions and the format of these higher order methods.
// For now, I will have to make a seperate function outside of it to help visualize it. I hope to study this more
//during the upcoming weekend. 

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */


function reverseString(str) {
  let strReverse = "";
  for (let i = str.length - 1; i >= 0; i -=1) {
    strReverse = strReverse + str[i];
  }
  return strReverse;
}

console.log(reverseString('LolaPop'));
//I'm getting undefined...I'll have to play with this later.

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

//Let's visualize this...
strArray = ["Spamton's Delicious Kromer", "tuna","SuperMario", "hi"]
//This should return "Spamton's Delicious Kromer"
function longestString(strArray) {
let isLongest = 0;
let longestString = "";
for (let i = 0; i <= strArray.length - 1; i +=1) {
  if (isLongest < strArray[i].length) {
    isLongest = strArray[i].length;
    longestString = strArray[i];
    //I wanted to avoid doing this, setting longestString every time we find one that's longer,
    //but this is the first thing that comes to mind.
  }
}
  
  return longestString;
}

console.log(longestString(strArray))
//...SuperMario? Oh, "i" updates every loop, which throws off what I want to do. I'll go back and edit this.
// Edit done. Replaced logic of "if statement is true, isLongest = i", with the above. 

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
  return arr.reduce( (sum, arrEl) => {
    //Sum should be our accumulator...arrEl is what we want to add.
    return sum += arrEl.price;
    //Fingers crossed...object object. Why is it skipping the first one? It's not adding, either.
    //Ah. Plus equals? The price is an integer...so it should add.
  })

  /*function addIt(sum, arrEl) {
    return sum += arrEl.price;
  }
  */
}
console.log(shop(wishlist));




//5. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.

/*
    I think I'm most comfortable with abstraction, inheritance, encapsulation, and polymorphism in that order.
    
    Abstraction is a representation of our class/program/object. It's a piece that represents the whole to 
    outsiders. What goes on internally does not need to be shown. 

    Inheritance means that a class will inherit all the functions and variables of its parent class. This means
    that child class can use all of those functions and variables.
      The format is "ClassName extends ClassNameParent"

      Encapsulation seems to me to make up the scope of the class. Everything inside of the class stays inside of 
      the class. Nothing else can see it, unless we extend...and even then, all we get is the same methods and 
      variable names. I think this is encapsulation.

      Polymorphism seems to be an extension/consequence of inheritance. A child of a class can have its own method
      that does its own thing, even though it shares a name with its parent class. Changing the parent class's method
      will not do anything to change that of its child, and vice-versa, I think. 

*/

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
  arr.map(flipIt);
  
};

function flipIt(arrEl) {
  if (arrEl === true) {
    arrEl = false;
  } else {
    arrEl = true;
  }
}
//Yeah...I need more practice with maps, filter, reduce, etc.

let booleanArray = [true,true,false,true,false];
console.log(flipBool(booleanArray))

// 7.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

function feastFamine(animal, food) {
  if (animal.length < 2 || food.length < 2) {
    return console.log('Invalid input. Please make sure both inputs are at least two letters long.')
  }

  animal.toLowerCase();
  food.toLowerCase();

  let animalFirstLast = animal.substring(0,1)+animal.slice(animal.length-1,animal.length);
  let foodFirstLast = food.substring(0,1) + food.substring(food.length-1,food.length);

  //console.log(animalFirstLast) There were to check...
  //console.log(foodFirstLast)

  if (animalFirstLast === foodFirstLast) {
    return animalFirstLast;
  } else {
    return false;
  }


}

console.log(feastFamine("alpaca","chow mein")) //...lol! 