import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Indexing = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Indexes</div>
        <div className="description">
          Indexing is a technique used in SQL databases to improve query performance by speeding up data retrieval. This chapter covers the types of indexes, how they work, and
          their advantages and disadvantages.
        </div>

        <div className="subHeader">1. What is an Index?</div>
        <div className="description">
          An index is a data structure that improves the speed of data retrieval operations on a table at the cost of additional storage space. Indexes function similarly to a book
          index, allowing the database to locate data faster instead of scanning the entire table.
        </div>

        <div className="subHeader">2. Creating an Index</div>
        <div className="description">The `CREATE INDEX` statement is used to add an index to a table. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE INDEX index_name
ON table_name (column_name);`}</Code>
        <div className="description">Example: Create an index on the `last_name` column in the `employees` table:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE INDEX idx_last_name
ON employees (last_name);`}</Code>

        <div className="subHeader">3. Unique Index</div>
        <div className="description">A `UNIQUE` index ensures that all values in the indexed column are distinct. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE UNIQUE INDEX index_name
ON table_name (column_name);`}</Code>
        <div className="description">Example: Ensure that email addresses in the `users` table are unique:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE UNIQUE INDEX idx_unique_email
ON users (email);`}</Code>

        <div className="subHeader">4. Composite Index</div>
        <div className="description">A composite index indexes multiple columns, allowing efficient queries based on combinations of those columns. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE INDEX index_name
ON table_name (column1, column2);`}</Code>
        <div className="description">Example: Create an index on `last_name` and `first_name` to speed up name searches:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE INDEX idx_name
ON employees (last_name, first_name);`}</Code>

        <div className="subHeader">5. Full-Text Index</div>
        <div className="description">A full-text index enables efficient searches in large text columns, useful for applications like search engines. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE FULLTEXT INDEX index_name
ON table_name (column_name);`}</Code>
        <div className="description">Example: Enable full-text search on the `description` column of a `products` table:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE FULLTEXT INDEX idx_product_desc
ON products (description);`}</Code>

        <div className="subHeader">6. Dropping an Index</div>
        <div className="description">If an index is no longer needed, it can be removed using the `DROP INDEX` statement. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DROP INDEX index_name ON table_name;`}</Code>
        <div className="description">Example: Remove the index on `last_name` in the `employees` table:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DROP INDEX idx_last_name ON employees;`}</Code>

        <div className="subHeader">7. Advantages of Indexing</div>
        <ul className="list">
          <li>
            <b>Faster Data Retrieval:</b> Speeds up `SELECT` queries by reducing the number of rows scanned.
          </li>
          <li>
            <b>Efficient Sorting:</b> Improves the performance of `ORDER BY` and `GROUP BY` queries.
          </li>
          <li>
            <b>Optimized Joins:</b> Enhances the performance of `JOIN` operations between large tables.
          </li>
          <li>
            <b>Enforces Uniqueness:</b> A `UNIQUE INDEX` helps prevent duplicate values.
          </li>
        </ul>

        <div className="subHeader">8. Disadvantages of Indexing</div>
        <ul className="list">
          <li>
            <b>Increased Storage:</b> Indexes require additional disk space.
          </li>
          <li>
            <b>Slower Write Operations:</b> `INSERT`, `UPDATE`, and `DELETE` operations become slower as indexes need to be maintained.
          </li>
          <li>
            <b>Overhead in Maintenance:</b> Too many indexes can slow down the database rather than improve performance.
          </li>
          <li>
            <b>Not Always Useful:</b> Indexes are beneficial for large tables but may be unnecessary for small datasets.
          </li>
        </ul>

        <div className="subHeader">9. Best Practices</div>
        <ul className="list">
          <li>Index frequently searched columns, but avoid over-indexing.</li>
          <li>Use composite indexes for queries that filter multiple columns.</li>
          <li>Periodically analyze and remove unused indexes.</li>
          <li>Avoid indexing columns with high write/update frequency unless necessary.</li>
          <li>Use `EXPLAIN` or `ANALYZE` queries to determine if an index is improving performance.</li>
        </ul>

        <div className="subHeader">10. Key Takeaways</div>
        <ul className="list">
          <li>Indexes improve query performance by speeding up searches and filtering.</li>
          <li>Common types of indexes include `PRIMARY KEY`, `UNIQUE`, `COMPOSITE`, and `FULLTEXT` indexes.</li>
          <li>Indexes increase storage usage and slow down `INSERT`/`UPDATE` operations.</li>
          <li>Proper indexing strategies are crucial for maintaining an optimized database.</li>
        </ul>

        <Bottom back="/sql/constraints-and-keys" next="/sql/transactions" />
      </div>
    </div>
  );
};

export default Indexing;
