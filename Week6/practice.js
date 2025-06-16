// //Practice question 1
// let text = "helloWorld";

// function kebabCase(str) {
//   return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
// }

// console.log(kebabCase(text));

// //Practice question 2
// let text1 = "RaceCar";
// let text2 = "A man, a plan, a canal: Panama";

// function isPalindrome(str) {
//   let cleaned = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
//   let reversed = cleaned.split("").reverse().join("");
//   return cleaned === reversed;
// }

// console.log(isPalindrome(text1));
// console.log(isPalindrome(text2));

//practice question 3
function highlightCapitalWords(text) {
  return text.replace(/\b[A-Z][a-z]*\b/g, (match) => `<span>${match}</span>`);
}

let result = highlightCapitalWords("This is a Test of the Emergency Broadcast System.");
console.log(result);
