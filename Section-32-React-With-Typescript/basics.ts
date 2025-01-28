// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;

age = 21;

let userName: string;

userName = "Patrick";

let isInstructor: boolean;

isInstructor = true;

// More Complex Types
let hobbies: string[];
hobbies = ["sports", "food"];

type Person = {
  name: string;
  age: number;
};

let person: Person = { name: "Patrick", age: 22 };

// person = { isEmployee: true };

let people: Person[];

// Type inference
let course = "React - The Complete Guide";

// course = 12; error

//Union Types
let courseUnion: string | number = "Union element";

courseUnion = 10;
