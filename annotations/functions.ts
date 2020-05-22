// arrow functions
const add = (a: number, b: number): number => {
  return a + b;
};

// named functions
function multiple(a: number, b: number): number {
  return a * b;
}

// anonymous function
const x = function (a: number, b: number): number {
  return a - b;
};

// void
const logger = (msg: string): void => console.log(msg);

// throw error cases
const errored = (msg: string): never => {
  throw Error(msg);
};

// Handling object type arguments to a function

// -- OPTION 1 --
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);

// -- OPTION 2: Destructuring syntax --
const todaysWeather1 = {
  date: new Date(),
  weather: "sunny",
};

const logWeather1 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather1(todaysWeather1);
