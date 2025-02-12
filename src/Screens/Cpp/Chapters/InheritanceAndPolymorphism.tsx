import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const InheritanceAndPolymorphism = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Inheritance and Polymorphism</div>
        <div className="description">
          Inheritance and polymorphism are central concepts in object-oriented programming in C++. Inheritance allows you to create new classes based on existing ones, promoting
          code reuse and a hierarchical class structure. Polymorphism enables dynamic behavior, where a base class pointer or reference can invoke derived class methods through
          virtual functions. This chapter covers the fundamentals of extending classes via inheritance and implementing dynamic polymorphism using virtual functions.
        </div>

        <div className="subHeader">Extending Classes through Inheritance</div>
        <div className="description">
          Inheritance allows you to derive a new class (child) from an existing class (base), inheriting its members while allowing the child class to add or override
          functionality. For example, consider a base class <code>Animal</code> and derived classes <code>Dog</code> and <code>Cat</code>:
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

// Base class
class Animal {
public:
    // Virtual function to allow dynamic polymorphism
    virtual void makeSound() const {
        cout << "Some generic animal sound." << endl;
    }
    // Virtual destructor ensures proper cleanup of derived objects
    virtual ~Animal() {}
};

// Derived class: Dog
class Dog : public Animal {
public:
    void makeSound() const override {
        cout << "Dog barks: Woof!" << endl;
    }
};

// Derived class: Cat
class Cat : public Animal {
public:
    void makeSound() const override {
        cout << "Cat meows: Meow!" << endl;
    }
};

int main() {
    Animal* animal1 = new Dog();
    Animal* animal2 = new Cat();

    // Polymorphic behavior: Calls the overridden function based on the actual object type
    animal1->makeSound(); // Output: Dog barks: Woof!
    animal2->makeSound(); // Output: Cat meows: Meow!

    // Clean up
    delete animal1;
    delete animal2;
    return 0;
}`}</Code>
        <div className="description">
          In this example, the <code>Animal</code> class defines a virtual function <code>makeSound()</code> and a virtual destructor. The <code>Dog</code> and <code>Cat</code>{" "}
          classes override this function, enabling dynamic polymorphism. When calling <code>makeSound()</code> on a base class pointer, the appropriate derived class function is
          executed.
        </div>

        <div className="subHeader">Using Virtual Functions for Dynamic Polymorphism</div>
        <div className="description">
          Virtual functions allow derived classes to provide specific implementations for functions declared in the base class. This is the essence of dynamic polymorphism, where
          the function call is resolved at runtime based on the actual object type. Ensure you declare your base class destructor as virtual to guarantee proper resource
          deallocation.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`// Demonstrating dynamic polymorphism with virtual functions
#include <iostream>
using namespace std;

class Shape {
public:
    virtual double getArea() const = 0; // Pure virtual function makes Shape an abstract class
    virtual ~Shape() {}
};

class Rectangle : public Shape {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    double getArea() const override {
        return width * height;
    }
};

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
    Shape* shapes[2];
    shapes[0] = new Rectangle(5.0, 3.0);
    shapes[1] = new Circle(4.0);

    for (int i = 0; i < 2; i++) {
        cout << "Area: " << shapes[i]->getArea() << endl;
        delete shapes[i];
    }

    return 0;
}`}</Code>
        <div className="description">
          This example uses an abstract class <code>Shape</code> with a pure virtual function <code>getArea()</code>. Derived classes <code>Rectangle</code> and <code>Circle</code>{" "}
          implement <code>getArea()</code>, and dynamic polymorphism is demonstrated by storing different shapes in a base class pointer array.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use inheritance to promote code reuse and organize related classes into a hierarchy.</li>
          <li>Declare base class functions as virtual to enable dynamic polymorphism and override them in derived classes.</li>
          <li>Always provide a virtual destructor in your base class to ensure proper cleanup of derived objects.</li>
          <li>Favor composition over inheritance when a "has-a" relationship is more appropriate than an "is-a" relationship.</li>
          <li>Keep your class interfaces simple and focused on specific responsibilities to enhance maintainability.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Inheritance allows you to derive new classes from existing ones, promoting code reuse and modularity.</li>
          <li>Dynamic polymorphism, achieved through virtual functions, enables runtime decision-making based on the actual object type.</li>
          <li>Virtual destructors are crucial for proper resource management in inheritance hierarchies.</li>
          <li>Understanding and applying OOP principles like inheritance and polymorphism is essential for building scalable and maintainable C++ applications.</li>
        </ul>

        <Bottom back="/cpp/constructors-destructors-and-overloading" next="/cpp/operator-overloading" />
      </div>
    </div>
  );
};

export default InheritanceAndPolymorphism;
