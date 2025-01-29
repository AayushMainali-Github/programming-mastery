import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const PerformanceOptimization = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Performance Optimization</div>
        <div className="description">
          Optimizing SQL queries and databases is essential for improving performance and efficiency. Query tuning, execution plans, and indexing help speed up data retrieval and
          processing.
        </div>

        <div className="subHeader">Understanding Query Performance</div>
        <div className="description">
          Query performance depends on factors such as indexing, table structure, and query complexity. Slow queries impact user experience and system efficiency.
        </div>

        <div className="subHeader">Using Indexes for Optimization</div>
        <div className="description">Indexes improve search performance by allowing the database to find rows faster. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE INDEX idx_lastname ON employees(last_name);`}</Code>
        <div className="description">This index speeds up queries that filter by `last_name`.</div>

        <div className="subHeader">Using EXPLAIN to Analyze Queries</div>
        <div className="description">The `EXPLAIN` statement provides insights into how a query is executed, helping identify inefficiencies.</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`EXPLAIN SELECT * FROM employees WHERE last_name = 'Smith';`}</Code>
        <div className="description">The output includes execution plans, index usage, and possible optimizations.</div>

        <div className="subHeader">Optimizing SELECT Queries</div>
        <ul className="list">
          <li>
            <b>Use SELECT only required columns:</b> Avoid `SELECT *`, as it retrieves unnecessary data.
          </li>
          <li>
            <b>Apply WHERE conditions:</b> Filter data efficiently to reduce the number of scanned rows.
          </li>
          <li>
            <b>Use proper indexing:</b> Ensure WHERE conditions use indexed columns.
          </li>
        </ul>
        <Code language="sql" style={materialDark} showLineNumbers>{`-- Avoid this:
SELECT * FROM employees;

-- Optimized query:
SELECT first_name, last_name FROM employees WHERE department_id = 3;`}</Code>

        <div className="subHeader">Avoiding Unnecessary Joins</div>
        <div className="description">Joins can slow down queries if not optimized properly. Use indexing on join conditions and eliminate redundant joins.</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT e.first_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > 50000;`}</Code>

        <div className="subHeader">Using Query Caching</div>
        <div className="description">Query caching stores frequently accessed query results, reducing execution time. Many databases provide built-in caching options.</div>

        <div className="subHeader">Batch Processing for Bulk Inserts</div>
        <div className="description">Instead of inserting records one by one, batch inserts improve performance.</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`INSERT INTO employees (first_name, last_name, salary) 
VALUES ('John', 'Doe', 60000), 
       ('Jane', 'Smith', 65000), 
       ('Mike', 'Johnson', 70000);`}</Code>

        <div className="subHeader">Optimizing Transactions</div>
        <div className="description">Keep transactions short to minimize locking and improve performance.</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 500 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 500 WHERE account_id = 2;
COMMIT;`}</Code>

        <div className="subHeader">Partitioning Large Tables</div>
        <div className="description">Partitioning divides large tables into smaller sections, improving query speed. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE sales (
    sale_id INT,
    sale_date DATE,
    amount DECIMAL(10,2)
) PARTITION BY RANGE (sale_date);`}</Code>

        <div className="subHeader">Avoiding Subqueries When Possible</div>
        <div className="description">Subqueries can be inefficient; use joins when possible. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`-- Avoid subquery:
SELECT first_name FROM employees WHERE department_id = (SELECT department_id FROM departments WHERE department_name = 'HR');

-- Optimized with JOIN:
SELECT e.first_name 
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE d.department_name = 'HR';`}</Code>

        <div className="subHeader">Advantages of Query Optimization</div>
        <ul className="list">
          <li>
            <b>Faster Query Execution:</b> Reduces response times for data retrieval.
          </li>
          <li>
            <b>Lower Resource Usage:</b> Minimizes CPU and memory consumption.
          </li>
          <li>
            <b>Scalability:</b> Enables efficient handling of large datasets.
          </li>
        </ul>

        <div className="subHeader">Limitations of Query Optimization</div>
        <ul className="list">
          <li>
            <b>Complexity:</b> Advanced optimization techniques require deep SQL knowledge.
          </li>
          <li>
            <b>Storage Overhead:</b> Indexes and caching may consume additional storage.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use indexing strategically to improve query performance.</li>
          <li>Analyze query execution with `EXPLAIN` to identify bottlenecks.</li>
          <li>Optimize joins and avoid unnecessary subqueries.</li>
          <li>Use transactions efficiently to prevent unnecessary locks.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Indexes speed up queries by allowing efficient data retrieval.</li>
          <li>`EXPLAIN` helps analyze and optimize query execution plans.</li>
          <li>Efficient use of joins, batch processing, and transactions improves database performance.</li>
          <li>Partitioning large tables and caching queries reduce query execution time.</li>
        </ul>

        <Bottom back="/sql/window-functions" next="/sql/common-table-expressions" />
      </div>
    </div>
  );
};

export default PerformanceOptimization;
