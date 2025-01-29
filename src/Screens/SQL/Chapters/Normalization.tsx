import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Normalization = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Normalization</div>
        <div className="description">
          Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves structuring tables and relationships to
          minimize data duplication and dependency issues.
        </div>

        <div className="subHeader">What is Normalization?</div>
        <div className="description">
          Normalization ensures that data is logically stored in structured tables, reducing redundancy and eliminating anomalies in insert, update, and delete operations. It
          follows a series of normalization forms, each addressing different data inconsistencies.
        </div>

        <div className="subHeader">Benefits of Normalization</div>
        <ul className="list">
          <li>
            <b>Reduces Redundancy:</b> Eliminates duplicate data storage.
          </li>
          <li>
            <b>Enhances Data Integrity:</b> Ensures accuracy and consistency of data.
          </li>
          <li>
            <b>Improves Query Performance:</b> Organizes data efficiently for faster retrieval.
          </li>
          <li>
            <b>Avoids Anomalies:</b> Prevents insertion, update, and deletion anomalies.
          </li>
        </ul>

        <div className="subHeader">Normalization Forms</div>
        <div className="description">Normalization consists of several forms, each addressing specific database design issues.</div>

        <div className="subHeader">First Normal Form (1NF)</div>
        <div className="description">A table is in 1NF if:</div>
        <ul className="list">
          <li>All columns contain atomic (indivisible) values.</li>
          <li>Each column contains only one type of data.</li>
          <li>Each row has a unique identifier (primary key).</li>
        </ul>
        <Code language="sql" style={materialDark} showLineNumbers>{`-- Example of a non-1NF table:
| Order_ID | Customer   | Items        |
|----------|-----------|-------------|
| 1        | Alice     | Apple, Banana |
| 2        | Bob       | Orange, Grape |

-- Convert to 1NF:
| Order_ID | Customer | Item   |
|----------|---------|--------|
| 1        | Alice   | Apple  |
| 1        | Alice   | Banana |
| 2        | Bob     | Orange |
| 2        | Bob     | Grape  |`}</Code>

        <div className="subHeader">Second Normal Form (2NF)</div>
        <div className="description">A table is in 2NF if:</div>
        <ul className="list">
          <li>It is in 1NF.</li>
          <li>All non-key attributes depend on the entire primary key (removes partial dependencies).</li>
        </ul>
        <Code
          language="sql"
          style={materialDark}
          showLineNumbers
        >{`-- Example: A non-2NF table (Order_ID and Item are composite primary keys, but Customer depends only on Order_ID)
| Order_ID | Customer | Item   | Price |
|----------|---------|--------|-------|
| 1        | Alice   | Apple  | 10    |
| 1        | Alice   | Banana | 15    |

-- Convert to 2NF by splitting into two tables:
| Order_ID | Customer |
|----------|---------|
| 1        | Alice   |

| Order_ID | Item   | Price |
|----------|--------|-------|
| 1        | Apple  | 10    |
| 1        | Banana | 15    |`}</Code>

        <div className="subHeader">Third Normal Form (3NF)</div>
        <div className="description">A table is in 3NF if:</div>
        <ul className="list">
          <li>It is in 2NF.</li>
          <li>All attributes depend only on the primary key (removes transitive dependencies).</li>
        </ul>
        <Code language="sql" style={materialDark} showLineNumbers>{`-- Example: A non-3NF table
| Employee_ID | Name  | Department_ID | Department_Name |
|------------|------|--------------|----------------|
| 101        | John | D01          | HR             |

-- Convert to 3NF by separating Department:
| Employee_ID | Name  | Department_ID |
|------------|------|--------------|
| 101        | John | D01          |

| Department_ID | Department_Name |
|--------------|----------------|
| D01         | HR             |`}</Code>

        <div className="subHeader">Boyce-Codd Normal Form (BCNF)</div>
        <div className="description">
          BCNF is an advanced version of 3NF that handles cases where a non-trivial functional dependency exists on a non-primary key attribute. A table is in BCNF if:
        </div>
        <ul className="list">
          <li>It is in 3NF.</li>
          <li>Every determinant is a candidate key.</li>
        </ul>
        <Code language="sql" style={materialDark} showLineNumbers>{`-- Example of non-BCNF table:
| Course | Instructor | Department |
|--------|-----------|------------|
| Math   | Dr. A     | Science    |
| Physics| Dr. B     | Science    |

-- Convert to BCNF:
| Course  | Instructor |
|---------|-----------|
| Math    | Dr. A     |
| Physics | Dr. B     |

| Instructor | Department |
|-----------|------------|
| Dr. A     | Science    |
| Dr. B     | Science    |`}</Code>

        <div className="subHeader">Higher Normal Forms</div>
        <ul className="list">
          <li>
            <b>Fourth Normal Form (4NF):</b> Eliminates multi-valued dependencies.
          </li>
          <li>
            <b>Fifth Normal Form (5NF):</b> Ensures data redundancy is eliminated through decompositions.
          </li>
          <li>
            <b>Sixth Normal Form (6NF):</b> Deals with temporal data and further optimizations.
          </li>
        </ul>

        <div className="subHeader">When to Normalize and When to Denormalize?</div>
        <div className="description">
          <b>Normalization is beneficial for:</b>
          <ul className="list">
            <li>Minimizing data duplication.</li>
            <li>Ensuring consistent and accurate data.</li>
            <li>Optimizing storage usage.</li>
          </ul>
          <b>Denormalization is beneficial for:</b>
          <ul className="list">
            <li>Improving query performance by reducing joins.</li>
            <li>Handling read-heavy databases where redundancy is acceptable.</li>
          </ul>
        </div>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Normalization organizes data into structured tables, reducing redundancy.</li>
          <li>1NF eliminates duplicate columns, 2NF removes partial dependencies, and 3NF removes transitive dependencies.</li>
          <li>BCNF and higher normal forms provide stricter rules for better data integrity.</li>
          <li>Denormalization may be useful when performance optimization outweighs data redundancy concerns.</li>
        </ul>

        <Bottom back="/sql/user-permissions-roles" next="/sql/window-functions" />
      </div>
    </div>
  );
};

export default Normalization;
