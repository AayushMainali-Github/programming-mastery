import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const TypeScriptAndReact = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">TypeScript and React</div>
        <div className="description">
          TypeScript and React combine to provide a powerful development environment where type safety meets modern UI development. In this chapter, you'll learn how to build
          strongly-typed React components, define props and state interfaces, use React hooks with type safety, and integrate external libraries with proper type definitions.
        </div>

        <div className="subHeader">Creating a Functional Component</div>
        <div className="description">
          TypeScript allows you to define clear interfaces for your component's props. Here’s an example of a simple functional component that displays a greeting message.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`import React from "react";

interface GreetingProps {
  name: string;
  age?: number; // Optional prop
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};

export default Greeting;`}</Code>
        <div className="description">
          In this component, the <code>Greeting</code> interface enforces that the <code>name</code> prop is a required string while the <code>age</code> prop is optional.
        </div>

        <div className="subHeader">Using React Hooks with TypeScript</div>
        <div className="description">
          React hooks like <code>useState</code> and <code>useEffect</code> work seamlessly with TypeScript. The example below demonstrates a counter component with explicit type
          annotations.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`import React, { useState } from "react";

const Counter: React.FC = () => {
  // TypeScript infers that count is a number
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;`}</Code>
        <div className="description">
          In this component, <code>useState</code> is explicitly typed as <code>number</code>, ensuring that <code>count</code> is always numeric.
        </div>

        <div className="subHeader">Typing Event Handlers</div>
        <div className="description">Properly typing event handlers enhances code clarity. For instance, a button component can have its click event precisely typed.</div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`import React from "react";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const MyButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default MyButton;`}</Code>
        <div className="description">
          The <code>MyButton</code> component defines an <code>onClick</code> prop with a precise event type, ensuring type safety and improved autocompletion.
        </div>

        <div className="subHeader">Integrating External Libraries</div>
        <div className="description">
          TypeScript’s robust type system also extends to third-party libraries. Use declaration files from the <code>@types</code> repository to integrate libraries like React
          Router or Axios. For example, install type definitions for React Router:
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm install --save-dev @types/react-router-dom`}</Code>
        <div className="description">This ensures that you receive proper type checking and autocompletion when working with these libraries.</div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Define clear interfaces for component props and state to improve readability and maintainability.</li>
          <li>Use TypeScript’s type inference where appropriate to reduce redundancy.</li>
          <li>Explicitly type event handlers, hooks, and external library integrations to prevent runtime errors.</li>
          <li>
            Regularly update your <code>@types</code> packages to keep up with library changes.
          </li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>TypeScript enhances React development by enforcing strong typing on components, props, state, and events.</li>
          <li>Using interfaces and type annotations leads to more maintainable and error-resistant code.</li>
          <li>TypeScript integrates seamlessly with React hooks and external libraries through declaration files.</li>
          <li>Following best practices ensures a robust, scalable, and maintainable codebase in TypeScript and React projects.</li>
        </ul>

        <Bottom back="/typescript/working-with-third-party-libraries" next="/typescript/decorators" />
      </div>
    </div>
  );
};

export default TypeScriptAndReact;
