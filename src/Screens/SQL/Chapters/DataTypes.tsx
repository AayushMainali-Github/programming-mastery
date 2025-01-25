import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SQLDataTypes = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Data Types in SQL</div>
        <div className="description">
          Data types in SQL define the type of data that can be stored in a column. Choosing the appropriate data type ensures efficient storage and operations. In this chapter,
          we’ll explore the most common SQL data types, including numeric, string, date, and other types.
        </div>

        <div className="subHeader">Numeric Data Types</div>
        <div className="description">Numeric data types store numbers and are used for calculations and mathematical operations. Common numeric data types include:</div>
        <ul className="list">
          <li>
            <b>INT:</b> Stores integers (whole numbers).
          </li>
          <li>
            <b>DECIMAL (NUMERIC):</b> Stores fixed-point numbers with exact precision. Example: `DECIMAL(10, 2)` stores up to 10 digits, with 2 after the decimal point.
          </li>
          <li>
            <b>FLOAT (REAL):</b> Stores approximate floating-point numbers.
          </li>
          <li>
            <b>TINYINT:</b> Stores very small integers (e.g., 0–255 for unsigned).
          </li>
          <li>
            <b>BIGINT:</b> Stores very large integers.
          </li>
        </ul>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE products (
  product_id INT,
  price DECIMAL(10, 2),
  stock_quantity INT
);`}</Code>

        <div className="subHeader">String Data Types</div>
        <div className="description">String data types store text or character data. Common string data types include:</div>
        <ul className="list">
          <li>
            <b>CHAR:</b> Fixed-length strings (e.g., `CHAR(10)` always stores 10 characters).
          </li>
          <li>
            <b>VARCHAR:</b> Variable-length strings with a defined maximum length (e.g., `VARCHAR(255)`).
          </li>
          <li>
            <b>TEXT:</b> Stores long text (e.g., comments or descriptions).
          </li>
          <li>
            <b>NCHAR/NVARCHAR:</b> Stores Unicode characters for multilingual data.
          </li>
        </ul>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE customers (
  customer_id INT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  bio TEXT
);`}</Code>

        <div className="subHeader">Date and Time Data Types</div>
        <div className="description">Date and time data types store temporal data. Common types include:</div>
        <ul className="list">
          <li>
            <b>DATE:</b> Stores date values in the format `YYYY-MM-DD`.
          </li>
          <li>
            <b>TIME:</b> Stores time values in the format `HH:MM:SS`.
          </li>
          <li>
            <b>DATETIME:</b> Stores both date and time values.
          </li>
          <li>
            <b>TIMESTAMP:</b> Stores date and time with time zone information (useful for tracking events).
          </li>
        </ul>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE orders (
  order_id INT,
  order_date DATE,
  delivery_time TIME,
  order_timestamp TIMESTAMP
);`}</Code>

        <div className="subHeader">Other Data Types</div>
        <div className="description">SQL supports other specialized data types:</div>
        <ul className="list">
          <li>
            <b>BOOLEAN:</b> Stores `TRUE` or `FALSE` values.
          </li>
          <li>
            <b>BLOB:</b> Stores binary data like images or files.
          </li>
          <li>
            <b>JSON:</b> Stores JSON-formatted text for semi-structured data.
          </li>
          <li>
            <b>ENUM:</b> Stores predefined values. Example: `ENUM('Small', 'Medium', 'Large')`.
          </li>
        </ul>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TABLE settings (
  setting_id INT,
  is_enabled BOOLEAN,
  config_data JSON
);`}</Code>

        <div className="subHeader">Choosing the Right Data Type</div>
        <ul className="list">
          <li>
            <b>Optimize Storage:</b> Use data types that minimize storage space (e.g., `TINYINT` for small numbers).
          </li>
          <li>
            <b>Ensure Accuracy:</b> Use `DECIMAL` for financial calculations to avoid rounding errors.
          </li>
          <li>
            <b>Plan for Growth:</b> Choose types like `BIGINT` or `VARCHAR` with sufficient capacity for future data.
          </li>
          <li>
            <b>Consider Compatibility:</b> Use widely supported types for portability across databases.
          </li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>SQL data types define the kind of data that can be stored in a column.</li>
          <li>Numeric, string, and date/time types are the most commonly used.</li>
          <li>Choosing the correct data type improves performance and ensures data accuracy.</li>
        </ul>

        <Bottom back="/sql/sql-syntax" next="/sql/creating-databases-and-tables" />
      </div>
    </div>
  );
};

export default SQLDataTypes;
