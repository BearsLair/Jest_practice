import calculator from "./calculator";

test("perform basic math operations", () => {
  expect(calculator.add(2, 5)).toBe(7);
  expect(calculator.subtract(10, 7)).toBe(3);
  expect(calculator.multiply(3, 5)).toBe(15);
  expect(calculator.divide(70, 10)).toBe(7);
});
