import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Transactions = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Transactions</div>
        <div className="description">
          A transaction is a sequence of one or more SQL statements executed as a single unit of work. Transactions ensure data consistency and integrity by allowing multiple
          operations to be committed together or rolled back if an error occurs.
        </div>

        <div className="subHeader">What is a Transaction?</div>
        <div className="description">A transaction groups multiple SQL statements into a logical unit. It follows the ACID properties:</div>
        <ul className="list">
          <li>
            <b>Atomicity:</b> Ensures that all operations in a transaction succeed or none are applied.
          </li>
          <li>
            <b>Consistency:</b> Guarantees that the database remains in a valid state before and after the transaction.
          </li>
          <li>
            <b>Isolation:</b> Ensures that transactions do not interfere with each other.
          </li>
          <li>
            <b>Durability:</b> Ensures that committed changes are permanently stored in the database.
          </li>
        </ul>

        <div className="subHeader">Using Transactions</div>
        <div className="description">Transactions are controlled using `BEGIN`, `COMMIT`, and `ROLLBACK`. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`BEGIN TRANSACTION;
-- SQL statements
COMMIT;  -- Saves changes`}</Code>

        <div className="subHeader">Committing a Transaction</div>
        <div className="description">The `COMMIT` statement saves all changes made within a transaction. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 500 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 500 WHERE account_id = 2;
COMMIT;  -- Saves changes`}</Code>

        <div className="subHeader">Rolling Back a Transaction</div>
        <div className="description">The `ROLLBACK` statement undoes all changes if an error occurs. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 500 WHERE account_id = 1;
-- Simulating an error (e.g., insufficient funds)
IF (SELECT balance FROM accounts WHERE account_id = 1) < 0 THEN
  ROLLBACK;  -- Undo changes
ELSE
  COMMIT;  -- Save changes
END IF;`}</Code>

        <div className="subHeader">Using SAVEPOINTS</div>
        <div className="description">A `SAVEPOINT` allows partial rollbacks within a transaction. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`BEGIN TRANSACTION;
UPDATE employees SET salary = salary + 5000 WHERE department = 'HR';
SAVEPOINT before_update;
UPDATE employees SET salary = salary + 5000 WHERE department = 'Sales';
ROLLBACK TO before_update;  -- Undo salary increase for Sales
COMMIT;  -- Keep HR salary update`}</Code>

        <div className="subHeader">Advantages of Transactions</div>
        <ul className="list">
          <li>
            <b>Ensures Data Consistency:</b> Prevents partial updates.
          </li>
          <li>
            <b>Improves Reliability:</b> Maintains database integrity.
          </li>
          <li>
            <b>Reduces Data Loss:</b> Allows rolling back errors safely.
          </li>
        </ul>

        <div className="subHeader">Limitations of Transactions</div>
        <ul className="list">
          <li>
            <b>Performance Overhead:</b> Long-running transactions may slow down performance.
          </li>
          <li>
            <b>Deadlocks:</b> Multiple concurrent transactions may cause deadlocks.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use transactions for financial and critical operations.</li>
          <li>Keep transactions short to avoid locking issues.</li>
          <li>Use `ROLLBACK` for error handling.</li>
          <li>Utilize `SAVEPOINTS` for partial rollbacks.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Transactions ensure atomicity, consistency, isolation, and durability (ACID).</li>
          <li>`BEGIN`, `COMMIT`, and `ROLLBACK` control transactions.</li>
          <li>`SAVEPOINTS` allow partial rollbacks.</li>
          <li>Transactions help maintain database integrity in multi-step operations.</li>
        </ul>

        <Bottom back="/sql/triggers" next="/sql/normalization" />
      </div>
    </div>
  );
};

export default Transactions;
