import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Subqueries = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Subqueries</div>
        <div className="description">
          A subquery (also known as a nested query or inner query) is a query within another query. It is used to retrieve data that will be used by the main query. Subqueries help
          in performing complex data retrieval tasks.
        </div>

        <div className="subHeader">1. Basic Subquery</div>
        <div className="description">A subquery is enclosed within parentheses and executed before the main query. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table_name
WHERE column_name = (SELECT column_name FROM another_table WHERE condition);`}</Code>
        <div className="description">Example: Retrieve employees who have the highest salary:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, salary
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees);`}</Code>

        <div className="subHeader">2. Subqueries with WHERE</div>
        <div className="description">Subqueries are often used inside the `WHERE` clause to filter data dynamically. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name, department_id
FROM employees
WHERE department_id IN (SELECT department_id FROM departments WHERE department_name = 'Sales');`}</Code>
        <div className="description">This retrieves all employees working in the "Sales" department.</div>

        <div className="subHeader">3. Subqueries with SELECT</div>
        <div className="description">A subquery can also be used in the `SELECT` clause to retrieve additional information. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, last_name,
       (SELECT department_name FROM departments WHERE departments.department_id = employees.department_id) AS department
FROM employees;`}</Code>
        <div className="description">This retrieves employees along with their department names using a subquery.</div>

        <div className="subHeader">4. Subqueries with FROM (Derived Tables)</div>
        <div className="description">A subquery can be used inside the `FROM` clause, treating it as a temporary table. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT department_name, avg_salary
FROM (SELECT department_id, AVG(salary) AS avg_salary FROM employees GROUP BY department_id) AS dept_avg
JOIN departments ON dept_avg.department_id = departments.department_id;`}</Code>
        <div className="description">This calculates the average salary per department and retrieves department names from another table.</div>

        <div className="subHeader">5. Subqueries with EXISTS</div>
        <div className="description">The `EXISTS` operator checks whether a subquery returns any results. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT column1, column2, ...
FROM table_name
WHERE EXISTS (SELECT column_name FROM another_table WHERE condition);`}</Code>
        <div className="description">Example: Retrieve departments that have employees:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT department_name
FROM departments
WHERE EXISTS (SELECT 1 FROM employees WHERE employees.department_id = departments.department_id);`}</Code>

        <div className="subHeader">6. Subqueries with UPDATE</div>
        <div className="description">Subqueries can be used within `UPDATE` statements to modify data dynamically. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`UPDATE employees
SET salary = salary * 1.10
WHERE department_id = (SELECT department_id FROM departments WHERE department_name = 'HR');`}</Code>
        <div className="description">This increases the salary of all employees in the HR department by 10%.</div>

        <div className="subHeader">7. Subqueries with DELETE</div>
        <div className="description">Subqueries can also be used in `DELETE` statements to remove specific records. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DELETE FROM employees
WHERE department_id IN (SELECT department_id FROM departments WHERE department_name = 'Obsolete');`}</Code>
        <div className="description">This deletes all employees belonging to departments marked as "Obsolete."</div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use subqueries only when necessary; consider joins for performance efficiency.</li>
          <li>Ensure subqueries return a single value when used with `=` or `!=` conditions.</li>
          <li>Use `EXISTS` instead of `IN` for better performance on large datasets.</li>
          <li>When using subqueries inside the `FROM` clause, alias them properly for clarity.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Subqueries are queries nested inside another SQL query.</li>
          <li>They can be used with `WHERE`, `SELECT`, `FROM`, `EXISTS`, `UPDATE`, and `DELETE` statements.</li>
          <li>Subqueries provide flexibility in querying complex data but may impact performance.</li>
          <li>Optimizing subqueries by using indexes or rewriting them as joins improves efficiency.</li>
        </ul>

        <Bottom back="/sql/advanced-filtering" next="/sql/indexing" />
      </div>
    </div>
  );
};

export default Subqueries;
