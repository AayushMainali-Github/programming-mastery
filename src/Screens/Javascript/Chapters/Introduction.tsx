import React from "react";
import JS from "../../../Assets/Javascript/Introduction/js.png";
import { Link } from "react-router-dom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Bottom from "../../../Components/Bottom";

const Introduction = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Introduction</div>
        <div className="description">
          JavaScript is a high-level, dynamic programming language that is widely used to create interactive effects within web browsers. Initially developed by Netscape in the
          mid-1990s, JavaScript has become one of the core technologies of the World Wide Web, alongside HTML and CSS. It allows developers to create dynamically updating content,
          control multimedia, animate images, and pretty much everything else. There are libraries and frameworks built on top of JavaScript, like React, Angular, and Vue.js, which
          further simplify the development process.
        </div>
        <div className="subHeader">Why Learn Javascript?</div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 50 }}>
          <ul className="list">
            <li>
              <b>Web Development Necessity</b>: JavaScript is essential for web development as it is the only programming language that can run natively in web browsers. This makes
              it indispensable for creating interactive and dynamic web pages.
            </li>
            <li>
              <b>Versatility</b>: With Node.js, JavaScript is not limited to front-end development but can also be used for back-end development, allowing developers to use the
              same language for both client-side and server-side programming.
            </li>
            <li>
              <b>Career Opportunities</b>: JavaScript is one of the most in-demand programming languages in the job market, with numerous opportunities for front-end, back-end, and
              full-stack development roles.
            </li>
          </ul>
          <img className="imgI" style={{ width: 250, height: 250 }} src={JS} alt="Javascript" />
        </div>
        <div className="subHeader">How to start?</div>
        <div className="description">
          Download{" "}
          <Link className="link" to="https://code.visualstudio.com/">
            Visual Studio Code
          </Link>{" "}
          and install{" "}
          <Link className="link" to="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">
            Live Server
          </Link>{" "}
          plugin. Create a file called "index.html" and paste the following code. Click on the "Go Live" button on the bottom right corner and you are all set to go. Write all the
          necessary javascript code inside the {`<script>`} tag. The following code basically calculates the sum of first 10 natural numbers and displays it. We will learn about
          everything included in the following code in the upcoming chapters. You could also write the javascript code in a different file and import it in the "index.html" using{" "}
          {`<script src="filename.js" />`} In this course we would be writing both javascript and html on the same file.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
        <div id="result"></div>
    </body>
    <script>
        let sum = 0;
        for (let i = 1; i <= 10; i++) sum += i;
        document.getElementById("result").innerText = sum;
    </script>
</html>`}</Code>
        <div className="subHeader">Key Features of JavaScript</div>
        <ul className="list">
          <li>
            <b>Versatility and Flexibility</b>: Supports both object-oriented and functional programming paradigms, offering flexibility in coding style.
          </li>
          <li>
            <b>Rich Ecosystem</b>: A vast array of libraries and frameworks, such as React, Angular, and Vue.js, that enhance development efficiency.
          </li>
          <li>
            <b>Asynchronous Programming</b>: Allows for non-blocking operations, making it ideal for tasks involving I/O operations, such as fetching data from APIs or reading
            files.
          </li>
          <li>
            <b>Large Community</b>: A large and active community providing abundant resources, tutorials, and forums, which helps learners find support and stay updated with
            industry trends.
          </li>
          <li>
            <b>Browser Compatibility</b>: Runs on all major web browsers, ensuring that applications reach a wide audience without compatibility issues.
          </li>
        </ul>
        <Bottom back="/javascript/" next="/javascript/variables" />
      </div>
    </div>
  );
};

export default Introduction;
