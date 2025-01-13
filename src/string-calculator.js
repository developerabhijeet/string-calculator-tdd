export function add(numbers) {
  if (numbers === "") return 0;

  // Split by commas or new lines
  const nums = numbers.split(/,|\n/).map(Number);
  return nums.reduce((sum, num) => sum + num, 0);
}
