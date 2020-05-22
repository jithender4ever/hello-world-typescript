const oldCivic = {
  make: "Honda",
  year: 2010,
  model: "Civic",
  broken: true,
  summary() {
    return `Name: ${this.model}`;
  },
};

// Type annotation here is very long, and has to be duplicated several
// times if passed to multiple functions.
function printVeh(car: {
  make: string;
  year: number;
  model: string;
  broken: boolean;
}): void {
  console.log(`
  name: ${car.model}
  year: ${car.year}
  broken: ${car.broken}
  `);
}

printVeh(oldCivic);

// Here comes Interface.
interface Car {
  make: string;
  year: number;
  model: string;
  broken: boolean;
  summary(): string;
}

function printCar({ model, year, broken }: Car): void {
  console.log(`
  name: ${model}
  year: ${year}
  broken: ${broken}
  `);
}

printCar(oldCivic);
