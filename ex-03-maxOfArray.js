/**
 * maxOfArray()
 *
 * Write a function maxOfArray() that takes an array of
 * numbers as an argument and finds the highest number.
<<<<<<< HEAD
 *
**/
function maxOfArray(arrayInput) {
  var max = Math.max.apply(null,arrayInput);
  // console.log(max);
  return max

}

// =======
//  */

console.group('JS Iterations Week');
  console.log('%cFunction: maxOfArray', 'background-color: green; color: white')
  console.groupCollapsed('Should return 21 for the next [2, 7, 3, 4, 21, 0] series');
    console.assert(maxOfArray([2,7,3,4,21,0]) === 21)
  console.groupEnd();

  console.groupCollapsed('Should return 100 for the next [100, 9, 8, 7, 6, 10] series');
    console.assert(maxOfArray([100,9,8,7,6,10]) === 100)
  console.groupEnd();
// >>>>>>> 5132c95fdc6ab951494f148eb60c9e997fa63923

  console.groupCollapsed('Should return 201 for the next [84, 32, 11, 31, 12, 201] series');
    console.assert(maxOfArray([84,32,11,31,12,201]) === 201)
  console.groupEnd();
console.groupEnd();
