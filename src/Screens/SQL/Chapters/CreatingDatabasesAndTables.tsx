import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CreateDatabasesAndTables = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Creating Databases and Tables</div>
        <div className="description">
          In SQL, the `CREATE` statement is used to create new databases and tables. This chapter covers the syntax and examples of creating databases and tables step-by-step.
        </div>

        <div className="subHeader">Creating a Database</div>
        <div className="description">Use the `CREATE DATABASE` statement to create a new database. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE DATABASE company;`}</Code>
        <div className="description">
          This creates a new database named <b>company</b>. You can verify the creation using:
        </div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SHOW DATABASES;`}</Code>

        <div className="subHeader">Switching to a Database</div>
        <div className="description">Use the `USE` statement to switch to a specific database before creating tables:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`USE company;`}</Code>

        <div className="subHeader">Creating a Table</div>
        <div className="description">Tables are created within a database using the `CREATE TABLE` statement. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE table_name (
  column1 data_type constraints,
  column2 data_type constraints,
  ...
);`}</Code>
        <div className="description">
          Example: Create an <b>employees</b> table:
        </div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50),
  hire_date DATE NOT NULL,
  salary DECIMAL(10, 2)
);`}</Code>
        <div className="description">
          This creates an <b>employees</b> table with the following columns:
        </div>
        <ul className="list">
          <li>
            <b>employee_id:</b> A unique identifier for each employee.
          </li>
          <li>
            <b>first_name:</b> Stores the first name (required).
          </li>
          <li>
            <b>last_name:</b> Stores the last name (optional).
          </li>
          <li>
            <b>hire_date:</b> Stores the hire date (required).
          </li>
          <li>
            <b>salary:</b> Stores the employee's salary with two decimal places.
          </li>
        </ul>

        <div className="subHeader">Adding Constraints</div>
        <div className="description">Constraints ensure data integrity. Common constraints include:</div>
        <ul className="list">
          <li>
            <b>PRIMARY KEY:</b> Ensures each row is uniquely identifiable.
          </li>
          <li>
            <b>NOT NULL:</b> Ensures a column cannot have `NULL` values.
          </li>
          <li>
            <b>UNIQUE:</b> Ensures all values in a column are distinct.
          </li>
          <li>
            <b>FOREIGN KEY:</b> Establishes a relationship with another table.
          </li>
          <li>
            <b>CHECK:</b> Ensures column values meet specific conditions.
          </li>
          <li>
            <b>DEFAULT:</b> Sets a default value for a column.
          </li>
        </ul>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE departments (
  department_id INT PRIMARY KEY,
  department_name VARCHAR(100) UNIQUE NOT NULL,
  manager_id INT,
  FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);`}</Code>
        <div className="description">
          This creates a <b>departments</b> table with a foreign key linking to the <b>employees</b> table.
        </div>

        <div className="subHeader">Viewing Table Structures</div>
        <div className="description">Use the `DESCRIBE` or `SHOW COLUMNS` statement to view the structure of a table:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DESCRIBE employees;`}</Code>
        <Code language="sql" style={materialDark} showLineNumbers>{`SHOW COLUMNS FROM departments;`}</Code>

        <div className="subHeader">Dropping Databases and Tables</div>
        <div className="description">Use the `DROP` statement to delete a database or table:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`-- Drop a table
DROP TABLE employees;

-- Drop a database
DROP DATABASE company;`}</Code>
        <div className="description">Be cautious when using `DROP` as it permanently deletes data and structures.</div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Always name databases and tables descriptively for clarity.</li>
          <li>Define appropriate data types and constraints to ensure data integrity.</li>
          <li>Plan the schema in advance to avoid frequent modifications.</li>
          <li>Use foreign keys to maintain relationships between tables.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>The `CREATE DATABASE` statement creates a new database.</li>
          <li>The `CREATE TABLE` statement defines the structure of a table within a database.</li>
          <li>Constraints like `PRIMARY KEY` and `FOREIGN KEY` ensure data integrity.</li>
          <li>Always review the schema using `DESCRIBE` or `SHOW COLUMNS`.</li>
        </ul>

        <Bottom back="/sql/data-types" next="/sql/inserting-data" />
      </div>
    </div>
  );
};

export default CreateDatabasesAndTables;
