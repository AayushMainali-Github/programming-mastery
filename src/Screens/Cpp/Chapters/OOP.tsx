import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ObjectOrientedProgrammingCPP = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Object-Oriented Programming in C++</div>
        <div className="description">
          Object-oriented programming (OOP) in C++ allows you to model real-world entities using classes and objects. By using OOP principles such as encapsulation and abstraction,
          you can create modular, reusable, and maintainable code. This chapter explores the basics of building classes and objects, enforcing encapsulation to protect data, and
          achieving abstraction using abstract classes.
        </div>

        <div className="subHeader">Building Classes and Creating Objects</div>
        <div className="description">
          A class in C++ is a blueprint that defines the properties (data members) and behaviors (member functions) of an object. Once a class is defined, you can create objects
          (instances) of that class. Consider the following example of a simple <code>Person</code> class:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <string>
using namespace std;

// Definition of the Person class
class Person {
  private:
    string name;
    int age;
    
  public:
    // Constructor: Initializes a Person with a name and age
    Person(const string &name, int age) : name(name), age(age) {}
    
    // Getter for the name
    string getName() const {
      return name;
    }
    
    // Getter for the age
    int getAge() const {
      return age;
    }
    
    // Setter for the age with validation
    void setAge(int newAge) {
      if(newAge > 0) {
        age = newAge;
      }
    }
    
    // Function to display information about the person
    void display() const {
      cout << "Name: " << name << ", Age: " << age << endl;
    }
};

int main() {
  // Create a Person object
  Person alice("Alice Johnson", 30);
  
  // Use member functions to access and modify data
  alice.display();
  alice.setAge(32);
  alice.display();
  
  return 0;
}`}</Code>
        <div className="description">
          In this example, the <code>Person</code> class encapsulates the properties <code>name</code> and <code>age</code> as private members, ensuring that they can only be
          accessed or modified through public methods.
        </div>

        <div className="subHeader">Encapsulation</div>
        <div className="description">
          Encapsulation is the practice of bundling data and methods that operate on that data within a single unit, typically a class. It protects the internal state of an object
          by exposing only what is necessary. In our <code>Person</code> class, <code>name</code> and <code>age</code> are kept private to prevent unauthorized modification, and
          public methods like <code>getName()</code>, <code>getAge()</code>, and <code>setAge()</code> control access.
        </div>

        <div className="subHeader">Abstraction with Abstract Classes</div>
        <div className="description">
          Abstraction allows you to hide complex implementation details and expose only essential features. In C++, this is often achieved through abstract classes that contain
          pure virtual functions. An abstract class cannot be instantiated on its own; it serves as a blueprint for derived classes.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

// Abstract class representing a generic shape
class Shape {
  public:
    // Pure virtual function to compute the area of the shape
    virtual double getArea() const = 0;
    
    // Virtual destructor to allow proper cleanup of derived classes
    virtual ~Shape() {}
};

// Derived class for a Rectangle
class Rectangle : public Shape {
  private:
    double width;
    double height;
    
  public:
    Rectangle(double w, double h) : width(w), height(h) {}
    
    double getArea() const override {
      return width * height;
    }
};

// Derived class for a Circle
class Circle : public Shape {
  private:
    double radius;
    
  public:
    Circle(double r) : radius(r) {}
    
    double getArea() const override {
      return 3.14159 * radius * radius;
    }
};

int main() {
  // Creating objects of derived classes using pointers to the abstract class
  Shape* rect = new Rectangle(5.0, 3.0);
  Shape* circle = new Circle(4.0);
  
  cout << "Area of Rectangle: " << rect->getArea() << endl;
  cout << "Area of Circle: " << circle->getArea() << endl;
  
  // Clean up dynamically allocated objects
  delete rect;
  delete circle;
  
  return 0;
}`}</Code>
        <div className="description">
          In this example, <code>Shape</code> is an abstract class with a pure virtual function <code>getArea()</code>. The derived classes <code>Rectangle</code> and{" "}
          <code>Circle</code> implement this function, enabling polymorphic behavior.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Encapsulate data within classes to protect internal state and promote modular design.</li>
          <li>Use abstract classes to define common interfaces for related classes, ensuring consistent behavior.</li>
          <li>Keep class interfaces simple and focused on specific responsibilities.</li>
          <li>Prefer composition over inheritance when possible to enhance flexibility and reduce tight coupling.</li>
          <li>Document class interfaces and relationships to improve code maintainability.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>OOP in C++ is centered around classes and objects, which help model real-world entities.</li>
          <li>Encapsulation ensures that an object's internal state is protected from external modification.</li>
          <li>Abstraction, achieved through abstract classes, allows you to define generic interfaces and hide complex details.</li>
          <li>Understanding these OOP principles is essential for building scalable, maintainable, and robust C++ applications.</li>
        </ul>

        <Bottom back="/cpp/basic-error-handling" next="/cpp/constructors-destructors-and-overloading" />
      </div>
    </div>
  );
};

export default ObjectOrientedProgrammingCPP;
