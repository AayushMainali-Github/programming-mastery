import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AdvancedJoins = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Advanced Joins</div>
        <div className="description">
          SQL joins allow data to be retrieved from multiple tables based on related columns. While basic joins like `INNER JOIN`, `LEFT JOIN`, and `RIGHT JOIN` are commonly used,
          advanced joins like `CROSS JOIN`, `SELF JOIN`, and `NATURAL JOIN` provide additional ways to manipulate and analyze data.
        </div>

        <div className="subHeader">Cross Join</div>
        <div className="description">
          A `CROSS JOIN` returns the Cartesian product of two tables, meaning each row from the first table is combined with every row from the second table. It is useful when you
          need to generate all possible combinations of two datasets.
        </div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT employees.first_name, departments.department_name
FROM employees
CROSS JOIN departments;`}</Code>
        <div className="description">This query generates a combination of every employee with every department, regardless of any existing relationships.</div>

        <div className="subHeader">Self Join</div>
        <div className="description">
          A `SELF JOIN` is a join where a table is joined with itself. It is useful when comparing rows within the same table, such as finding employees who report to the same
          manager.
        </div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT e1.first_name AS Employee, e2.first_name AS Manager
FROM employees e1
JOIN employees e2
ON e1.manager_id = e2.employee_id;`}</Code>
        <div className="description">This query retrieves a list of employees and their corresponding managers from the same table.</div>

        <div className="subHeader">Natural Join</div>
        <div className="description">
          A `NATURAL JOIN` automatically joins tables based on columns with the same name and compatible data types. It simplifies queries but should be used cautiously, as it
          assumes column names are the same in both tables.
        </div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT first_name, department_name
FROM employees
NATURAL JOIN departments;`}</Code>
        <div className="description">This query automatically joins `employees` and `departments` based on common column names.</div>

        <div className="subHeader">Difference Between Natural Join and Inner Join</div>
        <div className="description">
          Unlike an `INNER JOIN`, which explicitly defines the joining condition using `ON`, a `NATURAL JOIN` automatically determines the common columns.
        </div>
        <Code language="sql" style={materialDark} showLineNumbers>{`-- Inner Join (Explicit Condition)
SELECT employees.first_name, departments.department_name
FROM employees
INNER JOIN departments
ON employees.department_id = departments.department_id;`}</Code>
        <Code language="sql" style={materialDark} showLineNumbers>{`-- Natural Join (Implicit Condition)
SELECT first_name, department_name
FROM employees
NATURAL JOIN departments;`}</Code>

        <div className="subHeader">Advantages of Advanced Joins</div>
        <ul className="list">
          <li>
            <b>CROSS JOIN:</b> Useful for generating all possible combinations of two datasets.
          </li>
          <li>
            <b>SELF JOIN:</b> Helps compare rows within the same table, such as hierarchical relationships.
          </li>
          <li>
            <b>NATURAL JOIN:</b> Simplifies queries when tables share common column names.
          </li>
        </ul>

        <div className="subHeader">Limitations of Advanced Joins</div>
        <ul className="list">
          <li>
            <b>CROSS JOIN:</b> Can create large datasets and impact performance.
          </li>
          <li>
            <b>SELF JOIN:</b> Requires aliasing to differentiate table instances.
          </li>
          <li>
            <b>NATURAL JOIN:</b> May produce unexpected results if column names are unintentionally matched.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use `CROSS JOIN` carefully, as it generates large datasets.</li>
          <li>Ensure proper aliasing when using `SELF JOIN` to avoid confusion.</li>
          <li>Verify column names before using `NATURAL JOIN` to prevent accidental mismatches.</li>
          <li>Optimize joins with indexing to improve performance.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>`CROSS JOIN` creates a Cartesian product of two tables.</li>
          <li>`SELF JOIN` allows joining a table with itself for comparisons.</li>
          <li>`NATURAL JOIN` automatically matches common column names.</li>
          <li>Advanced joins provide flexible ways to manipulate and analyze relational data.</li>
        </ul>

        <Bottom back="/sql/error-handling" next="/sql/normalization" />
      </div>
    </div>
  );
};

export default AdvancedJoins;
