import * as readlineSync from 'readline-sync';

class Area {
  circle(radius: number): number {
    return Math.PI * radius * radius;
  }

  square(length: number): number {
    return length * length;
  }

  rectangle(length: number, breadth: number): number {
    return length * breadth;
  }

  triangle(base: number, height: number): number {
    return 0.5 * base * height;
  }
}

class MyClass extends Area {
  public main() {
    console.log("Enter your choice");
    console.log("1. Circle");
    console.log("2. Square");
    console.log("3. Rectangle");
    console.log("4. Triangle");

    const choice = readlineSync.questionInt("Enter your choice: ");

    switch (choice) {
      case 1:
        this.circleHandler();
        break;
      case 2:
        this.squareHandler();
        break;
      case 3:
        this.rectangleHandler();
        break;
      case 4:
        this.triangleHandler();
        break;
      default:
        console.log("Invalid choice");
    }
  }

  private circleHandler() {
    const radius = readlineSync.questionFloat("Enter the radius: ");
    const area = this.circle(radius);
    console.log(`Area of the circle is: ${area.toFixed(2)}`);
  }

  private squareHandler() {
    const length = readlineSync.questionFloat("Enter the length: ");
    const area = this.square(length);
    console.log(`Area of the square is: ${area}`);
  }

  private rectangleHandler() {
    const length = readlineSync.questionFloat("Enter the length: ");
    const breadth = readlineSync.questionFloat("Enter the breadth: ");
    const area = this.rectangle(length, breadth);
    console.log(`Area of the rectangle is: ${area}`);
  }

  private triangleHandler() {
    const base = readlineSync.questionFloat("Enter the base: ");
    const height = readlineSync.questionFloat("Enter the height: ");
    const area = this.triangle(base, height);
    console.log(`Area of the triangle is: ${area}`);
  }
}

const myClassInstance = new MyClass();
myClassInstance.main();
