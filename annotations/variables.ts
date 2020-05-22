// primitive types
let apples: number = 7;
let speed: string = "fast";
let available: boolean = true;

// Array of strings
const colors: string[] = ["red", "green"];

// Class types
class Car {
  make: "Honda";
}
const car: Car = new Car();

// Object literal types
const person: { age: number } = {
  age: 32,
};

// function types
const myFunc = (i: number): void => console.log(i);

// Handling `any` types
const jsonStr = '{"name": "jithu", "age": 32}';
const nameObj: { name: string; age: number } = JSON.parse(jsonStr);

// Handling multiple types
const nums = [-1, -3, 12];

let numAboveZero: boolean | number = false;

for (let i = 0; i < nums.length; i++) {
  numAboveZero = nums[i];
}
