const openBrackets = ["(", "{", "["];
const closeBrackets = [")", "}", "]"];

const checkBrackets = (str) => {
  const stack = [];

  for (let char of str) {
    const bracketIndex = openBrackets.indexOf(char);

    if (bracketIndex !== -1) {
      stack.push(bracketIndex);
    }

    if (closeBrackets.indexOf(char) !== -1) {
      stack.pop();
    }
  }

  return stack.length === 0;
};
console.log(checkBrackets("{Hi(good day)!}")); // true
console.log(checkBrackets("{nice[day}")); // false
console.log(checkBrackets("(delicious[food])")); // true
