// 1. Even or Odd Checker

let number = 20;

// % (Modulus operator) - if number & 2 is 0; the number is a even number
if (number % 2 === 0) { 
  console.log(`${number} is a even number`);
}
else {
  console.log(`${number} is a odd number`);
}


// 2. Age Eligibilty Checker 

let age = 20;

if (age >= 18 ) {
  console.log("You are eligible to vote.")
}
else {
  console.log("You are not eligible ti vote.")
}


// 3. Grade Evaluator

let score = 30;

if ( score >= 70 ) {
  console.log("Grade A");
}
else if  (score >= 60 ) {
  console.log("Grade B");
}
else if ( score >= 50 ) {
  console.log("Grade C");
} 
else {
  console.log("FAILED try again")
}
  


// 4. Login Validation

let username = "admin";
let password = "1234";

if ( username === "admin" && password === "1234" ) {
  console.log("Login successful");
}
else {
  console.log("Invalid credentails");
}



// 5. Product Discount Calculator
// Calculates final price based on membership status using an object.
let product = {
    name: "Laptop",
    price: 1000,
    isMember: true
};

let finalPrice;
if (product.isMember) {
    // Apply 10% discount: price - (price * 0.10).
    finalPrice = product.price * 0.9; 
} else {
    finalPrice = product.price;
}

console.log("Product: " + product.name);
console.log("Final Price: " + finalPrice);
