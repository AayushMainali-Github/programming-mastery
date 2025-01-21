import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLLists = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Lists</div>
        <div className="description">
          Lists in HTML are used to organize related items. HTML provides two main types of lists: ordered lists (<b>&lt;ol&gt;</b>) and unordered lists (<b>&lt;ul&gt;</b>), along
          with a third type for definitions, the definition list (<b>&lt;dl&gt;</b>).
        </div>

        <div className="subHeader">Ordered Lists</div>
        <div className="description">
          An ordered list is created using the <b>&lt;ol&gt;</b> tag. Items in an ordered list are numbered automatically.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`}</Code>
        <div className="description">
          <b>Output:</b> The list will be displayed with numbers preceding each item.
          <ol>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ol>
        </div>

        <div className="subHeader">Unordered Lists</div>
        <div className="description">
          An unordered list is created using the <b>&lt;ul&gt;</b> tag. Items in an unordered list are marked with bullet points by default.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>`}</Code>
        <div className="description">
          <b>Output:</b> The list will be displayed with bullet points preceding each item.
          <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ul>
        </div>

        <div className="subHeader">Nested Lists</div>
        <div className="description">Lists can be nested by placing one list inside another, whether ordered or unordered.</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<ul>
  <li>Main item 1
    <ul>
      <li>Subitem 1.1</li>
      <li>Subitem 1.2</li>
    </ul>
  </li>
  <li>Main item 2</li>
</ul>`}</Code>
        <div className="description">
          <b>Output:</b> A nested list structure with subitems will appear.
          <ul>
            <li>
              Main item 1
              <ul>
                <li>Subitem 1.1</li>
                <li>Subitem 1.2</li>
              </ul>
            </li>
            <li>Main item 2</li>
          </ul>
        </div>

        <div className="subHeader">Definition Lists</div>
        <div className="description">
          A definition list is created using the <b>&lt;dl&gt;</b> tag. It contains terms (<b>&lt;dt&gt;</b>) and their definitions (<b>&lt;dd&gt;</b>).
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`}</Code>
        <div className="description">
          <b>Output:</b> The terms and their definitions will be displayed in a structured format:
          <dl>
            <dt>HTML</dt>
            <dd>HyperText Markup Language</dd>
            <dt>CSS</dt>
            <dd>Cascading Style Sheets</dd>
          </dl>
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Use ordered lists (<b>&lt;ol&gt;</b>) when the sequence of items matters.
          </li>
          <li>
            Use unordered lists (<b>&lt;ul&gt;</b>) for non-sequential collections of items.
          </li>
          <li>Keep nested lists clear and avoid excessive levels for readability.</li>
        </ul>

        <Bottom back="/html/headings-and-paragraphs" next="/html/links-and-anchors" />
      </div>
    </div>
  );
};

export default HTMLLists;
