import capitalize from "./capitalize";

test("capitalize first letter", () => {
  expect(capitalize("mark")).toBe("Mark");
});
