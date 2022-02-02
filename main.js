// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
// const carBrands = [
//   { brand: "Ford", model: "mustang", type: "convertible" },
//   { brand: "Toyota", model: "camry", type: "sedan" },
//   { brand: "Ram", model: "1500", type: "pickup" },
//   { brand: "Hyundai", model: "Sonata", type: "sedan" },
//   { brand: "Jeep", model: "wrangler", type: "suv" },
//   { brand: "Nissan", model: "frontier", type: "pickup" },
// ];

// const sedans = carBrands.filter(carBrands=>carBrands.type ==="sedan")
// console.log(sedans)


/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
// function reverseString(st){
//   let newString = '';
//   for (let i = st.length -1 ; i >=0;i-- ){
//     newString += st[i];
//   }
//   return newString;
// }
//  console.log(reverseString('Godbless'));


// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

//  const list =['hdhdhdh','dgfdgdg', 'thgggseyetet','jsjdfgshjhg']
//  const longlist = list.reduce(function(a,b){
//    return a.length > b.length ? a : b
//  },'');

//  console.log(longlist)
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
 
  function shop(arr) {
    const totalPrice = arr.reduce((acc,val)=>{
      return acc + val.price;
    },0);
    return totalPrice;
  }
  console.log(shop(wishlist));
}
console.log(shop(wishlist));




//5. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.

Inheritance is when a child element inherits from the parent.

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
  function flipBool(a){
    const boolarr = a.map((item) => !(item));
    return boolarr;
    }
};

// 7.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
function party(animal,food){
  let afp = animal[0];
 let alp = animal[animal.length-1];
 let ffp = food[0];
 let flp = food[food.length - 1];
    if(afp === ffp && alp === flp){
      return afp + alp;
    }
    else{
      return false;
    }
}