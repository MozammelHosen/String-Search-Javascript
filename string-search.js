const products = [
  "Hp EliteBook laptop",
  "HTC Laptop",
  "Walton Laptop",
  "Hp EliteBook Rifle",
  "Samsung laptop",
  "laptop"
];
const searching = "Laptop";
// IndexOf 
const output = [];
// For in loop for searching
for (const product of products) {
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
    else{
        console.log("Not Found");
    }

}
console.log(output);
