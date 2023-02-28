// Define a car object using plain literal object.
// We define 2 properties (brand, speed) and
// 3 methods (accelerate, brake, describe)

const car = {
  //properties
  brand: "Ford",
  speed: 0,

  // methods:

  accelerate: function (amount) {
    this.speed += amount;
  },

  brake: function (amount) {
    this.speed -= amount;
  },

  status: function () {
    return this.brand + " running at " + this.speed + " km/h";
  },
};

// But now if we want another car we need to repeat the code...
// That's unnecessary repetition.

const car2 = {
  brand: "Ferrari",
  speed: 0,

  accelerate: function (inc) {
    this.speed += inc;
  },

  brake: function (dec) {
    this.speed -= dec;
  },

  status: function () {
    return this.brand + " running at " + this.speed + " km/h";
  },
};

// Instead of an object literal, define a class that creates a car,
//1) Add another property like model, so you can create a "Ford" with model "Mondeo". Make the status method display the model too.
//2) Fix the brake method so the car never reduces its speed below zero (a Car can't run at -50 km/h) even when you try to brake more than necessary.
//3) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.
//4) Add a method that returns a boolean saying if the car is running (speed is greater than zero) or not.

class Car {
  constructor(brand, speed, model) {
    this.brand = brand;
    this.speed = speed;
    this.model = model;
    this.motion = "Car is not moving";
  }

  static accelerate(amount) {
    this.speed += amount;
  }

  brake(amount) {
    if (amount >= this.speed) {
      this.speed = 0;
    } else {
      this.speed -= amount;
    }
  }

  status() {
    return `${this.brand}  running at  ${this.speed}  km/h ${this.checkMotion()}`;
  }
  emergency_brakes() {
    this.speed = 0;
  }

  checkMotion() {
    return this.speed > 0 ? (this.motion = "Car is moving") : (this.motion = "Car stopped");
  }
}

const Ford =  Car("Ford", 50, "Mondeo");

Ford.brake(40);
Ford.emergency_brakes();
console.log(Ford.status());


