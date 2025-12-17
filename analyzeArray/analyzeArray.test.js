import analyzeArray from "./analyzeArray";

test("Analyze inputted array.", () => {
  expect(analyzeArray([2, 4, 6, 8, 10])).toEqual({
    average: 6,
    min: 2,
    max: 10,
    length: 5,
  });
});
