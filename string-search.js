const products = [
  "Hp EliteBook Laptop",
  "HTC Laptop",
  "Walton Laptop",
  "Hp EliteBook Rifle",
  "Samsung laptop",
  "Laptop",
];
const searching = "Laptop";
// const searching = "hp";
// IndexOf
const output = [];
// For in loop for searching
// for (const product of products) {
//   if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//     output.push(product);
//   } else {
//     console.log("Not Found");
//   }
// }
// console.log(output);

// Declier To includes
// for (const product of products) {
//   if (product.toLowerCase().includes(searching.toLowerCase())) {
//     output.push(product);
//   } else {
//     console.log("Not Found");
//   }
// }
// console.log(output);

// Search-StartWith

// for (const product of products) {
//   if (product.toLowerCase().startsWith(searching.toLowerCase())) {
//     output.push(product);
//   } else {
//     console.log("Page Not Found");
//   }
// }
// console.log(output);

// Ends With

for (const product of products) {
  if (product.toLowerCase().endsWith(searching.toLowerCase())) {
    output.push(product);
  } else {
    console.log("Ends With Page Not Found");
  }
}

console.log(output);
