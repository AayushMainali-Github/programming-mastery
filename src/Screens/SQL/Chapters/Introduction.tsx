import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const IntroductionToSQL = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Introduction to SQL</div>
        <div className="description">
          SQL (Structured Query Language) is a standard programming language specifically designed for managing and interacting with relational databases. In this chapter, we’ll
          explore what SQL is, its history, and why it is important.
        </div>

        <div className="subHeader">What is SQL?</div>
        <div className="description">SQL is a powerful tool used to:</div>
        <ul className="list">
          <li>
            <b>Create</b> and manage databases.
          </li>
          <li>
            <b>Insert</b>, <b>update</b>, and <b>delete</b> data in tables.
          </li>
          <li>
            <b>Retrieve</b> and filter data to generate meaningful insights.
          </li>
          <li>
            <b>Control</b> access to data with permissions and roles.
          </li>
        </ul>
        <div className="description">
          SQL is the backbone of many data-driven applications, enabling developers and analysts to work efficiently with relational databases like MySQL, PostgreSQL, SQL Server,
          and SQLite.
        </div>

        <div className="subHeader">History of SQL</div>
        <div className="description">SQL has a rich history dating back to the 1970s:</div>
        <ul className="list">
          <li>
            In the 1970s, IBM researchers developed a relational database model and a query language called <b>SEQUEL</b>.
          </li>
          <li>The term SEQUEL later evolved into SQL due to trademark issues.</li>
          <li>
            In 1986, SQL became a standard by the <b>American National Standards Institute (ANSI)</b>.
          </li>
          <li>Today, SQL is one of the most widely used languages for database management and is supported by virtually all relational database systems.</li>
        </ul>

        <div className="subHeader">Why is SQL Important?</div>
        <div className="description">SQL plays a vital role in modern software development and data analysis because:</div>
        <ul className="list">
          <li>
            <b>Data Management:</b> SQL enables efficient storage, retrieval, and manipulation of structured data.
          </li>
          <li>
            <b>Industry Standard:</b> SQL is universally supported across major relational database systems.
          </li>
          <li>
            <b>Data Insights:</b> Analysts and developers use SQL to extract valuable insights from raw data.
          </li>
          <li>
            <b>Scalability:</b> SQL can handle databases ranging from small personal projects to massive enterprise-level systems.
          </li>
        </ul>

        <div className="subHeader">Example of SQL Query</div>
        <div className="description">
          Here’s a simple example of an SQL query to retrieve all data from a table named <b>employees</b>:
        </div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT * FROM employees;`}</Code>
        <div className="description">
          This query fetches all the rows and columns from the <b>employees</b> table.
        </div>

        <div className="subHeader">Key Features of SQL</div>
        <ul className="list">
          <li>
            <b>Declarative Language:</b> Specify what you want to achieve without defining how to do it.
          </li>
          <li>
            <b>Relational:</b> Operates on relational database structures like tables, rows, and columns.
          </li>
          <li>
            <b>Standardized:</b> Recognized by ANSI and ISO, ensuring consistency across database systems.
          </li>
          <li>
            <b>Extensible:</b> Can be combined with programming languages like Python, Java, and PHP for advanced functionality.
          </li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>SQL is the standard language for managing relational databases.</li>
          <li>It has a long history and is widely used in modern software applications.</li>
          <li>Learning SQL is essential for database management, data analysis, and backend development.</li>
        </ul>

        <Bottom back="/sql/introduction" next="/sql/database-basics" />
      </div>
    </div>
  );
};

export default IntroductionToSQL;
