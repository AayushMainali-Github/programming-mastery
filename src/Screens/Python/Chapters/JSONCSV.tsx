import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const JSONCSV = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Working with JSON and CSV</div>
        <div className="description">
          JSON (JavaScript Object Notation) and CSV (Comma-Separated Values) are commonly used formats for storing and exchanging data. Python provides built-in libraries for
          working with both formats.
        </div>

        <div className="subHeader">Reading and Writing JSON</div>
        <div className="description">
          The <b>json</b> module in Python makes it easy to work with JSON data, allowing you to convert between JSON strings and Python objects.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`import json

# Writing JSON data to a file
data = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

with open("data.json", "w") as file:
    json.dump(data, file)

# Reading JSON data from a file
with open("data.json", "r") as file:
    loaded_data = json.load(file)
    print(loaded_data)  # Output: {'name': 'John', 'age': 30, 'city': 'New York'}

# Converting Python objects to JSON strings and vice versa
json_string = json.dumps(data)
print(json_string)  # Output: {"name": "John", "age": 30, "city": "New York"}

python_object = json.loads(json_string)
print(python_object)  # Output: {'name': 'John', 'age': 30, 'city': 'New York'}`}</Code>

        <div className="subHeader">Reading and Writing CSV</div>
        <div className="description">
          The <b>csv</b> module in Python allows you to read and write CSV files efficiently.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`import csv

# Writing to a CSV file
with open("data.csv", "w", newline="") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["Name", "Age", "City"])
    writer.writerow(["Alice", 28, "Los Angeles"])
    writer.writerow(["Bob", 34, "Chicago"])

# Reading from a CSV file
with open("data.csv", "r") as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        print(row)
# Output:
# ['Name', 'Age', 'City']
# ['Alice', '28', 'Los Angeles']
# ['Bob', '34', 'Chicago']`}</Code>

        <div className="subHeader">
          Using <b>DictReader</b> and <b>DictWriter</b>
        </div>
        <div className="description">
          The <b>csv.DictReader</b> and <b>csv.DictWriter</b> classes are useful for reading and writing CSV data as dictionaries.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Writing CSV data using DictWriter
with open("data_dict.csv", "w", newline="") as csvfile:
    fieldnames = ["Name", "Age", "City"]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()
    writer.writerow({"Name": "Charlie", "Age": 29, "City": "Boston"})
    writer.writerow({"Name": "Diana", "Age": 32, "City": "Houston"})

# Reading CSV data using DictReader
with open("data_dict.csv", "r") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        print(row)
# Output:
# {'Name': 'Charlie', 'Age': '29', 'City': 'Boston'}
# {'Name': 'Diana', 'Age': '32', 'City': 'Houston'}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Always handle file operations within a <b>with</b> statement to ensure the file is closed properly.
          </li>
          <li>
            Use <b>indent</b> in <b>json.dump()</b> for better readability of JSON files.
          </li>
          <li>
            Set <b>newline=""</b> when writing CSV files to prevent extra newline characters.
          </li>
        </ul>

        <Bottom back="/python/modulespackages" next="/python/customexceptions" />
      </div>
    </div>
  );
};

export default JSONCSV;
