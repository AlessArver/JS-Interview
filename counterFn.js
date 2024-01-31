function counter() {
  let x = 0;

  return () => {
    x = x + 1;
    
    return x;
  };
}

const setCountetr = counter();

console.log(setCountetr()); // 1
console.log(setCountetr()); // 2
console.log(setCountetr()); // 3

const counter2 = (x) => (y) => x + y;

console.log(counter2(2)(3)) // 5
console.log(counter2(3)(3)) // 6
console.log(counter2(1)(2)) // 3
