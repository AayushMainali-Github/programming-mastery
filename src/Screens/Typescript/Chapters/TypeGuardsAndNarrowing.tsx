import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const TypeGuardsAndNarrowing = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Type Guards and Narrowing</div>
        <div className="description">
          TypeScript’s type guards allow you to narrow down union types to more specific types within conditional blocks. This chapter covers built-in type guards such as{" "}
          <code>typeof</code> and <code>instanceof</code>, as well as creating custom type guards for complex type checking. By leveraging these techniques, you can write more
          robust, type-safe code and catch potential errors at compile time.
        </div>

        <div className="subHeader">
          Using <code>typeof</code> for Primitive Types
        </div>
        <div className="description">
          The <code>typeof</code> operator is used to determine the type of a variable at runtime. It is especially useful for narrowing union types that consist of primitives such
          as <code>string</code> and <code>number</code>.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`function printValue(value: number | string): void {
  if (typeof value === "string") {
    console.log("String value: " + value.toUpperCase());
  } else {
    console.log("Number value: " + (value * 2));
  }
}

printValue("hello"); // Output: String value: HELLO
printValue(10);      // Output: Number value: 20`}</Code>

        <div className="subHeader">
          Using <code>instanceof</code> for Classes
        </div>
        <div className="description">
          The <code>instanceof</code> operator checks if an object is an instance of a specific class. This is useful when working with class hierarchies and can help narrow down
          the type of an object.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(this.name + " says: Woof!");
  }
}

function handleAnimal(animal: Animal): void {
  if (animal instanceof Dog) {
    // Within this block, TypeScript knows animal is a Dog.
    animal.bark();
  } else {
    console.log(animal.name + " is not a dog.");
  }
}

const myDog = new Dog("Buddy");
const myAnimal = new Animal("Mittens");

handleAnimal(myDog);     // Output: Buddy says: Woof!
handleAnimal(myAnimal);  // Output: Mittens is not a dog.`}</Code>

        <div className="subHeader">Creating Custom Type Guards</div>
        <div className="description">
          Custom type guards are functions that return a type predicate, allowing you to define complex conditions for type narrowing. They are especially useful when the standard{" "}
          <code>typeof</code> or <code>instanceof</code> checks are insufficient.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

// Custom type guard to determine if a pet is a Fish
function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getPetInfo(pet: Bird | Fish): void {
  if (isFish(pet)) {
    pet.swim();
    console.log("The pet is a fish.");
  } else {
    pet.fly();
    console.log("The pet is a bird.");
  }
}

// Example usage:
const bird: Bird = {
  fly() {
    console.log("Flying high!");
  },
  layEggs() {
    console.log("Laying eggs...");
  }
};

const fish: Fish = {
  swim() {
    console.log("Swimming in the sea!");
  },
  layEggs() {
    console.log("Laying eggs...");
  }
};

getPetInfo(bird); // Output: Flying high! / The pet is a bird.
getPetInfo(fish); // Output: Swimming in the sea! / The pet is a fish.`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use built-in type guards (<code>typeof</code> and <code>instanceof</code>) for simple type checks.
          </li>
          <li>Create custom type guards for more complex conditions where necessary.</li>
          <li>
            Always return a type predicate (e.g., <code>pet is Fish</code>) in custom type guard functions.
          </li>
          <li>Keep type guard logic simple and well-documented to maintain code clarity.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Type guards help narrow down union types to more specific types within conditional blocks.</li>
          <li>
            The <code>typeof</code> operator is ideal for checking primitive types.
          </li>
          <li>
            The <code>instanceof</code> operator is useful for verifying class instances.
          </li>
          <li>Custom type guards allow you to define complex type checks using type predicates.</li>
        </ul>

        <Bottom back="/typescript/generics-in-typescript" next="/typescript/enums-and-literal-types" />
      </div>
    </div>
  );
};

export default TypeGuardsAndNarrowing;
