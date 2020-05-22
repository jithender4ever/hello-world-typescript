class Vehicle {
  color: string;
  constructor(color: string) {
    this.color = color;
  }

  public start() {
    console.log("Vrrrrrrr");
  }

  private doThisBeforeStop() {
    console.log("turn off lights!");
  }

  protected stop() {
    this.doThisBeforeStop(); // Accessing a `private` method from within the same class.
    console.log("da da da da");
  }
}

const veh = new Vehicle("black");

veh.start();

// Inheritence

class Car1 extends Vehicle {
  start() {
    console.log("Vroom Vroom");
  }

  // stop() {
  //   console.log("car stop");
  // }

  stopEngine() {
    this.stop(); // Accessing a `protected` method from within a subclass.
  }
}

const car = new Car1("red");

car.start();
car.stopEngine();

// ********** START: Constructor shortcut.... **********
// OPTION 1
class Vehicle1 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
}
// OPTION 2 - SHORT FORM
class Vehicle11 {
  constructor(public color: string) {}
}
// ********** END: Constructor shortcut.... **********

// ********** START: Parent class and child class Constructors **********
class pClass {
  constructor(public prop1: string) {}
}

class cClass extends pClass {
  constructor(public prop2: number, prop1: string) {
    super(prop1);
  }
}
// ********** END: Parent class and child class Constructors **********
