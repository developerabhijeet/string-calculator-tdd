import { add } from "./src/string-calculator.js";

console.log(add("1,2,3")); // Output: 6
console.log(add("//;\n1;2;3")); // Output: 6
console.log(add("")); // Output: 0
console.log(add("a")); // Output: error
