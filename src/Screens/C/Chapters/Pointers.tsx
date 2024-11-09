import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CPointers = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Pointers</div>
        <div className="description">
          Pointers are one of the most powerful and complex features of the C programming language. They allow you to directly access and manipulate memory addresses, making them
          essential for certain tasks like dynamic memory allocation and creating complex data structures.
        </div>

        <div className="subHeader">Understanding Pointers</div>
        <div className="description">
          A pointer is a variable that stores the memory address of another variable. It is declared using the <b>*</b> symbol.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`int main() {
    int num = 10;
    int *ptr = &num; // Pointer to num

    printf("Value of num: %d\\n", num);           // Output: 10
    printf("Address of num: %p\\n", &num);        // Output: Address of num in memory
    printf("Pointer ptr points to: %p\\n", ptr);  // Output: Address stored in ptr
    printf("Value at ptr: %d\\n", *ptr);          // Output: 10 (dereferencing)

    return 0;
}`}</Code>

        <div className="subHeader">Pointer Declaration and Initialization</div>
        <ul className="list">
          <li>
            <b>Declaration</b>: <code>int *ptr;</code> declares a pointer to an integer.
          </li>
          <li>
            <b>Initialization</b>: A pointer must be initialized to a valid address before dereferencing (e.g., <code>int *ptr = &num;</code>).
          </li>
        </ul>

        <div className="subHeader">Dereferencing a Pointer</div>
        <div className="description">
          Dereferencing a pointer means accessing the value stored at the memory address it points to. This is done using the <b>*</b> operator.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`int num = 20;
int *ptr = &num;
printf("Value at ptr: %d\\n", *ptr); // Output: 20`}</Code>

        <div className="subHeader">Pointer Arithmetic</div>
        <div className="description">
          Pointer arithmetic allows you to navigate through an array using pointers. Adding or subtracting values to a pointer moves it by multiples of the size of the data type.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`int arr[3] = {10, 20, 30};
int *ptr = arr;

printf("First element: %d\\n", *ptr);     // Output: 10
ptr++;
printf("Second element: %d\\n", *ptr);    // Output: 20
ptr++;
printf("Third element: %d\\n", *ptr);     // Output: 30`}</Code>

        <div className="subHeader">Pointers and Arrays</div>
        <div className="description">An array name acts as a pointer to its first element, allowing arrays and pointers to be used interchangeably.</div>
        <Code language="c" style={materialDark} showLineNumbers>{`int arr[3] = {1, 2, 3};
int *ptr = arr;

printf("Value at ptr: %d\\n", *ptr);   // Output: 1
printf("Value at ptr + 1: %d\\n", *(ptr + 1)); // Output: 2`}</Code>

        <div className="subHeader">Null Pointers</div>
        <div className="description">A null pointer is a pointer that does not point to any valid memory location. It is used for error checking in pointer operations.</div>
        <Code language="c" style={materialDark} showLineNumbers>{`int *ptr = NULL;
if (ptr == NULL) {
    printf("Pointer is null\\n");
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            <b>Always initialize pointers</b> before use to avoid undefined behavior.
          </li>
          <li>
            <b>Check for null pointers</b> before dereferencing to prevent runtime errors.
          </li>
          <li>
            <b>Use pointers carefully</b>: Misuse can lead to memory corruption and segmentation faults.
          </li>
        </ul>

        <Bottom back="/c/arraysstrings" next="/c/filehandling" />
      </div>
    </div>
  );
};

export default CPointers;
