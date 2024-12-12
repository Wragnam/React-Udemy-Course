// import { apiKey } from './utils.js';

// console.log(apiKey);
//-----
// import apiKey from "./utils.js";

// console.log(apiKey);
//----
// import * as utils from './utils.js';

// console.log(utils.abc);
//--
// import {apiKey, abc as other} from './utils.js';

// console.log(other)
//--

// export const user = {
//     name: "Max",
//     age: 19,
//     greet(){
//         console.log("Hello " + this.name);
//         console.log(this.age);
//     }
// };


// user.name = "Patrick";
// user.greet();

// class User {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log("Hi " + this.name

//         );
//     }
// }

// const user1 = new User("Patrick", 22);

// console.log(user1);

// user1.greet();

// const hobbies = [[
//     "Rugby",
//     "Soccer"
// ], [
//     "Tennis",
//     "Batmanton",
//     "Table Tennis"
// ]];

// hobbies[0].push("Football");

// let j = hobbies[1].findIndex((it)=> it === "");

// console.log(j);

// let hobbiesNew = hobbies[0].map((item)=> ({sport: item}));

// console.log(hobbiesNew);

// const [firstName, lastName] = ["Patrick", "Claassens"];

// console.log(firstName);
// console.log(lastName);


// const {name, age, t}  = {
//     name: "Patrick",
//     age: 22,
//     t : "p"
// }

// console.log(t);

// const hobbies = ["Sports", "Cooking", "Climbing"];

// const otherHobbies = ["Gaming"];

// const mergedHobbies = [...hobbies, ...otherHobbies];

// console.log(mergedHobbies);


// const user = {
//     name: "Patrick",
//     age: 22
// }

// const extendedUser = {
//     isAdmin: true
// }

// const newUser = {
//     ...user,
//     ...extendedUser
// }

// console.log(newUser);

// const password = prompt('Your Password');

// if(password === "123"){
//     console.log("123 works");
// }else if(password === "1"){
//     console.log("1 works");
// }else{
//     console.log(password + " does not work");
// }


// const f = ()=>{console.log("hello!");}

// setTimeout(f, 1000);


// function greet(greetF){
//     greetF();
//     console.log("Greeted");
// }

// greet(()=>{console.log("Hello!")});

// function init(){
//     function greet(){
//         console.log("Hello!");
//     }

//     greet();
// }

// init();

const hobbies = ["Sports", "Cooking"];
console.log(hobbies);
hobbies.push("Gaming");
console.log(hobbies);
