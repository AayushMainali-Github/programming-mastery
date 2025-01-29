import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const StoredProcedures = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Stored Procedures</div>
        <div className="description">
          A stored procedure is a reusable SQL script that can be executed with a single call. It helps improve performance, security, and code reusability by encapsulating complex
          SQL logic within the database.
        </div>

        <div className="subHeader">What is a Stored Procedure?</div>
        <div className="description">
          A stored procedure is a precompiled set of SQL statements stored in the database. Instead of writing queries repeatedly, a stored procedure allows users to call a
          predefined SQL script whenever needed.
        </div>

        <div className="subHeader">Creating a Stored Procedure</div>
        <div className="description">The `CREATE PROCEDURE` statement is used to define a stored procedure. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE PROCEDURE procedure_name
AS
BEGIN
  -- SQL statements
END;`}</Code>
        <div className="description">Example: Create a stored procedure to retrieve all employees:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE PROCEDURE GetAllEmployees
AS
BEGIN
  SELECT * FROM employees;
END;`}</Code>

        <div className="subHeader">Executing a Stored Procedure</div>
        <div className="description">Once created, a stored procedure can be executed using the `EXEC` or `CALL` command. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`EXEC GetAllEmployees;`}</Code>
        <Code language="sql" style={materialDark} showLineNumbers>{`CALL GetAllEmployees;`}</Code>

        <div className="subHeader">Stored Procedure with Parameters</div>
        <div className="description">Parameters allow stored procedures to accept input values and return dynamic results. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE PROCEDURE procedure_name (@param1 DataType, @param2 DataType)
AS
BEGIN
  -- SQL statements using @param1 and @param2
END;`}</Code>
        <div className="description">Example: Create a stored procedure to get employees from a specific department:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE PROCEDURE GetEmployeesByDepartment (@dept_name VARCHAR(50))
AS
BEGIN
  SELECT * FROM employees WHERE department = @dept_name;
END;`}</Code>
        <div className="description">Execute the procedure by passing a department name:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`EXEC GetEmployeesByDepartment 'HR';`}</Code>

        <div className="subHeader">Stored Procedure with Output Parameters</div>
        <div className="description">Output parameters allow procedures to return values. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE PROCEDURE GetEmployeeCount (@dept_name VARCHAR(50), @count INT OUTPUT)
AS
BEGIN
  SELECT @count = COUNT(*) FROM employees WHERE department = @dept_name;
END;`}</Code>
        <div className="description">Execute the procedure and retrieve the output:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DECLARE @emp_count INT;
EXEC GetEmployeeCount 'HR', @emp_count OUTPUT;
PRINT @emp_count;`}</Code>

        <div className="subHeader">Updating Data with Stored Procedures</div>
        <div className="description">Stored procedures can also be used for `INSERT`, `UPDATE`, and `DELETE` operations. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE PROCEDURE UpdateEmployeeSalary (@emp_id INT, @new_salary DECIMAL(10,2))
AS
BEGIN
  UPDATE employees SET salary = @new_salary WHERE employee_id = @emp_id;
END;`}</Code>
        <div className="description">Execute the procedure to update a salary:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`EXEC UpdateEmployeeSalary 5, 75000;`}</Code>

        <div className="subHeader">Deleting a Stored Procedure</div>
        <div className="description">To remove a stored procedure, use the `DROP PROCEDURE` statement. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DROP PROCEDURE procedure_name;`}</Code>
        <div className="description">Example: Remove the `GetAllEmployees` procedure:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DROP PROCEDURE GetAllEmployees;`}</Code>

        <div className="subHeader">Advantages of Stored Procedures</div>
        <ul className="list">
          <li>
            <b>Code Reusability:</b> Procedures eliminate the need to rewrite queries.
          </li>
          <li>
            <b>Performance Optimization:</b> Precompiled execution improves query speed.
          </li>
          <li>
            <b>Security:</b> Limits direct access to tables and ensures controlled execution.
          </li>
          <li>
            <b>Reduced Network Traffic:</b> Running stored procedures on the database reduces client-server communication.
          </li>
        </ul>

        <div className="subHeader">Limitations of Stored Procedures</div>
        <ul className="list">
          <li>
            <b>Debugging Challenges:</b> Debugging stored procedures is more complex than regular queries.
          </li>
          <li>
            <b>Database-Specific Syntax:</b> Stored procedures may not be fully portable between different SQL databases.
          </li>
          <li>
            <b>Maintenance Overhead:</b> Managing multiple procedures can be challenging in large applications.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use meaningful names for stored procedures to describe their functionality.</li>
          <li>Use parameters to make procedures dynamic and reusable.</li>
          <li>Avoid excessive logic in procedures; keep them focused on specific tasks.</li>
          <li>Regularly review and optimize stored procedures for performance.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Stored procedures are reusable SQL scripts that simplify complex operations.</li>
          <li>The `CREATE PROCEDURE` statement defines a procedure, while `EXEC` executes it.</li>
          <li>Parameters allow for dynamic and flexible stored procedures.</li>
          <li>Stored procedures enhance security, performance, and code reusability.</li>
        </ul>

        <Bottom back="/sql/views" next="/sql/transactions" />
      </div>
    </div>
  );
};

export default StoredProcedures;
