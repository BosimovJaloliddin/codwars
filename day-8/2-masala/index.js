// Array inversion indicates how far the array is from being sorted.
// Inversions are pairs of elements in array that are out of order.

// Examples
// [1, 2, 3, 4]  =>  0 inversions
// [1, 3, 2, 4]  =>  1 inversion: 2 and 3
// [4, 1, 2, 3]  =>  3 inversions: 4 and 1, 4 and 2, 4 and 3
// [4, 3, 2, 1]  =>  6 inversions: 4 and 3, 4 and 2, 4 and 1, 3 and 2, 3 and 1, 2 and 1

// Goal
// The goal is to come up with a function that can calculate inversions for any arbitrary array

// masala shartiga link:https://www.codewars.com/kata/537529f42993de0e0b00181f/train/javascript
// 6 kyu
function countInversions(array) {
  let res = 0;
  array.forEach((e, i) =>
    array.forEach((v, idx) => {
      if (e > v && idx >= i) res++;
    })
  );
  return res;
}
console.log(countInversions([6, 5, 4, 3, 3, 3, 3, 2, 1]));
