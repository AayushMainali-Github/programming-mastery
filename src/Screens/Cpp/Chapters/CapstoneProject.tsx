import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CapstoneProject = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Capstone Project</div>
        <div className="description">
          The capstone project is designed to integrate all the fundamental and advanced concepts you have learned throughout this C++ course. This hands-on project will help
          reinforce your skills by building a real-world application using modular design, object-oriented programming, file handling, multithreading, and debugging techniques.
        </div>

        <div className="subHeader">Project Overview</div>
        <div className="description">The capstone project will be a **Student Management System (SMS)** that allows users to:</div>
        <ul className="list">
          <li>Add, update, and delete student records.</li>
          <li>Search for students by ID, name, or course.</li>
          <li>Store and retrieve data using file handling.</li>
          <li>Utilize object-oriented programming (OOP) for modularity.</li>
          <li>Ensure data consistency using exception handling.</li>
          <li>Optimize performance using multithreading for sorting and searching.</li>
        </ul>

        <div className="subHeader">Project Structure</div>
        <div className="description">The project will follow a modular design with separate header and source files for different functionalities.</div>
        <Code language="plaintext" style={materialDark} showLineNumbers>{`StudentManagement/
│── main.cpp          // Entry point of the application
│── Student.h         // Header file for the Student class
│── Student.cpp       // Implementation file for the Student class
│── FileHandler.h     // Header file for file operations
│── FileHandler.cpp   // Implementation file for file handling
│── Utils.h           // Utility functions for sorting/searching
│── Utils.cpp         // Implementation of utility functions
│── students.txt      // Database file to store student records
`}</Code>

        <div className="subHeader">Step 1: Define the Student Class</div>
        <div className="description">
          The <code>Student</code> class will encapsulate student details and provide getter/setter methods.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`// File: Student.h
#ifndef STUDENT_H
#define STUDENT_H

#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    int id;
    string name;
    string course;
public:
    Student(int id, string name, string course);
    void display() const;
    string toString() const;
    int getId() const;
    string getName() const;
    string getCourse() const;
};

#endif // STUDENT_H`}</Code>

        <div className="subHeader">Step 2: Implement the Student Class</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`// File: Student.cpp
#include "Student.h"

Student::Student(int id, string name, string course) : id(id), name(name), course(course) {}

void Student::display() const {
    cout << "ID: " << id << ", Name: " << name << ", Course: " << course << endl;
}

string Student::toString() const {
    return to_string(id) + "," + name + "," + course;
}

int Student::getId() const { return id; }
string Student::getName() const { return name; }
string Student::getCourse() const { return course; }`}</Code>

        <div className="subHeader">Step 3: Implement File Handling</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`// File: FileHandler.h
#ifndef FILEHANDLER_H
#define FILEHANDLER_H

#include "Student.h"
#include <vector>
#include <fstream>

class FileHandler {
public:
    static void saveStudent(const Student &student);
    static vector<Student> loadStudents();
};

#endif // FILEHANDLER_H`}</Code>

        <Code language="cpp" style={materialDark} showLineNumbers>{`// File: FileHandler.cpp
#include "FileHandler.h"

void FileHandler::saveStudent(const Student &student) {
    ofstream file("students.txt", ios::app);
    if (file.is_open()) {
        file << student.toString() << endl;
        file.close();
    } else {
        cerr << "Error: Unable to open file." << endl;
    }
}

vector<Student> FileHandler::loadStudents() {
    vector<Student> students;
    ifstream file("students.txt");
    if (file.is_open()) {
        int id;
        string name, course;
        while (file >> id >> ws && getline(file, name, ',') && getline(file, course)) {
            students.push_back(Student(id, name, course));
        }
        file.close();
    }
    return students;
}`}</Code>

        <div className="subHeader">Step 4: Implement Search and Sort Using Multithreading</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`// File: Utils.h
#ifndef UTILS_H
#define UTILS_H

#include "Student.h"
#include <vector>

void sortStudents(vector<Student> &students);
Student searchStudent(const vector<Student> &students, int id);

#endif // UTILS_H`}</Code>

        <Code language="cpp" style={materialDark} showLineNumbers>{`// File: Utils.cpp
#include "Utils.h"
#include <algorithm>
#include <thread>

void sortStudents(vector<Student> &students) {
    sort(students.begin(), students.end(), [](const Student &a, const Student &b) {
        return a.getId() < b.getId();
    });
}

Student searchStudent(const vector<Student> &students, int id) {
    for (const auto &student : students) {
        if (student.getId() == id) {
            return student;
        }
    }
    throw runtime_error("Student not found!");
}`}</Code>

        <div className="subHeader">Step 5: Main Application Logic</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`// File: main.cpp
#include "Student.h"
#include "FileHandler.h"
#include "Utils.h"
#include <iostream>
#include <vector>
#include <thread>

using namespace std;

void displayMenu() {
    cout << "1. Add Student\\n2. View Students\\n3. Search Student\\n4. Exit\\nChoose an option: ";
}

int main() {
    vector<Student> students = FileHandler::loadStudents();
    
    while (true) {
        displayMenu();
        int choice;
        cin >> choice;

        if (choice == 1) {
            int id;
            string name, course;
            cout << "Enter ID: ";
            cin >> id;
            cin.ignore();
            cout << "Enter Name: ";
            getline(cin, name);
            cout << "Enter Course: ";
            getline(cin, course);

            Student student(id, name, course);
            FileHandler::saveStudent(student);
            students.push_back(student);
        } else if (choice == 2) {
            thread sortThread(sortStudents, ref(students));
            sortThread.join();
            for (const auto &s : students) s.display();
        } else if (choice == 3) {
            int id;
            cout << "Enter Student ID: ";
            cin >> id;
            try {
                Student found = searchStudent(students, id);
                found.display();
            } catch (const runtime_error &e) {
                cout << e.what() << endl;
            }
        } else {
            break;
        }
    }

    return 0;
}`}</Code>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>This capstone project integrates OOP, file handling, multithreading, and exception handling.</li>
          <li>Modularization improves maintainability, making code easier to debug and extend.</li>
          <li>Multithreading enhances performance by sorting records in the background.</li>
          <li>Exception handling ensures robustness, preventing crashes due to invalid input.</li>
        </ul>

        <Bottom back="/cpp/debugging-and-profiling" next="/cpp/conclusion" />
      </div>
    </div>
  );
};

export default CapstoneProject;
