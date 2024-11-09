import React from "react";
import Laptop from "../../Assets/bg.png";
import Item from "../../Components/Item";
import Introduction from "../../Assets/C/introduction.png";
import EnvironmentSetup from "../../Assets/C/environmentsetup.png";
import Syntax from "../../Assets/C/syntax.png";
import Variables from "../../Assets/C/variables.png";
import InputOutput from "../../Assets/C/inputoutput.png";
import Operators from "../../Assets/C/operators.png";
import ConditionalStatements from "../../Assets/C/conditionalstatements.png";
import Loops from "../../Assets/C/loops.png";
import Functions from "../../Assets/C/functions.png";
import ArraysStrings from "../../Assets/C/arraysstrings.png";
import Pointers from "../../Assets/C/pointers.png";
import FileHandling from "../../Assets/C/filehandling.png";

const C = () => {
  return (
    <div className="home">
      <img className="img" alt="Laptop" src={Laptop}></img>
      <div className="info">
        <div className="title">Learn C Programming Fundamentals</div>
        <div className="desc">
          C is a powerful general-purpose programming language that is excellent for developing firmware or portable applications. This course will guide you through the
          fundamental concepts and help you build a solid foundation in C programming.
        </div>
      </div>
      <div className="header">Fundamentals</div>
      <div className="items">
        <Item image={Introduction} title="Introduction to C Programming" link="introduction" />
        <Item image={EnvironmentSetup} title="Environment Setup" link="environmentsetup" />
        <Item image={Syntax} title="Basic Syntax and Structure" link="syntax" />
        <Item image={Variables} title="Variables and Data Types" link="variables" />
        <Item image={InputOutput} title="Input and Output" link="inputoutput" />
        <Item image={Operators} title="Operators in C" link="operators" />
        <Item image={ConditionalStatements} title="Conditional Statements" link="conditionalstatements" />
        <Item image={Loops} title="Loops in C" link="loops" />
        <Item image={Functions} title="Functions in C" link="functions" />
        <Item image={ArraysStrings} title="Arrays and Strings" link="arraysstrings" />
        <Item image={Pointers} title="Pointers" link="pointers" />
        <Item image={FileHandling} title="File Handling" link="filehandling" />
      </div>
    </div>
  );
};

export default C;
