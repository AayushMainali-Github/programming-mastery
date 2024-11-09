import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Operators = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Basic Operators</div>
        <div className="description">
          Operators in Python are used to perform operations on variables and values. Python supports different types of operators including arithmetic, comparison, logical, and
          assignment operators.
        </div>

        <div className="subHeader">1. Arithmetic Operators</div>
        <div className="description">Arithmetic operators are used to perform mathematical operations like addition, subtraction, multiplication, and division.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Addition
x = 5 + 3  # 8

# Subtraction
y = 10 - 4  # 6

# Multiplication
z = 7 * 2  # 14

# Division
a = 15 / 3  # 5.0 (always returns a float)

# Floor Division
b = 17 // 3  # 5 (returns an integer)

# Modulus (remainder)
c = 17 % 3  # 2

# Exponentiation
d = 2 ** 3  # 8 (2 raised to the power of 3)`}</Code>

        <div className="subHeader">2. Comparison Operators</div>
        <div className="description">
          Comparison operators are used to compare two values and return <b>True</b> or <b>False</b>.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Equal to
print(5 == 5)  # True

# Not equal to
print(5 != 3)  # True

# Greater than
print(7 > 5)  # True

# Less than
print(3 < 5)  # True

# Greater than or equal to
print(6 >= 6)  # True

# Less than or equal to
print(4 <= 7)  # True`}</Code>

        <div className="subHeader">3. Logical Operators</div>
        <div className="description">Logical operators are used to combine conditional statements.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Logical AND
print(True and False)  # False

# Logical OR
print(True or False)  # True

# Logical NOT
print(not True)  # False`}</Code>

        <div className="subHeader">4. Assignment Operators</div>
        <div className="description">Assignment operators are used to assign values to variables.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`x = 5       # Assigns 5 to x
x += 3      # Equivalent to x = x + 3, so x = 8
x -= 2      # Equivalent to x = x - 2, so x = 6
x *= 4      # Equivalent to x = x * 4, so x = 24
x /= 6      # Equivalent to x = x / 6, so x = 4.0
x //= 2     # Equivalent to x = x // 2, so x = 2.0
x %= 2      # Equivalent to x = x % 2, so x = 0.0
x **= 3     # Equivalent to x = x ** 3, so x = 0.0`}</Code>

        <div className="subHeader">5. Bitwise Operators</div>
        <div className="description">Bitwise operators are used to perform operations at the bit level.</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Bitwise AND
print(5 & 3)  # 1 (binary: 0101 & 0011 = 0001)

# Bitwise OR
print(5 | 3)  # 7 (binary: 0101 | 0011 = 0111)

# Bitwise XOR
print(5 ^ 3)  # 6 (binary: 0101 ^ 0011 = 0110)

# Bitwise NOT
print(~5)     # -6 (binary: NOT 0101 = 1010, which is -6 in two's complement)

# Bitwise left shift
print(5 << 1)  # 10 (binary: 0101 << 1 = 1010)

# Bitwise right shift
print(5 >> 1)  # 2 (binary: 0101 >> 1 = 0010)`}</Code>

        <div className="subHeader">6. Membership Operators</div>
        <div className="description">Membership operators are used to check if a value is present in a sequence (e.g., strings, lists).</div>
        <Code language="python" style={materialDark} showLineNumbers>{`# 'in' operator
print('a' in 'apple')  # True

# 'not in' operator
print('b' not in 'apple')  # True`}</Code>

        <Bottom back="/python/inputoutput" next="/python/conditionalstatements" />
      </div>
    </div>
  );
};

export default Operators;
