// =========================

//1-masala

// Given two arrays of strings a1 and a2 return a sorted array r
// in lexicographical order of the strings of a1 which are substrings
// of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

// masala yechimi
// a1 = ["tarp", "mice", "bull"];
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
// function inArray(array1, array2) {
//   let arr = [];
//   for (let i = 0; i < array1.length; i++) {
//     let a = 0;
//     for (let j = 0; j < array2.length; j++) {
//       if (array2[j].includes(array1[i])) {
//         a = 1;
//       }
//     }
//     if (a === 1) {
//       arr.push(array1[i]);
//     }
//   }
//   return arr.sort();
// }

// inArray(a1, a2);
