const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Order matters. That is the diff between arrays and tuples.

// Syntax 1
const pepsi: [string, boolean, number] = ["brown", true, 40];

// Syntax 2 - BETTER
type Drink = [string, boolean, number];

const coke: Drink = ["black", true, 50];
const maaza: Drink = ["yellow", false, 40];
