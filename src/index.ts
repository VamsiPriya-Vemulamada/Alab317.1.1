// part 1 converted file to typescript
//@ts-check

// TypeScript adds types and visibility modifiers to JavaScript classes. so when we add the classes we have give the data types in the class and make them to use as an instaneous object with in constructor 
class Vehicle {
    public status : "started" | "stopped" = "stopped"; // taking a status to have return value as started or stopped and declared a default value as stopped over here
  public make;
  public model;
  public wheels;
  public errorcode: '404'| '200' = '200';
  
    constructor(make:string, model:string, wheels:number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
  }
  
  class Car extends Vehicle {
  //  seats: number;
    constructor(make: string, model:string)
     {
      super(make, model, 4);
      // this.seats = seats;
    }
  }
  
  class MotorCycle extends Vehicle {
    //numberofpeople: number;
    constructor(make: string, model:string) {
      super(make, model, 2);
      //this.numberofpeople = numberofpeople;
    }
  }
  
  function printStatus(vehicle: Vehicle) {
    // if (vehicle.status === "running") it is throwing error because running is not expected which means we have already setup the vehicle to either start or stopped. so we
    
    if (vehicle.status === "started")
    {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley.make.toUpperCase());
  
  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = myBuick.wheels - 1;
  console.log(myBuick.wheels);
  console.log(myBuick.model);
  
  // Ncycle
  class Ncycle <T> // meaning having the T or TYPE variables
  {
    public status : "started" | "stopped" = "stopped"; // taking a status to have return value as started or stopped and declared a default value as stopped over here
  public make;
  public model;
  public wheels;
  public errorcode: '404'| '200' = '200';
  
    constructor(make:T | T[] , model:T | T[], wheels:number) // Type T or array Type
    
    {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }

    print(index: number = 0): void // this means return void
    {
      // if this.make and this.model are both arrays
      if (Array.isArray(this.make) && Array.isArray(this.model)) {
        // if parameter index exist in this,ake and this.model
        if (this.make[index] && this.model[index]) {
          console.log(`This NCycle has a ${this.make} ${this.model} at ${index}`);
        }
      } else {
        console.log(`This is a ${this.make} ${this.model} NCycle`);
        // if (typeof this.make === 'string' && typeof this.model === 'string') {
        //   console.log(`This is a ${this.make} ${this.model} NCycle`);
        // } else {
        //   console.log(`This is a ${this.make} ${this.model} are not strings!`);
        // }
      }
    }
  
  
  }
  
  class NCycle<T> {
    public status: "stopped" | "started" = "stopped";
    public make;
    public model;
    public wheels;
  
    constructor(make: T | T[], model: T | T[], wheels: number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
  
    print(index: number = 0): void 
    {
      // if this.make and this.model are both arrays
      if (Array.isArray(this.make) && Array.isArray(this.model)) {
        // if parameter index exist in this,ake and this.model
        if (this.make[index] && this.model[index]) {
          console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}`);
        }
      } else {
        console.log(`This is a ${this.make} ${this.model} NCycle`);
        // if (typeof this.make === 'string' && typeof this.model === 'string') {
        //   console.log(`This is a ${this.make} ${this.model} NCycle`);
        // } else {
        //   console.log(`This is a ${this.make} ${this.model} are not strings!`);
        // }
      }
    }
  
    printAll(): void {
      if (Array.isArray(this.make) && Array.isArray(this.model)) {
        // if parameter index exist in this,ake and this.model
        
        for (let i = 0; i < Math.min(this.make.length, this.model.length); i ++){
          console.log(`This NCycle has a ${this.make[i]} ${this.model[i]}`);
        }
      }
    }
  
  }
  
  // const testCycle1 = new NCycle<number>(1, 2, 3);
  // testCycle1.print();
  
  // const testCycle2 = new NCycle<string>("Ford", "F150", 4);
  // testCycle2.print();
  
  // const testCycle3 = new NCycle<string>("Tesla", "Mode Y", 4);
  // testCycle3.print(4);
  
  const makes4 = ["Volkswagon", "Tesla", "Audi"];
  const models4 = ["Passat", "Model X", "A4"];