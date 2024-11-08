import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Objects = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Objects</div>

        <div className="description">
          <b>Objects</b> in JavaScript are a fundamental data structure that allows you to store collections of data. Objects are used to group related data and functionality
          together in a single structure. In JavaScript, almost everything is an object, including arrays, functions, and even other objects.
        </div>

        <div className="subHeader">What is an Object?</div>
        <div className="description">
          An <b>object</b> is a collection of key-value pairs, where the keys (also known as properties) are strings (or symbols), and the values can be of any type, including
          functions. Here's a simple example:
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`// Creating a simple object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.firstName);
  }
};

// Accessing object properties
console.log(person.firstName); // Output: John

// Calling an object method
person.greet(); // Output: Hello, John
`}
        </Code>

        <div className="subHeader">Creating Objects</div>
        <div className="description">
          There are several ways to create objects in JavaScript:
          <ul className="list">
            <li>
              <b>Object literal</b>: The most common way to create an object is using the object literal syntax (as shown above).
            </li>
            <li>
              <b>Object constructor</b>: You can create objects using the built-in <b>Object()</b> constructor.
            </li>
            <li>
              <b>Object.create()</b>: This method allows you to create a new object based on a specified prototype object.
            </li>
          </ul>
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`// Using Object() constructor
const car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2020;

// Using Object.create()
const animal = {
  type: "Mammal",
  sound: function() {
    console.log("Generic sound");
  }
};

const dog = Object.create(animal);
dog.bark = function() {
  console.log("Woof!");
};

dog.sound(); // Output: Generic sound
dog.bark();  // Output: Woof!
`}
        </Code>

        <div className="subHeader">Accessing Object Properties</div>
        <div className="description">
          You can access object properties using either <b>dot notation</b> or <b>bracket notation</b>.
          <ul className="list">
            <li>
              <b>Dot notation</b>: Use dot notation to access properties with valid identifier names.
            </li>
            <li>
              <b>Bracket notation</b>: Use bracket notation for properties with special characters or spaces.
            </li>
          </ul>
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`// Using dot notation
console.log(car.brand); // Output: Toyota

// Using bracket notation
const key = "model";
console.log(car[key]);  // Output: Corolla
`}
        </Code>

        <div className="subHeader">Adding and Removing Properties</div>
        <div className="description">You can easily add new properties to an object or remove existing ones.</div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`// Adding a new property
car.color = "blue";

// Removing a property
delete car.year;
`}
        </Code>

        <div className="subHeader">Object Methods</div>
        <div className="description">
          In JavaScript, methods are functions that belong to objects. These methods can be used to manipulate and interact with the object. Here are some commonly used object
          methods:
        </div>

        <ul className="list">
          <li>
            <b>Object.keys(obj)</b>: Returns an array of the object's keys (property names).
          </li>
          <li>
            <b>Object.values(obj)</b>: Returns an array of the object's values.
          </li>
          <li>
            <b>Object.entries(obj)</b>: Returns an array of the object's key-value pairs as nested arrays.
          </li>
          <li>
            <b>Object.assign(target, ...sources)</b>: Copies all enumerable properties from one or more source objects to a target object.
          </li>
          <li>
            <b>Object.freeze(obj)</b>: Freezes an object, preventing any changes to its properties.
          </li>
          <li>
            <b>Object.seal(obj)</b>: Seals an object, allowing changes to existing properties but preventing new properties from being added.
          </li>
        </ul>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`const user = {
  name: "Alice",
  age: 25,
  job: "Developer"
};

// Getting keys
console.log(Object.keys(user)); // Output: ["name", "age", "job"]

// Getting values
console.log(Object.values(user)); // Output: ["Alice", 25, "Developer"]

// Getting entries
console.log(Object.entries(user)); // Output: [["name", "Alice"], ["age", 25], ["job", "Developer"]]

// Cloning an object with Object.assign
const clonedUser = Object.assign({}, user);
console.log(clonedUser); // Output: {name: "Alice", age: 25, job: "Developer"}

// Freezing an object
Object.freeze(user);
user.age = 30;  // Will not change
console.log(user.age); // Output: 25

// Sealing an object
Object.seal(clonedUser);
clonedUser.name = "Bob"; // Allowed
clonedUser.salary = 5000; // Not allowed, no new properties
console.log(clonedUser); // Output: {name: "Bob", age: 25, job: "Developer"}
`}
        </Code>

        <div className="subHeader">Looping through Object Properties</div>
        <div className="description">
          You can loop through the properties of an object using <b>for...in</b> loops or <b>Object.entries()</b>. This is useful for dynamically accessing all properties and their
          values.
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`// Using for...in loop
for (let key in user) {
  console.log(\`\${key}: \${user[key]}\`);
}
// Output:
// name: Alice
// age: 25
// job: Developer

// Using Object.entries
for (let [key, value] of Object.entries(user)) {
  console.log(\`\${key}: \${value}\`);
}
// Same output
`}
        </Code>

        <div className="subHeader">Comparing Objects</div>
        <div className="description">
          In JavaScript, two objects are only equal if they refer to the same instance. Even if two objects have identical properties, they are not considered equal.
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`const obj1 = { name: "John" };
const obj2 = { name: "John" };

console.log(obj1 === obj2); // Output: false
console.log(obj1 == obj2);  // Output: false

const obj3 = obj1;
console.log(obj1 === obj3); // Output: true
`}
        </Code>

        <div className="subHeader">Nested Objects</div>
        <div className="description">
          Objects can contain other objects as properties, creating a nested structure. To access nested properties, you can use a combination of dot notation and bracket notation.
        </div>

        <Code language="javascript" style={materialDark} showLineNumbers>
          {`// Creating a nested object
const company = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  }
};

// Accessing nested properties
console.log(company.address.city); // Output: New York

// Using bracket notation
const key = "zip";
console.log(company["address"][key]); // Output: 10001
`}
        </Code>

        <div className="subHeader">Conclusion</div>
        <div className="description">
          JavaScript objects are a powerful and flexible way to store data and functions. By understanding how to create, manipulate, and iterate over objects, you can build
          complex data structures that reflect the real-world entities in your applications.
        </div>

        <Bottom back="/javascript/arraymethods" next="/javascript/events" />
      </div>
    </div>
  );
};

export default Objects;
