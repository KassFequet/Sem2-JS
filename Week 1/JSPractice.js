//Week 1- Intro to JavaScript - Kass Fequet//

//1. Building a Domain Name//
let label = "keyincollege";
let tld = "ca";
let domainName = label + "." + tld;
console.log("Domain Name: " + domainName);

//2. Checking a Trusted Domain//
let isKeyin = domainName == "keyincollege.ca";
console.log("Is Keyin College Domain: " + isKeyin);

//3. Flagging Suspicious Domains//
let isNotKeyin = domainName != "keyincollege.ca";
console.log("Suspicious Domain Detected: " + isNotKeyin);

//4. Generating IP Address for devices//
var byte1 = 22;
var byte2 = 243;
var byte3 = 56;
var byte4 = 135;
var ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4;
console.log("IP Address: " + ipAddress);

//5. Creating Multiplication Table//
let table = 12;
for (let i = 1; i <= 10; i++) {
  console.log(table + " X " + i + " = " + table * i);
}

//6 & 7. Sorting Shipment Weights and Summing Even Weights//
let sumOfEvenWeights = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("Even: " + i);
    sumOfEvenWeights += i;
  } else {
    console.log("Odd: " + i);
  }
}

console.log("Sum of Even Weights: " + sumOfEvenWeights);

//8. Checking for Perfect Allocation//
let allocation = 28;
let divisorsSum = 0;

for (let i = 1; i < allocation; i++) {
  if (allocation % i === 0) {
    divisorsSum += i;
  }
}

let isPerfectAllocation = divisorsSum === allocation;
console.log(allocation + " is a Perfect Allocation: " + isPerfectAllocation);

//9. Validating Product IDs//
let productID = 31;
let isPrime = true;

if (productID <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(productID); i++) {
    if (productID % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log("Product ID " + productID + " is Prime: " + isPrime);
