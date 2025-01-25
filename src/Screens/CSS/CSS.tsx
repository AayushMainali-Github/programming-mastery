import React from "react";
import Laptop from "../../Assets/bg.png";
import Item from "../../Components/Item";
import IntroductionToCSS from "../../Assets/CSS/1.png";
import SyntaxAndSelectors from "../../Assets/CSS/2.png";
import ColorsAndBackgrounds from "../../Assets/CSS/3.png";
import TextStyling from "../../Assets/CSS/4.png";
import BoxModel from "../../Assets/CSS/5.png";
import Positioning from "../../Assets/CSS/6.png";
import FlexboxBasics from "../../Assets/CSS/7.png";
import GridBasics from "../../Assets/CSS/8.png";
import CSSUnits from "../../Assets/CSS/9.png";
import LinksAndButtons from "../../Assets/CSS/10.png";
import ListsStyling from "../../Assets/CSS/11.png";
import FormsStyling from "../../Assets/CSS/12.png";
import MediaQueries from "../../Assets/CSS/13.png";
import AdvancedSelectors from "../../Assets/CSS/14.png";
import CSSVariables from "../../Assets/CSS/15.png";
import TransitionsAndAnimations from "../../Assets/CSS/16.png";
import CSSTransformations from "../../Assets/CSS/17.png";
import AdvancedFlexbox from "../../Assets/CSS/18.png";
import AdvancedGrid from "../../Assets/CSS/19.png";
import CustomFontsTypography from "../../Assets/CSS/20.png";
import CSSSpecificityInheritance from "../../Assets/CSS/21.png";
import ShadowEffects from "../../Assets/CSS/22.png";
import ClippingAndMasking from "../../Assets/CSS/23.png";
import CSSFrameworks from "../../Assets/CSS/24.png";

const CSS = () => {
  return (
    <div className="home">
      <img className="img" alt="Laptop" src={Laptop}></img>
      <div className="info">
        <div className="title">Style the Web with CSS</div>
        <div className="desc">CSS (Cascading Style Sheets) is the language that styles the web. Learn how to use CSS to design beautiful, responsive, and functional websites.</div>
      </div>
      <div className="header">Fundamentals</div>
      <div className="items">
        <Item image={IntroductionToCSS} title="Introduction to CSS" link="introduction-to-css" />
        <Item image={SyntaxAndSelectors} title="CSS Syntax and Selectors" link="css-syntax-and-selectors" />
        <Item image={ColorsAndBackgrounds} title="Colors and Backgrounds" link="colors-and-backgrounds" />
        <Item image={TextStyling} title="Text Styling" link="text-styling" />
        <Item image={BoxModel} title="Box Model" link="box-model" />
        <Item image={Positioning} title="Positioning" link="positioning" />
        <Item image={FlexboxBasics} title="Flexbox Basics" link="flexbox-basics" />
        <Item image={GridBasics} title="Grid Basics" link="grid-basics" />
        <Item image={CSSUnits} title="CSS Units" link="css-units" />
        <Item image={LinksAndButtons} title="Links and Buttons Styling" link="links-and-buttons-styling" />
        <Item image={ListsStyling} title="Lists Styling" link="lists-styling" />
        <Item image={FormsStyling} title="Forms Styling" link="forms-styling" />
      </div>
      <div className="header">Intermediate</div>
      <div className="items">
        <Item image={MediaQueries} title="Media Queries" link="media-queries" />
        <Item image={AdvancedSelectors} title="Advanced Selectors" link="advanced-selectors" />
        <Item image={CSSVariables} title="CSS Variables" link="css-variables" />
        <Item image={TransitionsAndAnimations} title="Transitions and Animations" link="transitions-and-animations" />
        <Item image={CSSTransformations} title="CSS Transformations" link="css-transformations" />
        <Item image={AdvancedFlexbox} title="Advanced Flexbox" link="advanced-flexbox" />
        <Item image={AdvancedGrid} title="Advanced Grid" link="advanced-grid" />
        <Item image={CustomFontsTypography} title="Custom Fonts and Typography" link="custom-fonts-and-typography" />
        <Item image={CSSSpecificityInheritance} title="CSS Specificity and Inheritance" link="css-specificity-and-inheritance" />
        <Item image={ShadowEffects} title="Shadow Effects" link="shadow-effects" />
        <Item image={ClippingAndMasking} title="Clipping and Masking" link="clipping-and-masking" />
        <Item image={CSSFrameworks} title="CSS Frameworks" link="css-frameworks" />
      </div>
    </div>
  );
};

export default CSS;

// Fundamentals
// Introduction to CSS: What is CSS, its history, and how it works with HTML.
// CSS Syntax and Selectors: Rules, properties, values, and types of selectors.
// Colors and Backgrounds: Setting colors, gradients, and backgrounds.
// Text Styling: Fonts, sizes, alignments, decorations, and transformations.
// Box Model: Understanding margin, border, padding, and content.
// Positioning: Static, relative, absolute, fixed, and sticky positioning.
// Flexbox Basics: Aligning items using flexbox.
// Grid Basics: Layout with CSS grid.
// CSS Units: Relative vs. absolute units (px, em, rem, %, vh, vw).
// Links and Buttons Styling: Hover, active, and focus states.
// Lists Styling: Customizing ordered and unordered lists.
// Forms Styling: Inputs, checkboxes, radio buttons, and more.
// Intermediate
// Media Queries: Responsive design with breakpoints.
// Advanced Selectors: Pseudo-classes and pseudo-elements.
// CSS Variables: Defining and using reusable variables.
// Transitions and Animations: Smooth effects and keyframes.
// CSS Transformations: Rotate, scale, skew, and translate.
// Advanced Flexbox: Building complex layouts with Flexbox.
// Advanced Grid: Using grid templates, areas, and responsive grids.
// Custom Fonts and Typography: @font-face and advanced text styling.
// CSS Specificity and Inheritance: How styles are applied and prioritized.
// Shadow Effects: Box-shadow and text-shadow.
// Clipping and Masking: Using clip-path and mask properties.
// CSS Frameworks: An introduction to Bootstrap and Tailwind CSS.
