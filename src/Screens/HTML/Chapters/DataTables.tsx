import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLDataTables = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Data Tables</div>
        <div className="description">
          Data tables in HTML are used to present data in a structured format. With advanced elements like <b>&lt;thead&gt;</b>, <b>&lt;tbody&gt;</b>, and <b>&lt;tfoot&gt;</b>, and
          attributes like <b>colspan</b> and <b>rowspan</b>, you can make tables more accessible and readable.
        </div>

        <div className="subHeader">Table Sections</div>
        <div className="description">HTML allows you to organize tables into three main sections:</div>
        <ul className="list">
          <li>
            <b>&lt;thead&gt;:</b> Groups the table's header rows.
          </li>
          <li>
            <b>&lt;tbody&gt;:</b> Contains the main body of the table.
          </li>
          <li>
            <b>&lt;tfoot&gt;:</b> Groups the footer rows, often for summary data.
          </li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">End of Data</td>
    </tr>
  </tfoot>
</table>`}</Code>

        <div className="subHeader">
          Using <b>colspan</b> and <b>rowspan</b>
        </div>
        <div className="description">These attributes allow cells to span across multiple columns or rows:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<table border="1">
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td rowspan="2">25</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Smith</td>
  </tr>
</table>`}</Code>
        <div className="description">
          <b>Explanation:</b>
          <ul className="list">
            <li>
              <b>colspan:</b> Merges cells horizontally.
            </li>
            <li>
              <b>rowspan:</b> Merges cells vertically.
            </li>
          </ul>
        </div>

        <div className="subHeader">Styling Tables</div>
        <div className="description">Styling helps improve table readability. Here’s an example of adding borders and alternating row colors:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: center;
  }
  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
</style>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use <b>&lt;thead&gt;</b>, <b>&lt;tbody&gt;</b>, and <b>&lt;tfoot&gt;</b> to structure tables for better readability and accessibility.
          </li>
          <li>
            Use <b>colspan</b> and <b>rowspan</b> sparingly to avoid confusing layouts.
          </li>
          <li>Apply consistent styling for tables to ensure clarity and usability.</li>
          <li>
            Use descriptive <b>&lt;th&gt;</b> elements for headers to improve accessibility for screen readers.
          </li>
        </ul>

        <Bottom back="/html/forms-advanced" next="/html/iframe-embedding" />
      </div>
    </div>
  );
};

export default HTMLDataTables;
