import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ConstraintsAndKeys = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Constraints and Keys</div>
        <div className="description">
          Constraints in SQL define rules that help maintain data integrity and consistency. Keys ensure unique identification of records. This chapter covers `PRIMARY KEY`,
          `FOREIGN KEY`, `UNIQUE`, and `CHECK` constraints.
        </div>

        <div className="subHeader">1. PRIMARY KEY</div>
        <div className="description">The `PRIMARY KEY` uniquely identifies each record in a table. It must contain unique, non-null values. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50)
);`}</Code>
        <div className="description">A primary key can also be defined after table creation:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`ALTER TABLE employees ADD PRIMARY KEY (employee_id);`}</Code>

        <div className="subHeader">2. FOREIGN KEY</div>
        <div className="description">A `FOREIGN KEY` enforces referential integrity by linking a column to a primary key in another table. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE departments (
  department_id INT PRIMARY KEY,
  department_name VARCHAR(100)
);

CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(department_id)
);`}</Code>
        <div className="description">This ensures that the `department_id` in `employees` must exist in the `departments` table.</div>
        <div className="description">A foreign key can also be added after table creation:</div>
        <Code
          language="sql"
          style={materialDark}
          showLineNumbers
        >{`ALTER TABLE employees ADD CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(department_id);`}</Code>

        <div className="subHeader">3. UNIQUE Constraint</div>
        <div className="description">The `UNIQUE` constraint ensures that values in a column remain distinct. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE users (
  user_id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE
);`}</Code>
        <div className="description">This ensures that no two users can have the same email.</div>
        <div className="description">A unique constraint can also be added after table creation:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);`}</Code>

        <div className="subHeader">4. CHECK Constraint</div>
        <div className="description">The `CHECK` constraint enforces conditions on column values. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  salary DECIMAL(10,2),
  CHECK (salary > 0)
);`}</Code>
        <div className="description">This ensures that `salary` cannot have a negative value.</div>
        <div className="description">A check constraint can also be added after table creation:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`ALTER TABLE employees ADD CONSTRAINT check_salary CHECK (salary > 0);`}</Code>

        <div className="subHeader">5. Composite Keys</div>
        <div className="description">A composite key is a primary key consisting of multiple columns. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE enrollments (
  student_id INT,
  course_id INT,
  enrollment_date DATE,
  PRIMARY KEY (student_id, course_id)
);`}</Code>
        <div className="description">This ensures that each student can enroll in a course only once.</div>

        <div className="subHeader">6. NOT NULL Constraint</div>
        <div className="description">The `NOT NULL` constraint ensures a column cannot store `NULL` values. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL
);`}</Code>
        <div className="description">This ensures that `first_name` and `last_name` must always have values.</div>

        <div className="subHeader">7. Default Values</div>
        <div className="description">The `DEFAULT` constraint assigns a default value to a column if no value is specified. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  hire_date DATE DEFAULT CURRENT_DATE
);`}</Code>
        <div className="description">If no hire date is provided, the system will use the current date.</div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Define `PRIMARY KEY` on unique, non-nullable columns.</li>
          <li>Use `FOREIGN KEY` to enforce referential integrity between tables.</li>
          <li>Apply `UNIQUE` constraints to ensure data uniqueness where necessary.</li>
          <li>Use `CHECK` constraints to enforce valid data entry.</li>
          <li>Ensure all required columns have `NOT NULL` constraints.</li>
          <li>Assign default values where applicable to maintain data consistency.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Constraints ensure data integrity and enforce business rules.</li>
          <li>`PRIMARY KEY` uniquely identifies each record.</li>
          <li>`FOREIGN KEY` maintains relationships between tables.</li>
          <li>`UNIQUE` prevents duplicate values in a column.</li>
          <li>`CHECK` enforces specific conditions on data.</li>
          <li>Other constraints like `NOT NULL` and `DEFAULT` ensure proper data management.</li>
        </ul>

        <Bottom back="/sql/aggregate-functions-grouping" next="/sql/indexing" />
      </div>
    </div>
  );
};

export default ConstraintsAndKeys;
