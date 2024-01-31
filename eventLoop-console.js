const myFn = async () => {
  console.log("1");

  setTimeout(() => console.log("8"), 0);

  Promise.resolve().then(() => console.log("5"));

  const myFn2 = async () => {
    setTimeout(() => console.log("9"), 1);
    console.log("2");
    Promise.resolve().then(() => setTimeout(() => console.log("10"), 0));

    const importValue = new Promise((res) => {
      console.log("3");
      Promise.resolve().then(() => console.log("7"));

      setTimeout(() => res(), 5);
    });

    await importValue;

    console.log("11");
  };

  Promise.resolve().then(() => console.log("6"));

  await myFn2();

  console.log("12");
};

myFn();

console.log("4");
