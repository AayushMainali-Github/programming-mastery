# Programming Mastery

## Overview
**Programming Mastery** is an educational platform designed to provide a comprehensive learning experience for programming enthusiasts. It covers multiple programming languages, focusing on both fundamental and intermediate topics, allowing learners to build a strong foundation and advance their skills. The platform features structured lessons, interactive content, and practical examples to guide learners at every step.

## Project Structure
Programming Mastery includes courses for popular programming languages, currently featuring:

- **JavaScript**: A full curriculum covering fundamental concepts such as variables, data types, and DOM manipulation, as well as intermediate topics like asynchronous programming, Promises, and working with APIs.
- **Python**: A complete guide that starts from the basics, like syntax and variables, and progresses to more advanced topics such as decorators, generators, and handling JSON and CSV files.
- **C**: A focused course covering essential C programming concepts, including syntax, file handling, pointers, and data structures.

Each course is divided into chapters with clear explanations, code examples, and best practices to reinforce learning.

## Features
- **Interactive Lessons**: Each chapter includes theoretical explanations, code snippets, and practical examples to facilitate a deeper understanding of the topic.
- **Modular Structure**: The platform is built with React components, making it easy to add new courses or chapters and customize content.
- **User-Friendly Navigation**: Learners can seamlessly navigate between courses and chapters, following a logical learning path or jumping directly to topics of interest.
- **Modern Design**: The project uses React and related technologies to provide a responsive, intuitive user interface.

## Project Structure in React
The project follows a structured organization for scalability:
- **Screens**: Contains individual folders for each course (e.g., `Javascript`, `Python`, `C`) with subfolders for each chapter.
- **Components**: Houses reusable UI components like `Item` and `Bottom` for consistent page layout and navigation.
- **App.js**: Configures `react-router-dom` routes to handle navigation across courses and chapters.
- **Assets**: Stores images and visual elements used throughout the courses.

## Courses and Chapters

### JavaScript Course
- **Fundamentals**: Covers topics such as Introduction, Variables, Data Types, Functions, Conditional Statements, Loops, Arrays, etc.
- **Intermediate**: Includes advanced topics like DOM Manipulation, CSS Manipulation, Asynchronous Programming, Promises, Fetch API, and more.

### Python Course
- **Fundamentals**: Topics include Introduction, Variables, Data Types, Operators, Input/Output, Loops, File Handling, etc.
- **Intermediate**: Covers OOP concepts, List Comprehensions, Decorators, External Libraries, Modules, and Handling JSON/CSV files.

### C Course
- **Fundamentals**: Focuses on essential topics such as Introduction, Environment Setup, Basic Syntax, Variables, Operators, Conditional Statements, Loops, Functions, Arrays and Strings, Pointers, and File Handling.
