import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CArraysStrings = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Arrays and Strings</div>
        <div className="description">
          Arrays and strings are used to store multiple values in C. Arrays are collections of elements of the same data type, and strings are arrays of characters terminated with
          a null character <b>'\\0'</b>.
        </div>

        <div className="subHeader">Declaring and Initializing Arrays</div>
        <div className="description">Arrays are declared using the following syntax:</div>
        <Code language="c" style={materialDark} showLineNumbers>{`// Declaration of an integer array
int numbers[5]; // Declares an array with 5 elements

// Initialization
int values[5] = {1, 2, 3, 4, 5}; // Initializes the array with 5 elements

// Declaration and initialization
int scores[] = {90, 85, 78, 92}; // Size is inferred from the number of elements`}</Code>

        <div className="subHeader">Accessing Array Elements</div>
        <div className="description">Array elements are accessed using their index, starting from 0.</div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    int values[3] = {10, 20, 30};

    // Accessing array elements
    printf("First element: %d\\n", values[0]); // Output: 10
    printf("Second element: %d\\n", values[1]); // Output: 20

    return 0;
}`}</Code>

        <div className="subHeader">Strings in C</div>
        <div className="description">
          Strings are arrays of characters terminated with a null character <b>'\\0'</b>. They can be declared using character arrays or string literals.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    // Declaration of a string
    char name[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};
    // Using a string literal
    char greeting[] = "Hello";

    // Printing strings
    printf("Name: %s\\n", name);       // Output: Name: Hello
    printf("Greeting: %s\\n", greeting); // Output: Greeting: Hello

    return 0;
}`}</Code>

        <div className="subHeader">Common Operations on Arrays</div>
        <ul className="list">
          <li>
            <b>Traversing</b>: Iterating through array elements using loops.
          </li>
          <li>
            <b>Modifying</b>: Changing the value of elements at specific indices.
          </li>
          <li>
            <b>Copying</b>: Copying elements from one array to another using loops or functions.
          </li>
        </ul>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};

    // Traversing and printing array elements
    for (int i = 0; i < 5; i++) {
        printf("Element at index %d: %d\\n", i, arr[i]);
    }

    return 0;
}`}</Code>

        <div className="subHeader">Common String Functions</div>
        <div className="description">
          C provides various functions in the <b>string.h</b> library for string manipulation:
        </div>
        <ul className="list">
          <li>
            <b>strlen()</b>: Returns the length of a string.
          </li>
          <li>
            <b>strcpy()</b>: Copies one string to another.
          </li>
          <li>
            <b>strcat()</b>: Concatenates two strings.
          </li>
          <li>
            <b>strcmp()</b>: Compares two strings.
          </li>
        </ul>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "Hello";
    char str2[20];

    // Copying str1 to str2
    strcpy(str2, str1);
    printf("Copied string: %s\\n", str2); // Output: Copied string: Hello

    // Concatenating strings
    strcat(str2, " World");
    printf("Concatenated string: %s\\n", str2); // Output: Concatenated string: Hello World

    return 0;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            <b>Ensure array bounds</b>: Always make sure you do not access elements beyond the declared size of an array.
          </li>
          <li>
            <b>
              Use <b>sizeof()</b> to get array size
            </b>
            : When working with arrays, use <b>sizeof()</b> to determine the size to avoid hard-coding.
          </li>
          <li>
            <b>
              Terminate strings with <b>'\\0'</b>
            </b>
            : Ensure strings are null-terminated to avoid undefined behavior.
          </li>
        </ul>

        <Bottom back="/c/functions" next="/c/pointers" />
      </div>
    </div>
  );
};

export default CArraysStrings;
