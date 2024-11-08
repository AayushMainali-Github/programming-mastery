import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const StringMethods = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">String Methods</div>
        <div className="description">
          Strings are one of the fundamental data types in JavaScript, representing sequences of characters used for text manipulation and processing. JavaScript provides a rich
          set of string methods that enable developers to perform a variety of operations, such as transforming text, searching for substrings, and formatting strings.
          Understanding these methods is crucial for effective text handling and manipulation in your applications. Here’s a detailed look at some of the most commonly used string
          methods in JavaScript.
        </div>
        <div className="subHeader">length</div>
        <div className="description">
          The length property of a string object returns the number of characters in the string, including spaces and punctuation. This property is useful for determining the size
          of the string and is often used in loops and conditionals to validate or manipulate string data.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "Hello, World!";
            console.log(text.length); // Output: 13
    </script>
</html>`}</Code>

        <div className="subHeader">toUpperCase()</div>
        <div className="description">
          The toUpperCase() method converts all characters in a string to uppercase. This transformation is useful when you need to standardize text for case-insensitive
          comparisons or formatting purposes. It does not modify the original string but returns a new string with all uppercase characters.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "javascript";
            let upperText = text.toUpperCase();
            console.log(upperText); // Output: "JAVASCRIPT"
    </script>
</html>`}</Code>
        <div className="subHeader">toLowerCase()</div>
        <div className="description">
          The toLowerCase() method converts all characters in a string to lowercase. This is often used to normalize text for case-insensitive comparisons or to format text
          uniformly. Like toUpperCase(), it returns a new string without changing the original one.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "JavaScript";
            let lowerText = text.toLowerCase();
            console.log(lowerText); // Output: "javascript"
    </script>
</html>`}</Code>
        <div className="subHeader">charAt()</div>
        <div className="description">
          The charAt() method returns the character at a specified index in a string. If the index is within the bounds of the string, it returns the character at that position;
          otherwise, it returns an empty string. This method is useful for accessing specific characters in a string.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "JavaScript";
            console.log(text.charAt(3)); // Output: "a"
    </script>
</html>`}</Code>
        <div className="subHeader">indexOf()</div>
        <div className="description">
          The indexOf() method searches for the first occurrence of a specified substring within the string and returns the index at which the substring begins. If the substring is
          not found, it returns -1. This method is case-sensitive and useful for locating substrings.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "Hello, World!";
            console.log(text.indexOf("World")); // Output: 7
            console.log(text.indexOf("world")); // Output: -1
    </script>
</html>`}</Code>
        <div className="subHeader">lastIndexOf()</div>
        <div className="description">
          The lastIndexOf() method returns the index of the last occurrence of a specified substring within the string. If the substring is not found, it returns -1. This method is
          useful for finding the last instance of a substring, especially when working with repeated patterns.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "Hello, World! World!";
            console.log(text.lastIndexOf("World")); // Output: 14
    </script>
</html>`}</Code>
        <div className="subHeader">slice()</div>
        <div className="description">
          The slice() method extracts a portion of a string from a specified start index to an end index (exclusive) and returns it as a new string. If the end index is not
          provided, it slices to the end of the string. This method allows for flexible string slicing and is useful for extracting substrings.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "JavaScript is fun!";
            let slicedText = text.slice(0, 10); // Extracts from index 0 to 9
            console.log(slicedText); // Output: "JavaScript"
    </script>
</html>`}</Code>
        <div className="subHeader">substring()</div>
        <div className="description">
          The substring() method extracts characters from a string between two specified indices and returns the substring. Unlike slice(), it does not handle negative indices. It
          is useful for extracting substrings based on index positions.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "JavaScript";
            let substringText = text.substring(4, 10); // Extracts from index 4 to 9
            console.log(substringText); // Output: "Script"
    </script>
</html>`}</Code>
        <div className="subHeader">replace()</div>
        <div className="description">
          The replace() method searches for a specified substring or regular expression and replaces it with a new substring. By default, it replaces only the first occurrence. For
          global replacements, you can use a regular expression with the g flag. We will learn what regular expression is in the upcoming chapters
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "Hello, World!";
            let replacedText = text.replace("World", "JavaScript");
            console.log(replacedText); // Output: "Hello, JavaScript!"
    </script>
</html>`}</Code>
        <div className="subHeader">includes()</div>
        <div className="description">
          The includes() method checks if a string contains a specified substring and returns true if the substring is found, otherwise false. It is useful for performing simple
          checks for the presence of a substring.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "JavaScript is fun!";
            console.log(text.includes("fun"));   // Output: true
            console.log(text.includes("boring")); // Output: false
    </script>
</html>`}</Code>
        <div className="subHeader">startsWith()</div>
        <div className="description">
          The startsWith() method checks if a string begins with a specified substring. It returns true if the string starts with the given substring and false otherwise. This
          method is useful for prefix checking.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "Hello, JavaScript!";
            console.log(text.startsWith("Hello")); // Output: true
            console.log(text.startsWith("Java"));  // Output: false
    </script>
</html>`}</Code>
        <div className="subHeader">endsWith()</div>
        <div className="description">
          The endsWith() method checks if a string ends with a specified substring. It returns true if the string ends with the given substring and false otherwise. This method is
          useful for suffix checking.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "Hello, JavaScript!";
            console.log(text.endsWith("!"));       // Output: true
            console.log(text.endsWith("Java"));    // Output: false
    </script>
</html>`}</Code>
        <div className="subHeader">trim()</div>
        <div className="description">
          The trim() method removes whitespace from both ends of a string. It is particularly useful for cleaning up user input or removing unnecessary spaces before and after the
          text.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "   JavaScript   ";
            console.log(text.trim());  // Output: "JavaScript"
    </script>
</html>`}</Code>
        <div className="subHeader">split()</div>
        <div className="description">
          The split() method divides a string into an array of substrings based on a specified delimiter. This method is useful for parsing strings into more manageable parts, such
          as splitting a CSV line into values. We will learn more about arrays in upcoming chapters.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "apple,banana,cherry";
            console.log(text.split(",")); // Output: ["apple", "banana", "cherry"]
    </script>
</html>`}</Code>
        <div className="subHeader">concat()</div>
        <div className="description">
          The concat() method joins two or more strings into a single string. This method does not modify the original strings but returns a new concatenated string. It is useful
          for combining multiple strings into one.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let str1 = "Hello";
            let str2 = "World";
            console.log(str1.concat(", ", str2, "!")); // Output: "Hello, World!"
    </script>
</html>`}</Code>
        <div className="subHeader">repeat()</div>
        <div className="description">
          The repeat() method creates a new string by repeating the original string a specified number of times. This method is useful for generating repeated patterns or strings.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "Hello, World!";
            console.log(text.length); // Output: 13
    </script>
</html>`}</Code>
        <div className="subHeader">padStart()</div>
        <div className="description">
          The padStart() method pads the current string with another string (repeated if necessary) until the resulting string reaches the specified length. The padding is added at
          the start of the original string, making it useful for formatting fixed-width fields.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "5";
            console.log(text.padStart(3, "0")); // Output: "005"
    </script>
</html>`}</Code>
        <div className="subHeader">padEnd()</div>
        <div className="description">
          The padEnd() method pads the current string with another string (repeated if necessary) until the resulting string reaches the specified length. The padding is added at
          the end of the original string, making it useful for aligning text.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let text = "5";
            console.log(text.padEnd(3, "0")); // Output: "500"
    </script>
</html>`}</Code>

        <Bottom back="/javascript/operators" next="/javascript/numbermethods" />
      </div>
    </div>
  );
};

export default StringMethods;
