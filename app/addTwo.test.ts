import { addTwo } from "./addTwo";

it("adds two numbers", () => {
  const numA = 1;
  const numB = 2;

  expect(addTwo(numA, numB)).toBe(3);
});
