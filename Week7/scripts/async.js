//fetch().then().then().catch() dont you think this is also a little confusing

//asnyc/ await

// async function myFunction() {
//     return "hello Keyin College"
// }

// // console.log(myFunction());

// myFunction().then((message) => {
//     console.log(message);
// });

// async function fetchData(){
//     let p = new Promise((resolve) =>
// {
//     setTimeout(()=>{
//         resolve("Data loaded")
// },3000);
// });
// console.log("Fetching results...");
// let result = await p;
// console.log(result);
// }

// fetchData();
// console.log("This line should execute");
// console.log("This line should execute");
// console.log("This line should execute");

async function loadText(){
    let response = await fetch("../data/data.txt");
    let data = await response.text();
    console.log(data);
}

loadText();

//convert our fetch.html and fetch.js into async/await functions and do the same functionality.
//when done send him the async file