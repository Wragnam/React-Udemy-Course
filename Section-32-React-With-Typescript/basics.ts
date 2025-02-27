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

// Functions & types
function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
