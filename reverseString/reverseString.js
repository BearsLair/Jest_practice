const reverseString = (string) => {
  const stringArray = string.split("");

  let reversedArray = [];

  for (let i = stringArray.length - 1; i > -1; i--) {
    reversedArray.push(stringArray[i]);
  }
  return reversedArray.join("");
};

export default reverseString;
