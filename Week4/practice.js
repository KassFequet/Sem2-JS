//1. Filtering words in an Array
// var hello = (["bye", "hello123", "newhellow", "he20llo", "hello", "abchell", "xyzabc"]);

// function getHello(array){
//     return array.filter(item => /^hello$/.test(item))
// };

// console.log(getHello(hello));

//2. Replacing Numbers in a String
// var text = "There are 10 people in room number 10. Call all 10 people outside.";

// function replaceTen(str){
// replaceTen = str.replace(/10/g, "ten");
// return replaceTen;
// };

// console.log(replaceTen(text));

//3. Cleaning up Text Formatting
var text1 = "This is a sentance.  This is another.";
var text2 = "A ( red ) dog arrived.";

function cleanUp(str) {
  let result = str
    // Replace multiple spaces with a single space
    .replace(/\s+/g, " ")
    // Remove leading and trailing spaces
    .trim()//removes whitespace from both ends of a string
    // Remove extra spaces AFTER punctuation
    .replace(/([.,;:!?])\s+/g, "$1 ")
    // Remove extra spaces BEFORE punctuation
    .replace(/\s+([.,;:!?])/g, "$1")

  return result;
}

console.log(cleanUp(text1));
console.log(cleanUp(text2));
