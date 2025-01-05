import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLTables = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Tables</div>
        <div className="description">
          Tables in HTML are used to organize and display data in a tabular format. They are created using the <b>&lt;table&gt;</b> tag along with related elements such as{" "}
          <b>&lt;tr&gt;</b>, <b>&lt;th&gt;</b>, and <b>&lt;td&gt;</b>.
        </div>

        <div className="subHeader">Basic Structure of a Table</div>
        <div className="description">
          A table is created using the <b>&lt;table&gt;</b> tag. Rows are defined using <b>&lt;tr&gt;</b>, and cells within rows are defined using either <b>&lt;th&gt;</b> for
          headers or <b>&lt;td&gt;</b> for data cells.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>30</td>
    <td>London</td>
  </tr>
</table>`}</Code>
        <div className="description">
          <b>Output:</b> A table with a header row and two data rows:
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
            <tr>
              <td>John</td>
              <td>25</td>
              <td>New York</td>
            </tr>
            <tr>
              <td>Jane</td>
              <td>30</td>
              <td>London</td>
            </tr>
          </table>
        </div>

        <div className="subHeader">Adding a Caption</div>
        <div className="description">
          The <b>&lt;caption&gt;</b> tag is used to add a title or description for the table:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<table>
  <caption>Employee Data</caption>
  <tr>
    <th>Name</th>
    <th>Department</th>
  </tr>
  <tr>
    <td>John</td>
    <td>HR</td>
  </tr>
</table>`}</Code>

        <div className="subHeader">Combining Columns and Rows</div>
        <div className="description">
          Use the <b>colspan</b> and <b>rowspan</b> attributes to merge cells across columns or rows:
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>25</td>
  </tr>
  <tr>
    <td rowspan="2">Jane</td>
    <td>Smith</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Doe</td>
    <td>35</td>
  </tr>
</table>`}</Code>

        <div className="subHeader">Styling Tables</div>
        <div className="description">While HTML provides the structure, CSS is often used to style tables for better readability. Here's an example of a simple inline style:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<table border="1" style="width:100%; text-align:center;">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Always use the <b>&lt;th&gt;</b> tag for header cells to improve accessibility and clarity.
          </li>
          <li>
            Use the <b>&lt;caption&gt;</b> tag to provide context for the table's data.
          </li>
          <li>Avoid excessive use of tables for layout purposes; use tables only for tabular data.</li>
        </ul>

        <Bottom back="/html/images" next="/html/forms" />
      </div>
    </div>
  );
};

export default HTMLTables;
