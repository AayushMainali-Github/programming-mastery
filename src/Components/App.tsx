import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Javascript from "../Screens/Javascript/Javascript";
import Python from "../Screens/Python/Python";
import Layout from "./Layout";

// JavaScript Chapter Imports
import Introduction from "../Screens/Javascript/Chapters/Introduction";
import Variables from "../Screens/Javascript/Chapters/Variables";
import Datatypes from "../Screens/Javascript/Chapters/Datatypes";
import Comments from "../Screens/Javascript/Chapters/Comments";
import Operators from "../Screens/Javascript/Chapters/Operators";
import StringMethods from "../Screens/Javascript/Chapters/StringMethods";
import NumberMethods from "../Screens/Javascript/Chapters/NumberMethods";
import DateAndTime from "../Screens/Javascript/Chapters/DateAndTime";
import Functions from "../Screens/Javascript/Chapters/Functions";
import Math from "../Screens/Javascript/Chapters/Math";
import ConditionalStatements from "../Screens/Javascript/Chapters/ConditionalStatements";
import Loops from "../Screens/Javascript/Chapters/Loops";
import Arrays from "../Screens/Javascript/Chapters/Arrays";
import ArrayMethods from "../Screens/Javascript/Chapters/ArrayMethods";
import Objects from "../Screens/Javascript/Chapters/Objects";
import Events from "../Screens/Javascript/Chapters/Events";
import DomManipulation from "../Screens/Javascript/Chapters/DomManipulation";
import CssManipulation from "../Screens/Javascript/Chapters/CssManipulation";
import ResponsiveWebDesign from "../Screens/Javascript/Chapters/ResponsiveWebDesign";
import FormHandling from "../Screens/Javascript/Chapters/FormHandling";
import AsynchronousProgramming from "../Screens/Javascript/Chapters/AsynchronousProgramming";
import PromisesAndFetchAPI from "../Screens/Javascript/Chapters/PromisesAndFetchAPI";
import AsyncAwait from "../Screens/Javascript/Chapters/AsyncAwait";
import ErrorHandling from "../Screens/Javascript/Chapters/ErrorHandling";
import LocalStorageSessionStorage from "../Screens/Javascript/Chapters/LocalStorageSessionStorage";
import WebAPIsOverview from "../Screens/Javascript/Chapters/WebAPIsOverview";
import ModulesAndImports from "../Screens/Javascript/Chapters/ModulesAndImports";

// Python Chapter Imports
import PythonIntroduction from "../Screens/Python/Chapters/Introduction";
import EnvironmentSetup from "../Screens/Python/Chapters/EnvironmentSetup";
import Syntax from "../Screens/Python/Chapters/Syntax";
import PythonVariables from "../Screens/Python/Chapters/Variables";
import InputOutput from "../Screens/Python/Chapters/InputOutput";
import PythonOperators from "../Screens/Python/Chapters/Operators";
import PythonConditionalStatements from "../Screens/Python/Chapters/ConditionalStatements";
import PythonLoops from "../Screens/Python/Chapters/Loops";
import FunctionsModules from "../Screens/Python/Chapters/FunctionsModules";
import Lists from "../Screens/Python/Chapters/Lists";
import Tuples from "../Screens/Python/Chapters/Tuples";
import Dictionaries from "../Screens/Python/Chapters/Dictionaries";
import Sets from "../Screens/Python/Chapters/Sets";
import StringManipulation from "../Screens/Python/Chapters/StringManipulation";
import FileHandling from "../Screens/Python/Chapters/FileHandling";
import PythonErrorHandling from "../Screens/Python/Chapters/ErrorHandling";
import CommentsDocstrings from "../Screens/Python/Chapters/CommentsDocstrings";
import MathOperations from "../Screens/Python/Chapters/MathOperations";
import OOP from "../Screens/Python/Chapters/OOP";
import Inheritance from "../Screens/Python/Chapters/Inheritance";
import AdvancedFunctions from "../Screens/Python/Chapters/AdvancedFunctions";
import ListComprehensions from "../Screens/Python/Chapters/ListComprehensions";
import Decorators from "../Screens/Python/Chapters/Decorators";
import Generators from "../Screens/Python/Chapters/Generators";
import ExternalLibraries from "../Screens/Python/Chapters/ExternalLibraries";
import ModulesPackages from "../Screens/Python/Chapters/ModulesPackages";
import JSONCSV from "../Screens/Python/Chapters/JSONCSV";
import CustomExceptions from "../Screens/Python/Chapters/CustomExceptions";
import DateTimeHandling from "../Screens/Python/Chapters/DateTimeHandling";
import RegularExpressions from "../Screens/Python/Chapters/RegularExpressions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* JavaScript Routes */}
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/javascript/introduction" element={<Introduction />} />
          <Route path="/javascript/variables" element={<Variables />} />
          <Route path="/javascript/datatypes" element={<Datatypes />} />
          <Route path="/javascript/comments" element={<Comments />} />
          <Route path="/javascript/operators" element={<Operators />} />
          <Route path="/javascript/stringmethods" element={<StringMethods />} />
          <Route path="/javascript/numbermethods" element={<NumberMethods />} />
          <Route path="/javascript/dateandtime" element={<DateAndTime />} />
          <Route path="/javascript/functions" element={<Functions />} />
          <Route path="/javascript/math" element={<Math />} />
          <Route path="/javascript/conditionalstatements" element={<ConditionalStatements />} />
          <Route path="/javascript/loops" element={<Loops />} />
          <Route path="/javascript/arrays" element={<Arrays />} />
          <Route path="/javascript/arraymethods" element={<ArrayMethods />} />
          <Route path="/javascript/objects" element={<Objects />} />
          <Route path="/javascript/events" element={<Events />} />
          <Route path="/javascript/dommanipulation" element={<DomManipulation />} />
          <Route path="/javascript/cssmanipulation" element={<CssManipulation />} />
          <Route path="/javascript/responsivedesign" element={<ResponsiveWebDesign />} />
          <Route path="/javascript/formhandling" element={<FormHandling />} />
          <Route path="/javascript/asynchronousprogramming" element={<AsynchronousProgramming />} />
          <Route path="/javascript/promisesandfetchapi" element={<PromisesAndFetchAPI />} />
          <Route path="/javascript/asyncawait" element={<AsyncAwait />} />
          <Route path="/javascript/errorhandling" element={<ErrorHandling />} />
          <Route path="/javascript/modulesandimports" element={<ModulesAndImports />} />
          <Route path="/javascript/localstorage" element={<LocalStorageSessionStorage />} />
          <Route path="/javascript/webapisoverview" element={<WebAPIsOverview />} />

          {/* Python Routes */}
          <Route path="/python" element={<Python />} />
          <Route path="/python/introduction" element={<PythonIntroduction />} />
          <Route path="/python/environmentsetup" element={<EnvironmentSetup />} />
          <Route path="/python/syntax" element={<Syntax />} />
          <Route path="/python/variables" element={<PythonVariables />} />
          <Route path="/python/inputoutput" element={<InputOutput />} />
          <Route path="/python/operators" element={<PythonOperators />} />
          <Route path="/python/conditionalstatements" element={<PythonConditionalStatements />} />
          <Route path="/python/loops" element={<PythonLoops />} />
          <Route path="/python/functionsmodules" element={<FunctionsModules />} />
          <Route path="/python/lists" element={<Lists />} />
          <Route path="/python/tuples" element={<Tuples />} />
          <Route path="/python/dictionaries" element={<Dictionaries />} />
          <Route path="/python/sets" element={<Sets />} />
          <Route path="/python/stringmanipulation" element={<StringManipulation />} />
          <Route path="/python/filehandling" element={<FileHandling />} />
          <Route path="/python/errorhandling" element={<PythonErrorHandling />} />
          <Route path="/python/commentsdocstrings" element={<CommentsDocstrings />} />
          <Route path="/python/mathoperations" element={<MathOperations />} />
          <Route path="/python/oop" element={<OOP />} />
          <Route path="/python/inheritance" element={<Inheritance />} />
          <Route path="/python/advancedfunctions" element={<AdvancedFunctions />} />
          <Route path="/python/listcomprehensions" element={<ListComprehensions />} />
          <Route path="/python/decorators" element={<Decorators />} />
          <Route path="/python/generators" element={<Generators />} />
          <Route path="/python/externallibraries" element={<ExternalLibraries />} />
          <Route path="/python/modulespackages" element={<ModulesPackages />} />
          <Route path="/python/jsoncsv" element={<JSONCSV />} />
          <Route path="/python/customexceptions" element={<CustomExceptions />} />
          <Route path="/python/datetimehandling" element={<DateTimeHandling />} />
          <Route path="/python/regex" element={<RegularExpressions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
