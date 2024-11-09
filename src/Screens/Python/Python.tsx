import React from "react";
import Laptop from "../../Assets/bg.png";
import Item from "../../Components/Item";
import Introduction from "../../Assets/Python/introduction.png";
import EnvironmentSetup from "../../Assets/Python/environmentsetup.png";
import Syntax from "../../Assets/Python/syntax.png";
import Variables from "../../Assets/Python/variables.png";
import InputOutput from "../../Assets/Python/inputoutput.png";
import Operators from "../../Assets/Python/operators.png";
import ConditionalStatements from "../../Assets/Python/conditionalstatements.png";
import Loops from "../../Assets/Python/loops.png";
import FunctionsModules from "../../Assets/Python/functionsmodules.png";
import Lists from "../../Assets/Python/lists.png";
import Tuples from "../../Assets/Python/tuples.png";
import Dictionaries from "../../Assets/Python/dictionaries.png";
import Sets from "../../Assets/Python/sets.png";
import StringManipulation from "../../Assets/Python/stringmanipulation.png";
import FileHandling from "../../Assets/Python/filehandling.png";
import ErrorHandling from "../../Assets/Python/errorhandling.png";
import CommentsDocstrings from "../../Assets/Python/commentsdocstrings.png";
import MathOperations from "../../Assets/Python/mathoperations.png";
import OOP from "../../Assets/Python/oop.png";
import Inheritance from "../../Assets/Python/inheritance.png";
import AdvancedFunctions from "../../Assets/Python/advancedfunctions.png";
import ListComprehensions from "../../Assets/Python/listcomprehensions.png";
import Decorators from "../../Assets/Python/decorators.png";
import Generators from "../../Assets/Python/generators.png";
import ExternalLibraries from "../../Assets/Python/externallibraries.png";
import ModulesPackages from "../../Assets/Python/modulespackages.png";
import JSONCSV from "../../Assets/Python/jsoncsv.png";
import CustomExceptions from "../../Assets/Python/customexceptions.png";
import DateTimeHandling from "../../Assets/Python/datetimehandling.png";
import RegularExpressions from "../../Assets/Python/regex.png";

const Python = () => {
  return (
    <div className="home">
      <img className="img" alt="Laptop" src={Laptop}></img>
      <div className="info">
        <div className="title">Master Python Programming</div>
        <div className="desc">
          Python is one of the most popular programming languages, known for its simplicity and versatility. Whether you want to develop web apps, data science models, or automate
          tasks, Python is the go-to language.
        </div>
      </div>
      <div className="header">Fundamentals</div>
      <div className="items">
        <Item image={Introduction} title="Introduction to Python" link="introduction" />
        <Item image={EnvironmentSetup} title="Setting Up the Environment" link="environmentsetup" />
        <Item image={Syntax} title="Basic Syntax and Structure" link="syntax" />
        <Item image={Variables} title="Variables and Data Types" link="variables" />
        <Item image={InputOutput} title="Input and Output" link="inputoutput" />
        <Item image={Operators} title="Basic Operators" link="operators" />
        <Item image={ConditionalStatements} title="Conditional Statements" link="conditionalstatements" />
        <Item image={Loops} title="Loops (For, While)" link="loops" />
        <Item image={FunctionsModules} title="Functions and Modules" link="functionsmodules" />
        <Item image={Lists} title="Lists and List Methods" link="lists" />
        <Item image={Tuples} title="Tuples" link="tuples" />
        <Item image={Dictionaries} title="Dictionaries and Dictionary Methods" link="dictionaries" />
        <Item image={Sets} title="Sets and Set Methods" link="sets" />
        <Item image={StringManipulation} title="String Manipulation" link="stringmanipulation" />
        <Item image={FileHandling} title="File Handling" link="filehandling" />
        <Item image={ErrorHandling} title="Error Handling with Try/Except" link="errorhandling" />
        <Item image={CommentsDocstrings} title="Comments and Docstrings" link="commentsdocstrings" />
        <Item image={MathOperations} title="Basic Math Operations" link="mathoperations" />
      </div>
      <div className="header">Intermediate</div>
      <div className="items">
        <Item image={OOP} title="Classes and Objects (OOP)" link="oop" />
        <Item image={Inheritance} title="Inheritance and Polymorphism" link="inheritance" />
        <Item image={AdvancedFunctions} title="Advanced Functions (Lambda, Map, Filter)" link="advancedfunctions" />
        <Item image={ListComprehensions} title="List Comprehensions" link="listcomprehensions" />
        <Item image={Decorators} title="Decorators" link="decorators" />
        <Item image={Generators} title="Generators" link="generators" />
        <Item image={ExternalLibraries} title="Working with External Libraries" link="externallibraries" />
        <Item image={ModulesPackages} title="Modules and Packages" link="modulespackages" />
        <Item image={JSONCSV} title="Working with JSON and CSV Files" link="jsoncsv" />
        <Item image={CustomExceptions} title="Exception Handling (Custom Exceptions)" link="customexceptions" />
        <Item image={DateTimeHandling} title="Date and Time Handling" link="datetimehandling" />
        <Item image={RegularExpressions} title="Regular Expressions" link="regex" />
      </div>
    </div>
  );
};

export default Python;
