import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MappedAndUtilityTypes = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Mapped Types and Utility Types</div>
        <div className="description">
          Mapped types in TypeScript provide a powerful way to transform existing types into new ones by iterating over properties. Utility types like <code>Partial</code>,{" "}
          <code>Readonly</code>, <code>Pick</code>, and <code>Omit</code> allow you to create flexible, reusable types. This chapter covers these built-in utilities and shows how
          you can even create custom mapped types for advanced scenarios.
        </div>

        <div className="subHeader">Partial</div>
        <div className="description">
          The <code>Partial</code> utility type makes all properties of a given type optional. This is useful when updating or creating objects where not all properties are
          required.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`interface User {
  id: number;
  name: string;
  email: string;
}

// Using Partial to allow updating only some properties
const updateUser = (user: Partial<User>) => {
  console.log("Updated user:", user);
};

updateUser({ name: "Alice" }); // Only name is updated`}</Code>

        <div className="subHeader">Readonly</div>
        <div className="description">
          The <code>Readonly</code> utility type makes all properties of a type immutable. Once a readonly array or object is created, its values cannot be modified.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`interface Config {
  apiUrl: string;
  port: number;
}

const config: Readonly<Config> = {
  apiUrl: "https://api.example.com",
  port: 3000,
};

// Trying to modify a readonly property results in a compile-time error
// config.port = 4000; // Error

console.log("Config:", config);`}</Code>

        <div className="subHeader">Pick</div>
        <div className="description">
          The <code>Pick</code> utility type creates a new type by selecting a subset of properties from an existing type. This is useful when you need only a few fields from a
          larger type.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
}

// Create a new type with only id and name
type EmployeeSummary = Pick<Employee, "id" | "name">;

const emp: EmployeeSummary = {
  id: 1,
  name: "John Doe"
};

console.log("Employee Summary:", emp);`}</Code>

        <div className="subHeader">Omit</div>
        <div className="description">
          The <code>Omit</code> utility type creates a new type by excluding specific properties from an existing type. This helps remove unwanted fields when you need a simplified
          version.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// Create a type that excludes the description
type ProductOverview = Omit<Product, "description">;

const product: ProductOverview = {
  id: 101,
  name: "Laptop",
  price: 1500
};

console.log("Product Overview:", product);`}</Code>

        <div className="subHeader">Custom Mapped Types</div>
        <div className="description">You can create custom mapped types to transform existing types. For example, the following utility type makes all properties nullable:</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

interface Order {
  orderId: number;
  product: string;
  quantity: number;
}

const nullableOrder: Nullable<Order> = {
  orderId: null,
  product: "Phone",
  quantity: 2,
};

console.log("Nullable Order:", nullableOrder);`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use <code>Partial</code> and <code>Readonly</code> to handle object updates and enforce immutability.
          </li>
          <li>
            Leverage <code>Pick</code> and <code>Omit</code> to simplify types when only a subset of properties is needed.
          </li>
          <li>Create custom mapped types for specialized transformations.</li>
          <li>Keep your type definitions organized and well-documented to enhance maintainability.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Mapped types allow you to transform existing types in a flexible manner.</li>
          <li>
            Utility types like <code>Partial</code>, <code>Readonly</code>, <code>Pick</code>, and <code>Omit</code> streamline type definitions.
          </li>
          <li>Custom mapped types can be created to meet specific project needs.</li>
          <li>Proper use of these types enhances type safety and code consistency across your application.</li>
        </ul>

        <Bottom back="/typescript/decorators" next="/typescript/type-guards-and-narrowing" />
      </div>
    </div>
  );
};

export default MappedAndUtilityTypes;
