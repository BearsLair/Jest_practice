// 1. Split() word into array
// 2. Map() through each character
//      a. Using character codes and the given key, replace character
//          with the correct character based on the given key (character code number is increased by the key)
//      b. If character is at end of the alphabet (i.e. "z"), counting should
//          wrap around to beginning of alphabet, and should keep same case (upper or lower).
//      c. Symbols should be untouched (i.e. "-", "_", "&", "$", etc.)
// 3. Return joined array (into single string) of the shifted characters.

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
