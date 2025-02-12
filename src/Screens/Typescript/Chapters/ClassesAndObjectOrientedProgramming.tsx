import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ClassesAndOOP = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Classes and Object-Oriented Programming</div>
        <div className="description">
          TypeScript enhances JavaScript with robust object-oriented programming (OOP) features. In this chapter, we'll explore how to implement classes, constructors, access
          modifiers, inheritance, and interfaces in TypeScript to build scalable and maintainable applications.
        </div>

        <div className="subHeader">Implementing Classes in TypeScript</div>
        <div className="description">
          Classes encapsulate data and behavior into a single entity. Below is an example of a basic class with a constructor, properties, and methods.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`class Person {
  public name: string;
  private age: number;
  protected gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public greet(): string {
    return \`Hello, my name is \${this.name}.\`;
  }

  // Private method: can only be called within the class
  private getAge(): number {
    return this.age;
  }

  // Protected method: accessible within the class and its subclasses
  protected getGender(): string {
    return this.gender;
  }
}

const person = new Person("John Doe", 28, "Male");
console.log(person.greet()); // Output: Hello, my name is John Doe.`}</Code>

        <div className="subHeader">Access Modifiers</div>
        <div className="description">
          TypeScript supports three access modifiers:
          <ul className="list">
            <li>
              <b>public</b>: Members are accessible anywhere (default).
            </li>
            <li>
              <b>private</b>: Members are accessible only within the class.
            </li>
            <li>
              <b>protected</b>: Members are accessible within the class and its subclasses.
            </li>
          </ul>
          In the example above, <code>age</code> is private and <code>gender</code> is protected, ensuring that these values cannot be accessed directly outside the class or its
          hierarchy.
        </div>

        <div className="subHeader">Inheritance</div>
        <div className="description">
          Inheritance allows a new class to reuse, extend, and modify the behavior defined in another class. The <code>extends</code> keyword is used to establish a parent-child
          relationship.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`class Employee extends Person {
  public employeeId: number;

  constructor(name: string, age: number, gender: string, employeeId: number) {
    super(name, age, gender);
    this.employeeId = employeeId;
  }

  public getDetails(): string {
    // Accessing protected method from the parent class
    return \`\${this.greet()} My employee ID is \${this.employeeId}.\`;
  }
}

const employee = new Employee("Alice", 32, "Female", 101);
console.log(employee.getDetails()); // Output: Hello, my name is Alice. My employee ID is 101.`}</Code>

        <div className="subHeader">Implementing Interfaces with Classes</div>
        <div className="description">Interfaces define contracts for objects, and classes can implement interfaces to ensure they adhere to a specific structure.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`interface IWorker {
  work(): void;
}

class Developer extends Employee implements IWorker {
  public work(): void {
    console.log(\`\${this.name} is coding.\`);
  }
}

const developer = new Developer("Bob", 29, "Male", 102);
developer.work(); // Output: Bob is coding.`}</Code>

        <div className="subHeader">Advanced Class Features</div>
        <div className="description">
          TypeScript classes support advanced features such as getters/setters, static properties, and abstract classes. These features allow you to manage internal state and
          enforce structure.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  // Getter for area
  get area(): number {
    return this._width * this._height;
  }

  // Setter for width with validation
  set width(value: number) {
    if (value > 0) {
      this._width = value;
    }
  }

  // Static method
  static description(): string {
    return "Rectangle class calculates area based on width and height.";
  }
}

const rect = new Rectangle(5, 10);
console.log("Area:", rect.area); // Output: Area: 50
console.log(Rectangle.description());`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use access modifiers to encapsulate class internals.</li>
          <li>Leverage inheritance and interfaces to promote code reuse and consistency.</li>
          <li>Implement advanced features like getters/setters only when necessary.</li>
          <li>Keep class logic focused and modular to ensure maintainability.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Classes in TypeScript offer robust support for OOP concepts, including constructors, access modifiers, inheritance, and interfaces.</li>
          <li>Access modifiers control the visibility of class members, promoting encapsulation.</li>
          <li>Inheritance allows you to extend existing classes to create specialized versions.</li>
          <li>Interfaces enforce a consistent structure, ensuring that classes meet defined contracts.</li>
          <li>Advanced class features, such as getters/setters and static methods, further enhance the capabilities of your classes.</li>
        </ul>

        <Bottom back="/typescript/enums-and-literal-types" next="/typescript/generics" />
      </div>
    </div>
  );
};

export default ClassesAndOOP;
