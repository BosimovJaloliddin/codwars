// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// =========================================================

// link:https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
// 5 kyu

function generateHashtag(str) {
  let res = "#";
  Array.from(str, (v, i) => {
    if (i === 0 && str[i] !== " ") {
      res += v.toUpperCase();
    } else if (str[i - 1] === " " && str[i] !== " ") {
      res += v.toUpperCase();
    } else if (v !== " ") {
      res += v;
    }
  });
  return res.length > 2 && res.length < 140 ? res : false;
}

console.log(
  generateHashtag(
    "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  )
);
