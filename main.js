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
// let sedans = carBrands.filter(function(sedans){
//   return sedans.type === 'sedan';
// });
// console.log(sedans);

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array
// const declaration = 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.';
// let declarationSplit = declaration.split(' ');

// function LongestString(string){
//   for(let i = 0; i < string.length; i++){
//     if(string[i].length >= 13){
//       console.log(string[i]);
//     }
//   }
// }
// console.log(LongestString(declarationSplit));
// 4.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005
// let wishlist = [
//   { title: "tesla", price: 90000 },
//   { title: "tesla", price: 45000 },
//   { title: "tesla", price: 5 },
//   { title: "tesla", price: 2000 },
//   { title: "tesla", price: 90000 },
// ];
// function shop(arr) {
//  arr.reduce(function(acc, num){
//    for(let i = 0; i < wishlist.length; i++){
//     return arri]price + [i]price;
//    }
//   }
// }
// console.log(shop(wishlist));




//5. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.

//Answer-- Classes encapsulates properties of an object
// ex.
// class bird{
//   constructor(wings, beak, feathers){
//     this.wings = wings;
//     this.beak = beak;
//     this.feathers = feather;
//   }
//   canFly(){
//     console.log('flapp wings');
//   }
// }


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
// const arr = [true, false, true, false, true];
//  const flipBool = arr.map(function(bool){
//    for(let i = 0; i < arr.length; i++){
//     if(bool[i]){
//       return false;
//     }
//       else if(!bool[i]){
//         return true;
//       }
//    }
//  });
//  console.log(flipBool);

// 7.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

// function words(animal, food){
//   if(animal[animal.length -1] === food[food.length - 1] && animal[0] === food[0]){
//     console.log(`the letters ${animal[0]} and ${animal[animal.length -1]} match`);
//   }
//   else{
//     console.log('they dont match');
//   }

// }
// words('fee', 'freed')
