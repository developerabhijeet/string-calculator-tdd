export function add(numbers) {
  if (numbers === "") return 0;

  // Split by commas or new lines
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    // Extract custom delimiter
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }

  const nums = numbers.split(delimiter).map(Number);
  return nums.reduce((sum, num) => sum + num, 0);
}
