const climbStairs = function (n) {
  if (n <= 2) return n;

  let prev1 = 2;
  let prev2 = 1;
  let current = 0;

  for (let i = 3; i <= n; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return current;
};

console.log(climbStairs(10));
