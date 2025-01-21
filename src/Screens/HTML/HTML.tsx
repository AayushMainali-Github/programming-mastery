import React from "react";
import Laptop from "../../Assets/bg.png";
import Item from "../../Components/Item";
import IntroductionToHTML from "../../Assets/HTML/1.png";
import BasicDocumentStructure from "../../Assets/HTML/2.png";
import HeadingsAndParagraphs from "../../Assets/HTML/3.png";
import Lists from "../../Assets/HTML/4.png";
import LinksAndAnchors from "../../Assets/HTML/5.png";
import Images from "../../Assets/HTML/6.png";
import Tables from "../../Assets/HTML/7.png";
import Forms from "../../Assets/HTML/8.png";
import SemanticElements from "../../Assets/HTML/9.png";
import AttributesAndMetadata from "../../Assets/HTML/10.png";
import HTML5Elements from "../../Assets/HTML/11.png";
import MediaElements from "../../Assets/HTML/12.png";
import FormsAdvanced from "../../Assets/HTML/13.png";
import DataTables from "../../Assets/HTML/14.png";
import IframeEmbedding from "../../Assets/HTML/15.png";
import GlobalAttributes from "../../Assets/HTML/16.png";
import HTMLEntities from "../../Assets/HTML/17.png";
import ARIAAttributes from "../../Assets/HTML/18.png";
import AnchorTargets from "../../Assets/HTML/19.png";
import CustomDataAttributes from "../../Assets/HTML/20.png";
import BestPractices from "../../Assets/HTML/21.png";
import HTMLFileOrganization from "../../Assets/HTML/22.png";

const HTML = () => {
  return (
    <div className="home">
      <img className="img" alt="Laptop" src={Laptop}></img>
      <div className="info">
        <div className="title">Master the Building Blocks of the Web</div>
        <div className="desc">
          HTML is the foundation of every website. Learning HTML empowers you to create and structure content for the web, from simple web pages to complex applications.
        </div>
      </div>
      <div className="header">Fundamentals</div>
      <div className="items">
        <Item image={IntroductionToHTML} title="Introduction to HTML" link="introduction-to-html" />
        <Item image={BasicDocumentStructure} title="Basic Document Structure" link="basic-document-structure" />
        <Item image={HeadingsAndParagraphs} title="Headings and Paragraphs" link="headings-and-paragraphs" />
        <Item image={Lists} title="Lists" link="lists" />
        <Item image={LinksAndAnchors} title="Links and Anchors" link="links-and-anchors" />
        <Item image={Images} title="Images" link="images" />
        <Item image={Tables} title="Tables" link="tables" />
        <Item image={Forms} title="Forms" link="forms" />
        <Item image={SemanticElements} title="Semantic Elements" link="semantic-elements" />
        <Item image={AttributesAndMetadata} title="Attributes and Metadata" link="attributes-and-metadata" />
      </div>
      <div className="header">Intermediate</div>
      <div className="items">
        <Item image={HTML5Elements} title="HTML5 Elements" link="html5-elements" />
        <Item image={MediaElements} title="Media Elements" link="media-elements" />
        <Item image={FormsAdvanced} title="Forms Advanced" link="forms-advanced" />
        <Item image={DataTables} title="Data Tables" link="data-tables" />
        <Item image={IframeEmbedding} title="Iframe Embedding" link="iframe-embedding" />
        <Item image={GlobalAttributes} title="Global Attributes" link="global-attributes" />
        <Item image={HTMLEntities} title="HTML Entities" link="html-entities" />
        <Item image={ARIAAttributes} title="ARIA Attributes" link="aria-attributes" />
        <Item image={AnchorTargets} title="Anchor Targets" link="anchor-targets" />
        <Item image={CustomDataAttributes} title="Custom Data Attributes" link="custom-data-attributes" />
        <Item image={BestPractices} title="Best Practices" link="best-practices" />
        <Item image={HTMLFileOrganization} title="HTML File Organization" link="html-file-organization" />
      </div>
    </div>
  );
};

export default HTML;
