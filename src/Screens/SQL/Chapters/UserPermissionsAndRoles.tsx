import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const UserPermissionsRoles = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">User Permissions and Roles</div>
        <div className="description">
          Database security is essential for protecting sensitive information. SQL provides mechanisms to manage user access through roles and privileges, ensuring that users can
          only perform authorized actions.
        </div>

        <div className="subHeader">Understanding Users, Roles, and Privileges</div>
        <div className="description">
          <ul className="list">
            <li>
              <b>Users:</b> Individual accounts that access the database.
            </li>
            <li>
              <b>Roles:</b> A set of predefined privileges that can be assigned to multiple users.
            </li>
            <li>
              <b>Privileges:</b> Specific permissions granted to users or roles to perform database actions.
            </li>
          </ul>
        </div>

        <div className="subHeader">Creating a New User</div>
        <div className="description">The `CREATE USER` statement adds a new database user. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE USER 'username'@'host' IDENTIFIED BY 'password';`}</Code>
        <div className="description">Example: Create a user named `john_doe` with a password:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE USER 'john_doe'@'localhost' IDENTIFIED BY 'SecurePass123';`}</Code>

        <div className="subHeader">Granting Privileges</div>
        <div className="description">The `GRANT` statement assigns specific privileges to a user or role. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`GRANT privilege_name ON database_name.table_name TO 'username'@'host';`}</Code>
        <div className="description">Example: Grant `SELECT` and `INSERT` privileges on the `employees` table:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`GRANT SELECT, INSERT ON company_db.employees TO 'john_doe'@'localhost';`}</Code>

        <div className="subHeader">Revoking Privileges</div>
        <div className="description">The `REVOKE` statement removes assigned privileges. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`REVOKE privilege_name ON database_name.table_name FROM 'username'@'host';`}</Code>
        <div className="description">Example: Remove `INSERT` privilege from `john_doe`:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`REVOKE INSERT ON company_db.employees FROM 'john_doe'@'localhost';`}</Code>

        <div className="subHeader">Creating and Managing Roles</div>
        <div className="description">Roles simplify user management by grouping multiple privileges together. Syntax:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE ROLE role_name;`}</Code>
        <div className="description">Example: Create a role for `HR_Manager`:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`CREATE ROLE HR_Manager;`}</Code>

        <div className="subHeader">Assigning Privileges to Roles</div>
        <div className="description">Privileges can be granted to roles, which can then be assigned to users. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`GRANT SELECT, UPDATE ON company_db.employees TO HR_Manager;`}</Code>

        <div className="subHeader">Assigning Roles to Users</div>
        <div className="description">Once roles are defined, they can be assigned to users. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`GRANT HR_Manager TO 'john_doe'@'localhost';`}</Code>

        <div className="subHeader">Checking User Privileges</div>
        <div className="description">The `SHOW GRANTS` statement displays privileges for a user or role. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`SHOW GRANTS FOR 'john_doe'@'localhost';`}</Code>

        <div className="subHeader">Dropping Users and Roles</div>
        <div className="description">The `DROP USER` and `DROP ROLE` statements remove users and roles. Example:</div>
        <Code language="sql" style={materialDark} showLineNumbers>{`DROP USER 'john_doe'@'localhost';`}</Code>
        <Code language="sql" style={materialDark} showLineNumbers>{`DROP ROLE HR_Manager;`}</Code>

        <div className="subHeader">Advantages of User Permissions and Roles</div>
        <ul className="list">
          <li>
            <b>Enhanced Security:</b> Ensures users only access authorized data.
          </li>
          <li>
            <b>Simplified Management:</b> Roles streamline privilege assignment.
          </li>
          <li>
            <b>Data Integrity:</b> Prevents unauthorized data modifications.
          </li>
        </ul>

        <div className="subHeader">Limitations of User Permissions</div>
        <ul className="list">
          <li>
            <b>Complex Configuration:</b> Managing multiple users and roles can become challenging.
          </li>
          <li>
            <b>Performance Impact:</b> Overuse of permission checks may slow down queries.
          </li>
        </ul>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use roles instead of assigning privileges directly to users.</li>
          <li>Grant the least privileges necessary to users.</li>
          <li>Regularly review and audit user access permissions.</li>
          <li>Use `REVOKE` to remove unnecessary privileges when a user's role changes.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>`CREATE USER` and `GRANT` manage user access.</li>
          <li>`REVOKE` removes privileges, while `DROP USER` deletes accounts.</li>
          <li>Roles simplify privilege management by grouping permissions.</li>
          <li>Secure database access by following the principle of least privilege.</li>
        </ul>

        <Bottom back="/sql/advanced-joins" next="/sql/normalization" />
      </div>
    </div>
  );
};

export default UserPermissionsRoles;
