import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Generators = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Generators</div>
        <div className="description">
          Generators are a type of iterable in Python that allow you to iterate over a sequence of values lazily, producing items one at a time and only as needed. They are defined
          using a function with the <b>yield</b> keyword.
        </div>

        <div className="subHeader">Basic Structure of a Generator</div>
        <div className="description">
          A generator function is defined like a normal function but uses <b>yield</b> to return a value and pause the function's state. The function can be resumed to produce the
          next value.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Basic generator function
def my_generator():
    yield 1
    yield 2
    yield 3

gen = my_generator()
print(next(gen))  # Output: 1
print(next(gen))  # Output: 2
print(next(gen))  # Output: 3

# Using a generator in a loop
for value in my_generator():
    print(value)
# Output:
# 1
# 2
# 3`}</Code>

        <div className="subHeader">Generator Expression</div>
        <div className="description">
          Generator expressions are similar to list comprehensions but use parentheses <b>()</b> instead of square brackets <b>[]</b>. They produce items lazily, which can save
          memory.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Generator expression
gen_exp = (x**2 for x in range(5))
print(next(gen_exp))  # Output: 0
print(next(gen_exp))  # Output: 1

# Using a generator expression in a loop
for num in gen_exp:
    print(num)
# Output:
# 4
# 9
# 16`}</Code>

        <div className="subHeader">Advantages of Generators</div>
        <div className="description">
          Generators are memory efficient because they yield items one at a time instead of storing them in memory. They are useful for handling large datasets or infinite
          sequences.
        </div>
        <ul className="list">
          <li>Generators only produce values as needed, reducing memory usage.</li>
          <li>They maintain their state between iterations, making them suitable for stateful operations.</li>
        </ul>

        <div className="subHeader">
          Using <b>yield</b> vs <b>return</b>
        </div>
        <div className="description">
          While <b>return</b> ends a function and sends a value back to the caller, <b>yield</b> pauses the function, saving its state for the next call.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using yield to produce values
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for number in countdown(5):
    print(number)
# Output:
# 5
# 4
# 3
# 2
# 1`}</Code>

        <div className="subHeader">Generator Methods</div>
        <div className="description">
          Generators have built-in methods like <b>send()</b> and <b>close()</b>. The <b>send()</b> method sends a value to the generator, while <b>close()</b> stops the generator.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Using send() in a generator
def my_generator():
    value = yield "Start"
    yield f"Received: {value}"

gen = my_generator()
print(next(gen))      # Output: Start
print(gen.send("Hello"))  # Output: Received: Hello

# Closing a generator
gen.close()`}</Code>

        <div className="subHeader">Creating Infinite Generators</div>
        <div className="description">
          Generators can be used to create infinite sequences. This is useful when working with data streams or when you need a continuous series of values.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Infinite generator example
def infinite_counter():
    n = 0
    while True:
        yield n
        n += 1

counter = infinite_counter()
print(next(counter))  # Output: 0
print(next(counter))  # Output: 1
print(next(counter))  # Output: 2`}</Code>

        <Bottom back="/python/decorators" next="/python/externallibraries" />
      </div>
    </div>
  );
};

export default Generators;
