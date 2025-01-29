import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ErrorHandlingSQL = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Error Handling in SQL</div>
        <div className="description">
          Error handling in SQL helps ensure that unexpected issues, such as invalid input, constraint violations, or system errors, do not compromise database integrity. SQL
          provides mechanisms like `TRY...CATCH` blocks and custom error messages to manage errors efficiently.
        </div>

        <div className="subHeader">What is Error Handling in SQL?</div>
        <div className="description">
          Error handling allows you to manage and respond to errors in SQL operations. By using structured error handling techniques, you can prevent transactions from failing
          unexpectedly and improve the robustness of your database.
        </div>

        <div className="subHeader">Using TRY...CATCH for Error Handling</div>
        <div className="description">
          The `TRY...CATCH` block captures errors in SQL Server (T-SQL). When an error occurs in the `TRY` block, execution is transferred to the `CATCH` block. Syntax:
        </div>
        <Code language="sql" style={materialDark} showLineNumbers>{`BEGIN TRY
  -- SQL statements that may cause an error
END TRY
BEGIN CATCH
  -- Handle the error
END CATCH;`}</Code>
        <div className="description">Example: Handling division by zero error:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`BEGIN TRY
  SELECT 10 / 0 AS result;  -- Causes an error
END TRY
BEGIN CATCH
  PRINT 'Error: Division by zero is not allowed';
END CATCH;`}</Code>

        <div className="subHeader">Using ERROR_MESSAGE() to Retrieve Error Details</div>
        <div className="description">The `ERROR_MESSAGE()` function provides details about the error that occurred. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`BEGIN TRY
  INSERT INTO employees (employee_id, first_name) VALUES (1, NULL);
END TRY
BEGIN CATCH
  PRINT 'Error: ' + ERROR_MESSAGE();
END CATCH;`}</Code>

        <div className="subHeader">Handling Errors in Transactions</div>
        <div className="description">Transactions should include error handling to ensure database consistency. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`BEGIN TRANSACTION;
BEGIN TRY
  UPDATE accounts SET balance = balance - 500 WHERE account_id = 1;
  UPDATE accounts SET balance = balance + 500 WHERE account_id = 2;
  COMMIT;  -- Commit changes if no errors
END TRY
BEGIN CATCH
  ROLLBACK;  -- Undo changes if an error occurs
  PRINT 'Transaction failed: ' + ERROR_MESSAGE();
END CATCH;`}</Code>

        <div className="subHeader">Raising Custom Errors with THROW</div>
        <div className="description">The `THROW` statement generates custom error messages. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`BEGIN TRY
  IF (SELECT COUNT(*) FROM employees WHERE department_id IS NULL) > 0
    THROW 50001, 'Department ID cannot be NULL', 1;
END TRY
BEGIN CATCH
  PRINT 'Error: ' + ERROR_MESSAGE();
END CATCH;`}</Code>

        <div className="subHeader">Using RAISERROR for Custom Error Messages</div>
        <div className="description">The `RAISERROR` statement generates error messages with custom severity levels. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`RAISERROR('Invalid salary amount', 16, 1);`}</Code>
        <div className="description">The severity level `16` indicates a user-defined error that does not stop the session.</div>

        <div className="subHeader">Advantages of Error Handling</div>
        <ul className="list">
          <li>
            <b>Prevents Data Corruption:</b> Ensures transactions are properly managed.
          </li>
          <li>
            <b>Improves Debugging:</b> Provides detailed error messages for troubleshooting.
          </li>
          <li>
            <b>Enhances Security:</b> Avoids exposing system errors to users.
          </li>
        </ul>

        <div className="subHeader">Limitations of Error Handling</div>
        <ul className="list">
          <li>
            <b>Database-Specific Implementation:</b> Different databases use different error-handling methods.
          </li>
          <li>
            <b>Performance Overhead:</b> Extensive error handling may impact query execution speed.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use `TRY...CATCH` for structured error handling.</li>
          <li>Log errors in a separate error table for auditing.</li>
          <li>Use `THROW` and `RAISERROR` to return meaningful error messages.</li>
          <li>Wrap critical transactions in error-handling blocks to ensure rollback on failure.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>`TRY...CATCH` helps manage errors without crashing the database.</li>
          <li>`ERROR_MESSAGE()` retrieves detailed error descriptions.</li>
          <li>`THROW` and `RAISERROR` generate custom error messages.</li>
          <li>Transactions with `ROLLBACK` prevent inconsistent data states.</li>
        </ul>

        <Bottom back="/sql/transactions" next="/sql/normalization" />
      </div>
    </div>
  );
};

export default ErrorHandlingSQL;
