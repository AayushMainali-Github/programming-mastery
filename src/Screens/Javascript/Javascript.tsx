import React from "react";
import Laptop from "../../Assets/bg.png";
import Item from "../../Components/Item";
import Introduction from "../../Assets/Javascript/introduction.png";
import Variables from "../../Assets/Javascript/variables.png";
import Datatypes from "../../Assets/Javascript/datatypes.png";
import Comments from "../../Assets/Javascript/comments.png";
import Operators from "../../Assets/Javascript/operators.png";
import StringMethods from "../../Assets/Javascript/stringmethods.png";
import NumberMethods from "../../Assets/Javascript/numbermethods.png";
import DateAndTime from "../../Assets/Javascript/dateandtime.png";
import Functions from "../../Assets/Javascript/functions.png";
import Math from "../../Assets/Javascript/math.png";
import ConditionalStatements from "../../Assets/Javascript/conditionalstatements.png";
import Loops from "../../Assets/Javascript/loops.png";
import Arrays from "../../Assets/Javascript/arrays.png";
import ArrayMethods from "../../Assets/Javascript/arraymethods.png";
import Objects from "../../Assets/Javascript/objects.png";
import Events from "../../Assets/Javascript/events.png";
import DomManipulation from "../../Assets/Javascript/dommanipulation.png";
import CssManipulation from "../../Assets/Javascript/cssmanipulation.png";
import ResponsiveWebDesign from "../../Assets/Javascript/responsivewebdesign.png";
import FormHandling from "../../Assets/Javascript/formhandling.png";

const Javascript = () => {
  return (
    <div className="home">
      <img className="img" alt="Laptop" src={Laptop}></img>
      <div className="info">
        <div className="title">Learn the language of the web</div>
        <div className="desc">
          JavaScript is the world's most popular programming language. It's the language of the web, and it's everywhere. You can use it to add interactivity to web pages, create
          mobile apps, build games, and more.
        </div>
      </div>
      <div className="header">Fundamentals</div>
      <div className="items">
        <Item image={Introduction} title="Introduction" link="introduction" />
        <Item image={Variables} title="Variables" link="variables" />
        <Item image={Datatypes} title="Data Types" link="datatypes" />
        <Item image={Comments} title="Comments" link="comments" />
        <Item image={Operators} title="Operators" link="operators" />
        <Item image={StringMethods} title="String Methods" link="stringmethods" />
        <Item image={NumberMethods} title="Number Methods" link="numbermethods" />
        <Item image={DateAndTime} title="Date And Time" link="dateandtime" />
        <Item image={Functions} title="Functions" link="functions" />
        <Item image={Math} title="Math" link="math" />
        <Item image={ConditionalStatements} title="Conditional Statements" link="conditionalstatements" />
        <Item image={Loops} title="Loops" link="loops" />
        <Item image={Arrays} title="Arrays" link="arrays" />
        <Item image={ArrayMethods} title="Array Methods" link="arraymethods" />
        <Item image={Objects} title="Objects" link="objects" />
        <Item image={Events} title="Events" link="events" />
      </div>
      <div className="header">Intermediate</div>
      <div className="items">
        <Item image={DomManipulation} title="Dom Manipulation" link="dommanipulation" />
        <Item image={CssManipulation} title="Css Manipulation" link="cssmanipulation" />
        <Item image={ResponsiveWebDesign} title="Responsive Web Design" link="responsivewebdesign" />
        <Item image={FormHandling} title="Form Handling" link="formhandling" />
      </div>
    </div>
  );
};

export default Javascript;
