import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DecoratorsInTypeScript = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Decorators in TypeScript</div>
        <div className="description">
          Decorators are an experimental feature in TypeScript that allow you to annotate and modify classes, methods, properties, and parameters at design time. They provide
          powerful mechanisms for adding metadata, performing dependency injection, logging, and more—all without changing the core logic of your code.
        </div>

        <div className="subHeader">What Are Decorators?</div>
        <div className="description">
          Decorators are functions that are applied to a class or a class member. They receive metadata about the target and can modify or enhance its behavior. Although still
          experimental, decorators are widely used in frameworks such as Angular for dependency injection and configuration.
        </div>

        <div className="subHeader">Class Decorators</div>
        <div className="description">
          A class decorator is applied to the constructor of the class. It can modify or replace the class definition. For example, a simple class decorator that seals a class to
          prevent further modification:
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`function Sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@Sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return \`Hello, \${this.greeting}!\`;
  }
}

const greeter = new Greeter("World");
console.log(greeter.greet()); // Output: Hello, World!`}</Code>

        <div className="subHeader">Method Decorators</div>
        <div className="description">
          Method decorators are applied to the property descriptor of a method. They are useful for logging, performance monitoring, or altering method behavior. Here’s an example
          of a logging decorator:
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Calling \${propertyKey} with arguments: \`, args);
    const result = originalMethod.apply(this, args);
    console.log(\`\${propertyKey} returned: \`, result);
    return result;
  };
  return descriptor;
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(5, 7); // Logs method call and result`}</Code>

        <div className="subHeader">Property Decorators</div>
        <div className="description">Property decorators modify the behavior of class properties. They are often used for adding metadata or enforcing immutability.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`function Readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false,
    configurable: false,
  });
}

class Example {
  @Readonly
  name: string = "Immutable Name";
}

const ex = new Example();
console.log(ex.name); // Output: Immutable Name
// ex.name = "New Name"; // Error: Cannot assign to 'name' because it is a read-only property`}</Code>

        <div className="subHeader">Parameter Decorators</div>
        <div className="description">
          Parameter decorators are applied to function parameters to add custom metadata. Although less common, they can be useful for dependency injection or logging.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`function LogParameter(target: Object, propertyKey: string, parameterIndex: number) {
  console.log(\`Parameter at index \${parameterIndex} in method \${propertyKey} has been decorated.\`);
}

class Service {
  greet(@LogParameter message: string): void {
    console.log(message);
  }
}

const service = new Service();
service.greet("Hello, decorators!");`}</Code>

        <div className="subHeader">Decorators for Dependency Injection</div>
        <div className="description">
          Decorators are widely used for dependency injection. For example, an <code>@Injectable</code> decorator can mark a class as available for injection in frameworks like
          Angular.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`function Injectable(constructor: Function) {
  // Register the class with a dependency injection container
  console.log(\`\${constructor.name} is now injectable.\`);
}

@Injectable
class Logger {
  log(message: string): void {
    console.log("Log:", message);
  }
}

const logger = new Logger();
logger.log("Dependency injection using decorators!");`}</Code>

        <div className="subHeader">Metadata Reflection with Decorators</div>
        <div className="description">
          By using the <code>reflect-metadata</code> library, you can add and retrieve metadata on classes and members. This is crucial for advanced dependency injection and
          runtime type checking.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`import "reflect-metadata";

function LogType(target: any, key: string) {
  const t = Reflect.getMetadata("design:type", target, key);
  console.log(\`\${key} type: \${t.name}\`);
}

class Person {
  @LogType
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("Alice");`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Keep decorator logic focused and simple to avoid complexity.</li>
          <li>Use decorators for cross-cutting concerns like logging, caching, and dependency injection.</li>
          <li>Document custom decorators thoroughly to aid maintainability.</li>
          <li>Be mindful of the experimental status of decorators and ensure proper testing before production use.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Decorators modify class behavior and add metadata without altering core logic.</li>
          <li>They can be applied to classes, methods, properties, and parameters.</li>
          <li>Decorators facilitate advanced features like dependency injection and runtime metadata reflection.</li>
          <li>Following best practices ensures that decorators improve code quality while maintaining simplicity.</li>
        </ul>

        <Bottom back="/typescript/modules-and-namespaces" next="/typescript/generics" />
      </div>
    </div>
  );
};

export default DecoratorsInTypeScript;
