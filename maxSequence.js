const maxSequence = (arr) => {
  let max = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    currentSum += arr[i];

    if (currentSum < 0) currentSum = 0;
    if (currentSum > max) max = currentSum;
  }

  return max;
};

console.log(maxSequence([-2, 1, -3, 4, -2, 5, -9])); // 4
console.log(maxSequence([-2, -1, -3, -4, -1, -3, -4, -8, -2])); // 0
console.log(
  maxSequence([7, 4, 11, -11, 39, 36, 10, -6, 45, -24, -11, 51, -22, -10, 9])
); // 151
