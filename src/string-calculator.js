function validateAndTrasformInput(numbers) {
  if (!numbers) return 0;
  if (numbers.length === 1 && !isNaN(numbers)) return parseInt(numbers);

  // Split by commas or new lines
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    // Extract custom delimiter
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }
  const nums = numbers.split(delimiter).map((num) => {
    if (isNaN(num)) {
      throw new Error(`Invalid number: ${num}`);
    }
    return Number(num);
  });

  const negatives = nums.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return nums;
}

export function add(numbers) {
  const transformedInput = validateAndTrasformInput(numbers);
  if (typeof transformedInput === "number") return transformedInput;
  else if (transformedInput.length > 0)
    return transformedInput.reduce((sum, num) => sum + num, 0);
}

export function multiplication(numbers) {
  const transformedInput = validateAndTrasformInput(numbers);
  if (typeof transformedInput === "number") return transformedInput;
  if (transformedInput.length > 0)
    return transformedInput.reduce((sum, num) => sum * num, 1);
}
