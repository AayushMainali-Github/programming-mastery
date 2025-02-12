import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const EnumsAndLiteralTypes = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Enums and Literal Types</div>
        <div className="description">
          Enums and literal types in TypeScript allow you to define a set of fixed values and enforce strict type checking on variables. They help improve code readability and
          maintainability by ensuring that only predetermined values are used.
        </div>

        <div className="subHeader">Enums in TypeScript</div>
        <div className="description">
          Enums provide a way to define a set of named constants. TypeScript supports both numeric and string enums, which improve code clarity by replacing magic numbers or
          strings with descriptive names.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Numeric Enum Example
enum Direction {
  North,
  East,
  South,
  West
}

console.log(Direction.North); // Output: 0
console.log(Direction[2]);    // Output: South

// String Enum Example
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING"
}

console.log(Status.Active); // Output: ACTIVE`}</Code>

        <div className="subHeader">Literal Types in TypeScript</div>
        <div className="description">Literal types allow you to specify exact values a variable can hold, thereby limiting the possible values and improving type safety.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Using literal types to define a restricted set of string values
type CardinalDirection = "North" | "East" | "South" | "West";

function move(direction: CardinalDirection): void {
  console.log(\`Moving \${direction}\`);
}

move("North"); // Valid
// move("Up"); // Error: "Up" is not assignable to type 'CardinalDirection'.`}</Code>

        <div className="subHeader">Combining Enums and Literal Types</div>
        <div className="description">
          You can combine enums and literal types to enforce strict constraints. This is useful when a function needs to accept a value from an enum along with additional literal
          values.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED"
}

type ValidStatus = OrderStatus | "RETURNED";

function updateOrderStatus(status: ValidStatus): void {
  console.log(\`Order status updated to: \${status}\`);
}

updateOrderStatus(OrderStatus.Shipped); // Valid
updateOrderStatus("RETURNED");           // Valid
// updateOrderStatus("IN_TRANSIT");       // Error: "IN_TRANSIT" is not assignable to type 'ValidStatus'.`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use enums when you have a fixed set of related constants for better code clarity.</li>
          <li>Prefer string enums over numeric enums when readability is important.</li>
          <li>Utilize literal types to strictly enforce allowed values.</li>
          <li>Combine enums and literal types to enhance function parameter constraints and overall type safety.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Enums enable you to define a set of named constants, improving code clarity.</li>
          <li>Literal types restrict variables to specific values, reducing runtime errors.</li>
          <li>Using enums and literal types together enhances type safety and makes your code more robust.</li>
        </ul>

        <Bottom back="/typescript/union-and-intersection-types" next="/typescript/classes-and-oop" />
      </div>
    </div>
  );
};

export default EnumsAndLiteralTypes;
