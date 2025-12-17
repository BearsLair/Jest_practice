const getShiftedCharCode = (key, code) => {
  if (code >= 97 && code <= 122) {
    for (let i = 1; i < key + 1; i++) {
      code++;
      if (code === 123) {
        code = 97;
      }
    }
  }

  if (code >= 65 && code <= 90) {
    for (let i = 1; i < key + 1; i++) {
      code++;
      if (code === 91) {
        code = 65;
      }
    }
  }

  return code;
};

const caesarCipher = (key, string) => {
  const stringArray = string.split("");

  let shiftedArray = [];

  shiftedArray = stringArray.map((char) => {
    let shiftedCode = getShiftedCharCode(key, char.charCodeAt(0));
    return String.fromCharCode(shiftedCode);
  });

  return shiftedArray.join("");
};

export default caesarCipher;
