const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3 }, { value: 4 }],
    },
    {
      value: 5,
      children: [
        {
          value: 6,
          children: [{ value: 7 }],
        },
      ],
    },
    { value: 8 },
  ],
};

const three1 = (tree) => {
  let result = [tree?.value];

  if (!tree?.children) return result;

  for (let child of tree.children) {
    result = [...result, ...three1(child)];
  }
  return result;
};
const three2 = (tree) => {
  const result = [];
  const stack = [tree];

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.value);

    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i]);
      }
    }
  }

  return result;
};
console.log(three1(tree)); //[1,2,3,4,5,6,7]
console.log(three2(tree)); //[1,2,3,4,5,6,7]
