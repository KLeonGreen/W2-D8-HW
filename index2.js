// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR ANSWER HERE */

const theArray = ["a", "b", "c", "d"];
const reversedArray = theArray.reverse();
console.log(reversedArray);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */

const theNumberArray = [1, 9, 3, 2, 5];
const maxNumber = Math.max(...theNumberArray);
console.log(maxNumber);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */

const theNumArray = [1, 9, 3, 2, 5];
const minNumber = Math.min(...theNumArray);
console.log(minNumber);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

/* WRITE YOUR ANSWER HERE */

// const theNewArray = [1, 9, 3, 2, 5, 4, 66, 143, 20, 884838];

// let theEvenArray = [];
// for (let e = 0; e < theNewArray.length; e++) {
//   if (theNewArray[e] % 2 === 0) {
//     theEvenArray = theEvenArray.concat(theNewArray[e]);
//   }
// }
// console.log(theEvenArray);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* WRITE YOUR ANSWER HERE */

const theNewArray2 = [1, 9, 3, 2, 5, 4, 66];

let finalArray = [];

for (let i = 0; i < theNewArray2.length; i++) {
  if (theNewArray2[i] % 2 !== 0) {
    finalArray.push(theNewArray2[i]);
  }
}
console.log(theNewArray2);
console.log(finalArray);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */

const vowels = "aboneo";

const noVowels = vowels.replace(/[aeiou]/gi, "");

console.log(noVowels);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

const theNewArray3 = [1, 9, 3, 2, 5, 4, 66];

const newArr = theNewArray3.map((num) => num + 1);
console.log(newArr);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */
