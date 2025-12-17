import caesarCipher from "./caesarCipher";

test("Lower case string is encoded with Caesar Cipher", () => {
  expect(caesarCipher(3, "cat")).toBe("fdw");
});

test("Lower case string, with ending character, is encoded with Caesar Cipher", () => {
  expect(caesarCipher(3, "zap")).toBe("cds");
});

test("Mixed case string is encoded with Caesar Cipher", () => {
  expect(caesarCipher(2, "muLLet")).toBe("owNNgv");
});

test("Mixed case string, with symbols, is encoded with Caesar Cipher", () => {
  expect(caesarCipher(2, "man&bear_pig")).toBe("ocp&dgct_rki");
});
