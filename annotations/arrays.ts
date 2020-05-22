const carMakers: string[] = ["honda", "acura"];
const carMakers2: string[][] = [["honda", "acura"]];

carMakers.map((car: string): string => car.toUpperCase());

// Arrays with elements of different types
const importantDates: (string | Date)[] = [new Date(), "2020-10-01"];
