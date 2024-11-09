import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const OOP = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Object-Oriented Programming (OOP)</div>
        <div className="description">
          Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure code. It helps organize complex programs, making them more
          manageable and reusable.
        </div>

        <div className="subHeader">Classes and Objects</div>
        <div className="description">A class is a blueprint for creating objects (instances). An object is an instance of a class.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Defining a class
class Dog:
    def __init__(self, name, age):
        self.name = name  # Instance variable
        self.age = age    # Instance variable

    def bark(self):
        print(f"{self.name} says Woof!")

# Creating an object (instance of the class)
my_dog = Dog("Buddy", 5)
print(my_dog.name)  # Output: Buddy
print(my_dog.age)   # Output: 5

# Calling a method
my_dog.bark()       # Output: Buddy says Woof!`}</Code>

        <div className="subHeader">
          The <b>__init__()</b> Method
        </div>
        <div className="description">
          The <b>__init__()</b> method is a special method called a constructor that is automatically called when an object is created. It is used to initialize the attributes of
          the class.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Class with an __init__() method
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

my_car = Car("Toyota", "Corolla")
print(my_car.make)   # Output: Toyota
print(my_car.model)  # Output: Corolla`}</Code>

        <div className="subHeader">Instance Methods</div>
        <div className="description">
          Instance methods are functions defined within a class that operate on instances of the class. They typically use <b>self</b> as their first parameter.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Class with an instance method
class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14159 * (self.radius ** 2)

circle = Circle(5)
print(circle.area())  # Output: 78.53975`}</Code>

        <div className="subHeader">Class Variables</div>
        <div className="description">Class variables are shared among all instances of the class. They are defined within the class but outside any methods.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Class variable example
class Animal:
    species = "Mammal"  # Class variable

    def __init__(self, name):
        self.name = name  # Instance variable

dog = Animal("Dog")
cat = Animal("Cat")

print(dog.species)  # Output: Mammal
print(cat.species)  # Output: Mammal`}</Code>

        <div className="subHeader">Inheritance</div>
        <div className="description">Inheritance allows a class (child class) to inherit the attributes and methods of another class (parent class). This promotes code reuse.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Parent class
class Vehicle:
    def __init__(self, brand):
        self.brand = brand

    def start(self):
        print(f"{self.brand} vehicle starting...")

# Child class
class Car(Vehicle):
    def __init__(self, brand, model):
        super().__init__(brand)  # Call the parent class constructor
        self.model = model

    def start(self):
        super().start()  # Call the parent class method
        print(f"{self.model} car is now running.")

my_car = Car("Honda", "Civic")
my_car.start()
# Output:
# Honda vehicle starting...
# Civic car is now running.`}</Code>

        <div className="subHeader">Encapsulation</div>
        <div className="description">Encapsulation is the concept of bundling data and methods within a class and restricting direct access to some of an object's components.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private attribute

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def get_balance(self):
        return self.__balance

account = BankAccount(100)
account.deposit(50)
print(account.get_balance())  # Output: 150
# print(account.__balance)    # This will raise an AttributeError`}</Code>

        <div className="subHeader">Polymorphism</div>
        <div className="description">Polymorphism allows methods in different classes to have the same name but potentially different implementations.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`class Bird:
    def speak(self):
        print("Chirp")

class Dog:
    def speak(self):
        print("Bark")

# Polymorphism example
def make_sound(animal):
    animal.speak()

bird = Bird()
dog = Dog()

make_sound(bird)  # Output: Chirp
make_sound(dog)   # Output: Bark`}</Code>

        <Bottom back="/python/mathoperations" next="/python/inheritance" />
      </div>
    </div>
  );
};

export default OOP;
