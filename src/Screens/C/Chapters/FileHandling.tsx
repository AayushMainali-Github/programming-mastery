import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CFileHandling = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">File Handling</div>
        <div className="description">
          File handling in C enables programs to create, read, write, and modify files stored on the disk. It provides functions for working with files using the <b>stdio.h</b>{" "}
          library.
        </div>

        <div className="subHeader">Opening and Closing Files</div>
        <div className="description">
          Files in C are managed using <b>FILE</b> pointers. You open files with <b>fopen()</b> and close them with <b>fclose()</b>.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    FILE *filePtr;

    // Opening a file in write mode
    filePtr = fopen("example.txt", "w");
    if (filePtr == NULL) {
        printf("Error opening file\\n");
        return 1;
    }

    // Closing the file
    fclose(filePtr);
    printf("File opened and closed successfully\\n");

    return 0;
}`}</Code>

        <div className="subHeader">File Modes</div>
        <div className="description">Different modes specify how the file should be opened:</div>
        <ul className="list">
          <li>
            <b>"r"</b>: Open for reading. The file must exist.
          </li>
          <li>
            <b>"w"</b>: Open for writing. If the file exists, its contents are erased. If it doesn't exist, a new file is created.
          </li>
          <li>
            <b>"a"</b>: Open for appending. Data is added to the end of the file. If the file doesn't exist, it is created.
          </li>
          <li>
            <b>"r+"</b>: Open for reading and writing.
          </li>
          <li>
            <b>"w+"</b>: Open for reading and writing (overwrites existing content).
          </li>
          <li>
            <b>"a+"</b>: Open for reading and appending.
          </li>
        </ul>

        <div className="subHeader">Writing to a File</div>
        <div className="description">
          You can write to a file using the <b>fprintf()</b> or <b>fputs()</b> functions.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    FILE *filePtr = fopen("example.txt", "w");
    if (filePtr == NULL) {
        printf("Error opening file\\n");
        return 1;
    }

    // Writing to the file
    fprintf(filePtr, "Hello, World!\\n");
    fputs("This is a test line.\\n", filePtr);

    // Closing the file
    fclose(filePtr);
    printf("Data written to the file successfully\\n");

    return 0;
}`}</Code>

        <div className="subHeader">Reading from a File</div>
        <div className="description">
          You can read data from a file using <b>fscanf()</b> or <b>fgets()</b>.
        </div>
        <Code language="c" style={materialDark} showLineNumbers>{`#include <stdio.h>

int main() {
    FILE *filePtr = fopen("example.txt", "r");
    if (filePtr == NULL) {
        printf("Error opening file\\n");
        return 1;
    }

    char buffer[100];

    // Reading line by line using fgets
    while (fgets(buffer, 100, filePtr) != NULL) {
        printf("%s", buffer);
    }

    // Closing the file
    fclose(filePtr);

    return 0;
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            <b>Always check</b> if the file pointer is NULL to handle errors gracefully.
          </li>
          <li>
            <b>Close files</b> after operations to free up resources and avoid memory leaks.
          </li>
          <li>
            <b>Use buffers</b> carefully to read and write data efficiently.
          </li>
        </ul>

        <Bottom back="/c/pointers" next="/c" />
      </div>
    </div>
  );
};

export default CFileHandling;
