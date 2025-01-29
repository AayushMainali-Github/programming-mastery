import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ImportExportData = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Importing and Exporting Data</div>
        <div className="description">
          Importing and exporting data in SQL allows seamless data transfer between databases, spreadsheets, and external applications. This process is essential for backups,
          migrations, and data integration.
        </div>

        <div className="subHeader">Importing Data into SQL</div>
        <div className="description">
          Importing data enables loading external files such as CSV, Excel, or JSON into a database table. Common import methods include `LOAD DATA INFILE`, `INSERT INTO`, and
          `IMPORT` tools.
        </div>

        <div className="subHeader">Importing CSV Files</div>
        <div className="description">The `LOAD DATA INFILE` statement allows importing large CSV files efficiently. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`LOAD DATA INFILE 'path/to/file.csv'
INTO TABLE employees
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\\n'
IGNORE 1 ROWS;`}</Code>
        <div className="description">This command loads data from a CSV file into the `employees` table while skipping the header row.</div>

        <div className="subHeader">Importing Data Using INSERT</div>
        <div className="description">Smaller datasets can be imported using the `INSERT INTO` statement. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`INSERT INTO employees (id, name, department, salary)
VALUES 
(1, 'John Doe', 'HR', 50000),
(2, 'Jane Smith', 'IT', 60000);`}</Code>

        <div className="subHeader">Importing JSON Data</div>
        <div className="description">Some databases, like MySQL and PostgreSQL, support JSON data import. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`INSERT INTO employees (id, name, details)
VALUES 
(1, 'John Doe', '{"age": 30, "position": "Manager"}');`}</Code>

        <div className="subHeader">Exporting Data from SQL</div>
        <div className="description">Exporting data allows saving database records to external files like CSV, JSON, or SQL scripts for backups and sharing.</div>

        <div className="subHeader">Exporting to CSV</div>
        <div className="description">The `SELECT ... INTO OUTFILE` statement saves query results to a CSV file. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT * FROM employees
INTO OUTFILE 'path/to/employees.csv'
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\\n';`}</Code>

        <div className="subHeader">Exporting to SQL Dump</div>
        <div className="description">The `mysqldump` command creates a SQL script for backing up or migrating databases. Example:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`mysqldump -u root -p database_name > backup.sql`}</Code>

        <div className="subHeader">Exporting Data to JSON</div>
        <div className="description">Some databases allow exporting query results as JSON. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SELECT json_agg(row_to_json(employees)) FROM employees;`}</Code>

        <div className="subHeader">Importing and Exporting via GUI Tools</div>
        <div className="description">Many database management tools offer built-in import/export features:</div>
        <ul className="list">
          <li>
            <b>MySQL Workbench:</b> Supports CSV and SQL file imports/exports.
          </li>
          <li>
            <b>PgAdmin (PostgreSQL):</b> Allows easy data transfer.
          </li>
          <li>
            <b>Microsoft SQL Server Management Studio (SSMS):</b> Provides data import/export wizard.
          </li>
        </ul>

        <div className="subHeader">Advantages of Importing and Exporting Data</div>
        <ul className="list">
          <li>
            <b>Data Migration:</b> Easily move data between databases or applications.
          </li>
          <li>
            <b>Backup and Recovery:</b> Create database backups for disaster recovery.
          </li>
          <li>
            <b>Data Sharing:</b> Export data to share with other teams or tools.
          </li>
        </ul>

        <div className="subHeader">Limitations of Importing and Exporting Data</div>
        <ul className="list">
          <li>
            <b>Data Format Issues:</b> Incorrect formatting can cause errors during import.
          </li>
          <li>
            <b>Performance Impact:</b> Importing large datasets may slow down database performance.
          </li>
          <li>
            <b>Security Concerns:</b> Exported files must be handled securely to prevent data breaches.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use `LOAD DATA INFILE` for fast bulk imports.</li>
          <li>Validate data formats before importing to avoid errors.</li>
          <li>Use `mysqldump` or `pg_dump` for regular backups.</li>
          <li>Secure exported files to prevent unauthorized access.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>`LOAD DATA INFILE` and `INSERT INTO` are commonly used for data imports.</li>
          <li>`SELECT ... INTO OUTFILE` and `mysqldump` are used for data exports.</li>
          <li>JSON, CSV, and SQL formats are widely used for data transfer.</li>
          <li>GUI tools provide user-friendly options for data import and export.</li>
        </ul>

        <Bottom back="/sql/normalization" next="/sql/window-functions" />
      </div>
    </div>
  );
};

export default ImportExportData;
