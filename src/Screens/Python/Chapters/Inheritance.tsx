import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const InheritancePolymorphism = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Inheritance and Polymorphism</div>
        <div className="description">
          Inheritance and polymorphism are key concepts in Object-Oriented Programming (OOP). Inheritance allows one class to inherit attributes and methods from another class,
          while polymorphism allows methods in different classes to have the same name but different behavior.
        </div>

        <div className="subHeader">Inheritance</div>
        <div className="description">
          Inheritance enables you to create a new class based on an existing class. The new class (child) inherits the attributes and methods of the existing class (parent).
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound")

# Child class inheriting from Animal
class Dog(Animal):
    def speak(self):
        print(f"{self.name} barks")

# Another child class
class Cat(Animal):
    def speak(self):
        print(f"{self.name} meows")

dog = Dog("Rex")
cat = Cat("Whiskers")

dog.speak()  # Output: Rex barks
cat.speak()  # Output: Whiskers meows`}</Code>

        <div className="subHeader">
          The <b>super()</b> Function
        </div>
        <div className="description">
          The <b>super()</b> function allows you to call a method from the parent class, enabling you to extend or modify its behavior in the child class.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`class Vehicle:
    def __init__(self, brand):
        self.brand = brand

    def start(self):
        print(f"{self.brand} vehicle is starting...")

class Car(Vehicle):
    def __init__(self, brand, model):
        super().__init__(brand)  # Call the parent class constructor
        self.model = model

    def start(self):
        super().start()  # Call the parent class method
        print(f"{self.model} car is now running.")

my_car = Car("Toyota", "Camry")
my_car.start()
# Output:
# Toyota vehicle is starting...
# Camry car is now running.`}</Code>

        <div className="subHeader">Polymorphism</div>
        <div className="description">
          Polymorphism allows you to define methods in different classes with the same name but different behavior. This is useful when you want to call the same method on objects
          of different types.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`class Bird:
    def speak(self):
        print("Chirp")

class Dog:
    def speak(self):
        print("Bark")

# Function that accepts any object and calls the speak method
def make_sound(animal):
    animal.speak()

bird = Bird()
dog = Dog()

make_sound(bird)  # Output: Chirp
make_sound(dog)   # Output: Bark`}</Code>

        <div className="subHeader">Method Overriding</div>
        <div className="description">Method overriding occurs when a child class provides its own implementation of a method that is already defined in the parent class.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`class Parent:
    def show_message(self):
        print("This is the parent class.")

class Child(Parent):
    def show_message(self):
        print("This is the child class, overriding the parent method.")

child_instance = Child()
child_instance.show_message()  # Output: This is the child class, overriding the parent method.`}</Code>

        <div className="subHeader">
          The <b>isinstance()</b> Function
        </div>
        <div className="description">
          The <b>isinstance()</b> function checks whether an object is an instance of a specific class or a subclass thereof.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`dog = Dog("Rex")
print(isinstance(dog, Animal))  # Output: True
print(isinstance(dog, Dog))     # Output: True
print(isinstance(dog, Cat))     # Output: False`}</Code>

        <div className="subHeader">
          The <b>issubclass()</b> Function
        </div>
        <div className="description">
          The <b>issubclass()</b> function checks whether a class is a subclass of another class.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`print(issubclass(Dog, Animal))  # Output: True
print(issubclass(Cat, Animal))  # Output: True
print(issubclass(Animal, Dog))  # Output: False`}</Code>

        <Bottom back="/python/oop" next="/python/advancedfunctions" />
      </div>
    </div>
  );
};

export default InheritancePolymorphism;
