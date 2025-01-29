import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Views = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Views</div>
        <div className="description">
          A view is a virtual table that is based on the result of a SQL query. Views simplify data access by allowing users to retrieve data without directly querying the base
          tables.
        </div>

        <div className="subHeader">What is a View?</div>
        <div className="description">
          A view is a stored SQL query that behaves like a table but does not store data physically. It provides an abstraction layer over the database and is useful for security,
          simplification, and encapsulation.
        </div>

        <div className="subHeader">Creating a View</div>
        <div className="description">The `CREATE VIEW` statement is used to define a new view. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;`}</Code>
        <div className="description">Example: Create a view to display employee names and salaries:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE VIEW employee_salaries AS
SELECT first_name, last_name, salary
FROM employees;`}</Code>
        <div className="description">This creates a virtual table `employee_salaries` that can be queried like a normal table.</div>

        <div className="subHeader">Using a View</div>
        <div className="description">Querying a view is similar to querying a table. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT * FROM employee_salaries;`}</Code>

        <div className="subHeader">Updating a View</div>
        <div className="description">You can modify a view using the `CREATE OR REPLACE VIEW` statement. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE OR REPLACE VIEW view_name AS
SELECT column1, column2
FROM table_name
WHERE condition;`}</Code>
        <div className="description">Example: Update the `employee_salaries` view to include only employees earning above 50,000:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE OR REPLACE VIEW employee_salaries AS
SELECT first_name, last_name, salary
FROM employees
WHERE salary > 50000;`}</Code>

        <div className="subHeader">Deleting a View</div>
        <div className="description">A view can be deleted using the `DROP VIEW` statement. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DROP VIEW view_name;`}</Code>
        <div className="description">Example: Remove the `employee_salaries` view:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DROP VIEW employee_salaries;`}</Code>

        <div className="subHeader">Updating Data Through a View</div>
        <div className="description">If a view is based on a single table without aggregations or joins, it can be used to update the underlying table. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`UPDATE employee_salaries
SET salary = salary * 1.10
WHERE last_name = 'Smith';`}</Code>
        <div className="description">This increases `Smith`'s salary by 10% in the base table.</div>

        <div className="subHeader">Advantages of Views</div>
        <ul className="list">
          <li>
            <b>Security:</b> Restricts access to sensitive columns by exposing only necessary data.
          </li>
          <li>
            <b>Data Abstraction:</b> Simplifies complex queries by encapsulating them into a view.
          </li>
          <li>
            <b>Consistency:</b> Ensures a standardized way of retrieving data across applications.
          </li>
          <li>
            <b>Ease of Maintenance:</b> Simplifies modifications by updating views instead of changing multiple queries.
          </li>
        </ul>

        <div className="subHeader">Limitations of Views</div>
        <ul className="list">
          <li>
            <b>Performance Overhead:</b> Views do not store data, so queries may be slower for complex views.
          </li>
          <li>
            <b>Limited Updates:</b> Some views cannot be updated if they contain aggregations, joins, or subqueries.
          </li>
          <li>
            <b>Dependent Queries:</b> Changes to base tables may require updating views.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use views for frequently used queries to simplify data retrieval.</li>
          <li>Restrict columns in views to limit access to sensitive data.</li>
          <li>Avoid using complex joins in views to improve performance.</li>
          <li>Use indexed columns in views to enhance query efficiency.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Views act as virtual tables and simplify data access.</li>
          <li>The `CREATE VIEW` statement defines a view, and `DROP VIEW` removes it.</li>
          <li>Views can restrict access to specific data while maintaining security.</li>
          <li>While views improve query readability, they may impact performance for large datasets.</li>
        </ul>

        <Bottom back="/sql/indexing" next="/sql/transactions" />
      </div>
    </div>
  );
};

export default Views;
