// let user1 = {
//     id: 1,
//     firstName: "Alan",
//     lastName: "Smith",
//     age: 20,
//     isLoggedIn: false
// };

// console.log(user1);
// user1.firstName = "Bob"; //update the firstName
// console.log(user1);

// let user1 = {
//     id: 1,
//     firstName: "Alan",
//     lastName: "Smith",
//     age: 20,
//     isLoggedIn: true,
//     hobbies: ["reading", "gaming", "coding"],
//     pref: {color: "red",model:"Volvo"},
//     login: function(){
//         this.isLoggedIn = true;
//     },
//     logout: function () {
//         this.isLoggedIn = false;
//     },
// };

// let user2 = {
//     id: 1,
//     firstName: "Bob",
//     lastName: "Smith",
//     age: 24,
//     isLoggedIn: true,
//     hobbies: ["reading", "gaming", "coding"],
//     pref: {color: "red",model:"Volvo"},
//     login: function(){
//         this.isLoggedIn = true;
//     },
//     logout: function () {
//         this.isLoggedIn = false;
//     },
// };

// console.log(user1);
// console.log(user2);

// console.log(user1);
// user1.logout();
// console.log(user1);


let users=[{id: 1,
    firstName: "Bob",
    lastName: "Smith",
    age: 24,
    isLoggedIn: true,
    hobbies: ["reading", "gaming", "coding"],
    pref: {color: "red",model:"Volvo"},
    login: function(){
        this.isLoggedIn = true;
    },
    logout: function () {
        this.isLoggedIn = false;
    },},{id: 1,
    firstName: "Alan",
    lastName: "Smith",
    age: 24,
    isLoggedIn: true,
    hobbies: ["reading", "gaming", "coding"],
    pref: {color: "red",model:"Volvo"},
    login: function(){
        this.isLoggedIn = true;
    },
    logout: function () {
        this.isLoggedIn = false;
    },},{id: 1,
    firstName: "Timmy",
    lastName: "Smith",
    age: 24,
    isLoggedIn: true,
    hobbies: ["reading", "gaming", "coding"],
    pref: {color: "red",model:"Volvo"},
    login: function(){
        this.isLoggedIn = true;
    },
    logout: function () {
        this.isLoggedIn = false;
    },}]


//In classical JavaScript (Not ES%, ES6) we have a sepcial method called constructor which literally constructs an objects