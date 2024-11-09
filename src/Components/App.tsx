import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Javascript from "../Screens/Javascript/Javascript";
import Python from "../Screens/Python/Python";
import Introduction from "../Screens/Javascript/Chapters/Introduction";
import Variables from "../Screens/Javascript/Chapters/Variables";
import Datatypes from "../Screens/Javascript/Chapters/Datatypes";
import Comments from "../Screens/Javascript/Chapters/Comments";
import Layout from "./Layout";
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
import PromisesAndFetchAPI from "../Screens/Javascript/Chapters/PromisesAndFetchAPI ";
import AsyncAwait from "../Screens/Javascript/Chapters/AsyncAwait";
import ErrorHandling from "../Screens/Javascript/Chapters/ErrorHandling";
import LocalStorageSessionStorage from "../Screens/Javascript/Chapters/LocalStorageSessionStorage";
import WebAPIsOverview from "../Screens/Javascript/Chapters/WebAPIsOverview";
import ModulesAndImports from "../Screens/Javascript/Chapters/ModulesAndImports";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
          <Route path="/python" element={<Python />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// Asynchronous Programming
// Promises and Fetch API
// Async/Await
// Error Handling
// Modules and Imports
// Local Storage and Session Storage
// Web APIs Overview
// JSON and Data Parsing
// Regular Expressions
// Event Delegation
// Timers and Intervals
// Working with Canvas API
