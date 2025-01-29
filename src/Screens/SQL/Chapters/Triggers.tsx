import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Triggers = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Triggers</div>
        <div className="description">
          A trigger is a special kind of stored procedure that automatically executes when a specified event occurs in a table, such as `INSERT`, `UPDATE`, or `DELETE`. Triggers
          help maintain data integrity and automate database operations.
        </div>

        <div className="subHeader">What is a Trigger?</div>
        <div className="description">
          A trigger is a database mechanism that runs a predefined SQL block in response to changes in a table. Triggers ensure automatic actions, such as logging changes,
          enforcing business rules, or updating related records.
        </div>

        <div className="subHeader">Creating a Trigger</div>
        <div className="description">The `CREATE TRIGGER` statement is used to define a new trigger. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TRIGGER trigger_name
AFTER INSERT ON table_name
FOR EACH ROW
BEGIN
  -- SQL statements to execute
END;`}</Code>
        <div className="description">Example: Automatically log new employee records into an audit table:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TRIGGER log_new_employee
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
  INSERT INTO employee_audit (employee_id, action, action_time)
  VALUES (NEW.employee_id, 'INSERT', NOW());
END;`}</Code>

        <div className="subHeader">Types of Triggers</div>
        <ul className="list">
          <li>
            <b>BEFORE Triggers:</b> Execute before an action (`INSERT`, `UPDATE`, `DELETE`).
          </li>
          <li>
            <b>AFTER Triggers:</b> Execute after an action (`INSERT`, `UPDATE`, `DELETE`).
          </li>
          <li>
            <b>INSTEAD OF Triggers:</b> Used on views to replace standard behavior.
          </li>
        </ul>

        <div className="subHeader">Trigger for Data Validation</div>
        <div className="description">A `BEFORE INSERT` trigger ensures valid salary entries. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TRIGGER validate_salary
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
  IF NEW.salary < 30000 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Salary must be at least 30,000';
  END IF;
END;`}</Code>

        <div className="subHeader">Trigger for Automatic Updates</div>
        <div className="description">This trigger updates a `last_modified` column whenever an employee's salary is updated:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TRIGGER update_last_modified
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
  SET NEW.last_modified = NOW();
END;`}</Code>

        <div className="subHeader">Trigger for Deleting Related Data</div>
        <div className="description">A `BEFORE DELETE` trigger can archive records before deletion. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE TRIGGER archive_before_delete
BEFORE DELETE ON employees
FOR EACH ROW
BEGIN
  INSERT INTO employee_archive (employee_id, first_name, last_name, deleted_at)
  VALUES (OLD.employee_id, OLD.first_name, OLD.last_name, NOW());
END;`}</Code>

        <div className="subHeader">Deleting a Trigger</div>
        <div className="description">To remove a trigger, use the `DROP TRIGGER` statement. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DROP TRIGGER trigger_name;`}</Code>
        <div className="description">Example: Remove the `log_new_employee` trigger:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DROP TRIGGER log_new_employee;`}</Code>

        <div className="subHeader">Advantages of Triggers</div>
        <ul className="list">
          <li>
            <b>Automatic Execution:</b> Ensures certain actions occur without manual intervention.
          </li>
          <li>
            <b>Data Integrity:</b> Enforces business rules and consistency across tables.
          </li>
          <li>
            <b>Audit and Logging:</b> Tracks changes in the database automatically.
          </li>
          <li>
            <b>Reduced Application Logic:</b> Moves business rules directly into the database.
          </li>
        </ul>

        <div className="subHeader">Limitations of Triggers</div>
        <ul className="list">
          <li>
            <b>Performance Overhead:</b> Triggers can slow down operations if not optimized.
          </li>
          <li>
            <b>Complex Debugging:</b> Debugging trigger execution is more difficult than normal queries.
          </li>
          <li>
            <b>Execution Order:</b> The execution order of multiple triggers on the same table can be difficult to control.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use triggers for enforcing constraints, logging, and automatic updates.</li>
          <li>Keep trigger logic minimal to avoid performance issues.</li>
          <li>Regularly review and optimize triggers to prevent slowdowns.</li>
          <li>Document trigger functionality to ensure maintainability.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Triggers automatically execute SQL logic when data changes.</li>
          <li>They can be used for validation, logging, enforcing business rules, and maintaining integrity.</li>
          <li>Common triggers include `BEFORE INSERT`, `AFTER UPDATE`, and `BEFORE DELETE`.</li>
          <li>While powerful, triggers must be optimized to avoid performance bottlenecks.</li>
        </ul>

        <Bottom back="/sql/stored-procedures" next="/sql/transactions" />
      </div>
    </div>
  );
};

export default Triggers;
