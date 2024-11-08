import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Comments = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Comments</div>
        <div className="description">
          Remember the gray highlighted texts starting with // in the examples of previous chapter? Those are known as comments. Comments in JavaScript are an essential tool for
          developers to make their code more readable and maintainable. Comments are pieces of text that are ignored by the JavaScript engine, meaning they do not affect the
          execution of the code. They are used to explain the purpose of code segments, provide context, and leave notes for future reference. JavaScript supports both single-line
          and multi-line comments.
        </div>

        <div className="subHeader">Single Line Comments</div>
        <div className="description">
          Single-line comments begin with two forward slashes (//). Everything following // on that line is considered a comment and is ignored by the JavaScript engine.
          Single-line comments are useful for brief explanations or notes within the code.
        </div>
        <div className="subHeader">Multi Line Comments</div>
        <div className="description">
          Multi-line comments start with /* and end with */. Everything between these delimiters is considered a comment. Multi-line comments are useful for longer explanations,
          documentation, or temporarily disabling blocks of code.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
        // Single Line Comment

        /*
            Multi Line Comment
            Hello World!
            Code Sleep Repeat
        */
    </script>
</html>`}</Code>
        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            <b>Comment Purposefully</b>: Write comments that provide meaningful context and explanations. Avoid stating the obvious.
          </li>
          <li>
            <b>Keep Comments Updated</b>: Ensure comments reflect the current state of the code. Outdated comments can be misleading.
          </li>
          <li>
            <b>Use Comments for Documentation</b>: Describe the functionality of complex functions, parameters, return values, and any non-obvious logic.
          </li>
          <li>
            <b>Temporary Comments for Debugging</b>: Use comments to temporarily disable code for debugging purposes.
          </li>
        </ul>

        <Bottom back="/javascript/datatypes" next="/javascript/operators" />
      </div>
    </div>
  );
};

export default Comments;
