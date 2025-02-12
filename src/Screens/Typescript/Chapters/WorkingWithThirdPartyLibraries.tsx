import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ThirdPartyLibraries = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Working with Third-Party Libraries</div>
        <div className="description">
          Integrating third-party JavaScript libraries into a TypeScript project requires additional type information. This is usually achieved through declaration files (commonly
          available as @types packages) or custom declaration files. In this chapter, we’ll explore how to install and use declaration files, integrate libraries with full type
          support, and create custom declarations when necessary.
        </div>

        <div className="subHeader">Introduction to Declaration Files</div>
        <div className="description">
          Declaration files (with a .d.ts extension) provide TypeScript with type information for existing JavaScript libraries. They allow TypeScript to type-check the code that
          uses these libraries, ensuring safer and more reliable integration.
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Example: Installing type definitions for jQuery
npm install --save-dev @types/jquery`}</Code>
        <div className="description">Many popular libraries already have corresponding declaration files available via npm.</div>

        <div className="subHeader">Integrating TypeScript with JavaScript Libraries</div>
        <div className="description">
          Once the declaration files are installed, you can import and use the library with full type support. For example, here’s how you might use lodash:
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// Import lodash with full type support (make sure @types/lodash is installed)
import _ from "lodash";

const numbers: number[] = [1, 2, 3, 4, 5];
const doubled = _.map(numbers, num => num * 2);
console.log("Doubled Numbers:", doubled);`}</Code>
        <div className="description">With the type definitions in place, TypeScript provides autocompletion and type checking for lodash functions.</div>

        <div className="subHeader">Handling Libraries Without Type Definitions</div>
        <div className="description">
          Sometimes a library might not have published type definitions. In these cases, you can create a custom declaration file or use the <code>declare module</code> syntax to
          temporarily treat the library as having the <code>any</code> type.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// If a module "some-js-lib" doesn't have type definitions, create a custom declaration:
declare module "some-js-lib" {
  const content: any;
  export default content;
}

// Now you can import and use it without TypeScript errors:
import someJsLib from "some-js-lib";
someJsLib();`}</Code>
        <div className="description">This approach allows you to integrate the library quickly, but it's recommended to create detailed declarations when possible.</div>

        <div className="subHeader">Creating Custom Declaration Files</div>
        <div className="description">
          You can create custom declaration files (e.g., <code>some-js-lib.d.ts</code>) in your project to provide minimal type definitions for libraries that lack them.
        </div>
        <Code language="typescript" style={materialDark} showLineNumbers>{`// File: some-js-lib.d.ts
declare module "some-js-lib" {
  export function doSomething(param: string): void;
}

// In your TypeScript file:
import { doSomething } from "some-js-lib";
doSomething("test");`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always search for existing @types packages before writing custom declaration files.</li>
          <li>Keep custom declarations minimal and document them well.</li>
          <li>
            Avoid using the <code>any</code> type extensively to maintain type safety.
          </li>
          <li>Regularly update your type definitions to match updates in the underlying libraries.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Declaration files enable TypeScript to understand and type-check JavaScript libraries.</li>
          <li>Use @types packages for popular libraries, and create custom declaration files when necessary.</li>
          <li>Integrating third-party libraries with proper type definitions enhances code reliability and developer experience.</li>
          <li>Following best practices helps maintain a robust and type-safe codebase.</li>
        </ul>

        <Bottom back="/typescript/handling-asynchronous-code" next="/typescript/working-with-react" />
      </div>
    </div>
  );
};

export default ThirdPartyLibraries;
