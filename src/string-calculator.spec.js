import { add, multiplication } from "./string-calculator";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  test("should return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
  });
  test("should handle multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });
  test("should handle new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  test("should support custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  test("should throw an exception for negative numbers", () => {
    expect(() => add("1,-2,-3")).toThrow(
      "Negative numbers not allowed: -2, -3"
    );
  });
  test("should throw an exception for non-numeric values", () => {
    expect(() => add("1,abc,2")).toThrow("Invalid number: abc");
  });

  // Multiplication Specs
  test("should return the 0 for empty string", () => {
    expect(multiplication("")).toBe(0);
  });

  test("should return the number itself if single digit", () => {
    expect(multiplication("1")).toBe(1);
  });
  test("should throw the error of negative digits ", () => {
    expect(() => multiplication("1,-2,-3")).toThrow(
      "Negative numbers not allowed: -2, -3"
    );
  });

  test("should return the multiplication of two numbers", () => {
    expect(multiplication("2,2")).toBe(4);
  });
  test("should return the multiplication of multiple numbers", () => {
    expect(multiplication("1,2,3,4,5,6,7,2")).toBe(10080);
  });
});
