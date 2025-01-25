import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/Home";
import HTML from "../Screens/HTML/HTML";
import CSS from "../Screens/CSS/CSS";
import Javascript from "../Screens/Javascript/Javascript";
import NodeJS from "../Screens/NodeJS/NodeJS";
import Typescript from "../Screens/Typescript/Typescript";
import Python from "../Screens/Python/Python";
import C from "../Screens/C/C";
import Cpp from "../Screens/Cpp/Cpp";
import Java from "../Screens/Java/Java";
import Sql from "../Screens/SQL/SQL";
import Layout from "./Layout";

// HTML Chapter Imports
import HTMLIntroduction from "../Screens/HTML/Chapters/Introduction";
import BasicStructure from "../Screens/HTML/Chapters/BasicStructure";
import HeadingsParagraphs from "../Screens/HTML/Chapters/HeadingsParagraphs";
import HTMLLists from "../Screens/HTML/Chapters/Lists";
import LinksAnchors from "../Screens/HTML/Chapters/LinksAnchors";
import Images from "../Screens/HTML/Chapters/Images";
import Tables from "../Screens/HTML/Chapters/Tables";
import Forms from "../Screens/HTML/Chapters/Forms";
import SemanticElements from "../Screens/HTML/Chapters/Semantic";
import AttributesMetadata from "../Screens/HTML/Chapters/AttributesMetadata";
import HTML5Elements from "../Screens/HTML/Chapters/HTML5Elements";
import MediaElements from "../Screens/HTML/Chapters/MediaElements";
import FormsAdvanced from "../Screens/HTML/Chapters/FormsAdvanced";
import DataTables from "../Screens/HTML/Chapters/DataTables";
import IframeEmbedding from "../Screens/HTML/Chapters/IframeEmbedding";
import GlobalAttributes from "../Screens/HTML/Chapters/GlobalAttributes";
import Entities from "../Screens/HTML/Chapters/Entities";
import ARIAAttributes from "../Screens/HTML/Chapters/ARIAAttributes";
import AnchorTargets from "../Screens/HTML/Chapters/AnchorTargets";
import CustomDataAttributes from "../Screens/HTML/Chapters/CustomDataAttributes";
import BestPractices from "../Screens/HTML/Chapters/BestPractices";
import FileOrganization from "../Screens/HTML/Chapters/FileOrganization";

// CSS Chapter Imports
import CSSIntroduction from "../Screens/CSS/Chapters/Introduction";
import CSSSyntaxAndSelectors from "../Screens/CSS/Chapters/SyntaxAndSelectors";
import ColorsAndBackgrounds from "../Screens/CSS/Chapters/ColorsAndBackgrounds";
import TextStyling from "../Screens/CSS/Chapters/TextStyling";
import BoxModel from "../Screens/CSS/Chapters/BoxModel";
import Positioning from "../Screens/CSS/Chapters/Positioning";
import FlexboxBasics from "../Screens/CSS/Chapters/FlexboxBasics";
import GridBasics from "../Screens/CSS/Chapters/GridBasics";
import CSSUnits from "../Screens/CSS/Chapters/Units";
import LinksAndButtons from "../Screens/CSS/Chapters/LinksAndButtons";
import ListsStyling from "../Screens/CSS/Chapters/ListsStyling";
import FormsStyling from "../Screens/CSS/Chapters/FormsStyling";
import MediaQueries from "../Screens/CSS/Chapters/MediaQueries";
import AdvancedSelectors from "../Screens/CSS/Chapters/AdvancedSelectors";
import CSSVariables from "../Screens/CSS/Chapters/Variables";
import TransitionsAndAnimations from "../Screens/CSS/Chapters/TransitionsAndAnimations";
import Transformations from "../Screens/CSS/Chapters/Transformations";
import AdvancedFlexbox from "../Screens/CSS/Chapters/AdvancedFlexbox";
import AdvancedGrid from "../Screens/CSS/Chapters/AdvancedGrid";
import CustomFontsAndTypography from "../Screens/CSS/Chapters/CustomFontsAndTypography";
import SpecificityAndInheritance from "../Screens/CSS/Chapters/SpecificityAndInheritance";
import ShadowEffects from "../Screens/CSS/Chapters/ShadowEffects";
import ClippingAndMasking from "../Screens/CSS/Chapters/ClippingAndMasking";
import CSSFrameworks from "../Screens/CSS/Chapters/Frameworks";

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

// C Chapter Imports
import CIntroduction from "../Screens/C/Chapters/Introduction";
import CEnvironmentSetup from "../Screens/C/Chapters/EnvironmentSetup";
import CSyntax from "../Screens/C/Chapters/Syntax";
import CVariables from "../Screens/C/Chapters/Variables";
import CInputOutput from "../Screens/C/Chapters/InputOutput";
import COperators from "../Screens/C/Chapters/Operators";
import CConditionalStatements from "../Screens/C/Chapters/ConditionalStatements";
import CLoops from "../Screens/C/Chapters/Loops";
import CFunctions from "../Screens/C/Chapters/Functions";
import CArraysStrings from "../Screens/C/Chapters/ArraysStrings";
import CPointers from "../Screens/C/Chapters/Pointers";
import CFileHandling from "../Screens/C/Chapters/FileHandling";
import Maintenance from "../Screens/Misc/Maintenance";
import Error from "../Screens/Misc/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* HTML Routes */}
          <Route path="/html" element={<HTML />} />
          <Route path="/html/introduction-to-html" element={<HTMLIntroduction />} />
          <Route path="/html/basic-document-structure" element={<BasicStructure />} />
          <Route path="/html/headings-and-paragraphs" element={<HeadingsParagraphs />} />
          <Route path="/html/lists" element={<HTMLLists />} />
          <Route path="/html/links-and-anchors" element={<LinksAnchors />} />
          <Route path="/html/images" element={<Images />} />
          <Route path="/html/tables" element={<Tables />} />
          <Route path="/html/forms" element={<Forms />} />
          <Route path="/html/semantic-elements" element={<SemanticElements />} />
          <Route path="/html/attributes-and-metadata" element={<AttributesMetadata />} />
          <Route path="/html/html5-elements" element={<HTML5Elements />} />
          <Route path="/html/media-elements" element={<MediaElements />} />
          <Route path="/html/forms-advanced" element={<FormsAdvanced />} />
          <Route path="/html/data-tables" element={<DataTables />} />
          <Route path="/html/iframe-embedding" element={<IframeEmbedding />} />
          <Route path="/html/global-attributes" element={<GlobalAttributes />} />
          <Route path="/html/html-entities" element={<Entities />} />
          <Route path="/html/aria-attributes" element={<ARIAAttributes />} />
          <Route path="/html/anchor-targets" element={<AnchorTargets />} />
          <Route path="/html/custom-data-attributes" element={<CustomDataAttributes />} />
          <Route path="/html/best-practices" element={<BestPractices />} />
          <Route path="/html/html-file-organization" element={<FileOrganization />} />

          {/* CSS Routes */}
          <Route path="/css" element={<CSS />} />
          <Route path="/css/introduction" element={<CSSIntroduction />} />
          <Route path="/css/syntax-and-selectors" element={<CSSSyntaxAndSelectors />} />
          <Route path="/css/colors-and-backgrounds" element={<ColorsAndBackgrounds />} />
          <Route path="/css/text-styling" element={<TextStyling />} />
          <Route path="/css/box-model" element={<BoxModel />} />
          <Route path="/css/positioning" element={<Positioning />} />
          <Route path="/css/flexbox-basics" element={<FlexboxBasics />} />
          <Route path="/css/grid-basics" element={<GridBasics />} />
          <Route path="/css/units" element={<CSSUnits />} />
          <Route path="/css/links-and-buttons" element={<LinksAndButtons />} />
          <Route path="/css/lists-styling" element={<ListsStyling />} />
          <Route path="/css/forms-styling" element={<FormsStyling />} />
          <Route path="/css/media-queries" element={<MediaQueries />} />
          <Route path="/css/advanced-selectors" element={<AdvancedSelectors />} />
          <Route path="/css/variables" element={<CSSVariables />} />
          <Route path="/css/transitions-and-animations" element={<TransitionsAndAnimations />} />
          <Route path="/css/transformations" element={<Transformations />} />
          <Route path="/css/advanced-flexbox" element={<AdvancedFlexbox />} />
          <Route path="/css/advanced-grid" element={<AdvancedGrid />} />
          <Route path="/css/custom-fonts-and-typography" element={<CustomFontsAndTypography />} />
          <Route path="/css/specificity-and-inheritance" element={<SpecificityAndInheritance />} />
          <Route path="/css/shadow-effects" element={<ShadowEffects />} />
          <Route path="/css/clipping-and-masking" element={<ClippingAndMasking />} />
          <Route path="/css/frameworks" element={<CSSFrameworks />} />

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

          {/* Node JS Routes */}
          <Route path="/nodejs" element={<Maintenance />} />

          {/* Typescript Routes */}
          <Route path="/typescript" element={<Maintenance />} />

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

          {/* C Programming Routes */}
          <Route path="/c" element={<C />} />
          <Route path="/c/introduction" element={<CIntroduction />} />
          <Route path="/c/environmentsetup" element={<CEnvironmentSetup />} />
          <Route path="/c/syntax" element={<CSyntax />} />
          <Route path="/c/variables" element={<CVariables />} />
          <Route path="/c/inputoutput" element={<CInputOutput />} />
          <Route path="/c/operators" element={<COperators />} />
          <Route path="/c/conditionalstatements" element={<CConditionalStatements />} />
          <Route path="/c/loops" element={<CLoops />} />
          <Route path="/c/functions" element={<CFunctions />} />
          <Route path="/c/arraysstrings" element={<CArraysStrings />} />
          <Route path="/c/pointers" element={<CPointers />} />
          <Route path="/c/filehandling" element={<CFileHandling />} />

          {/* C++ Routes */}
          <Route path="/cpp" element={<Maintenance />} />

          {/* Java Routes */}
          <Route path="/java" element={<Maintenance />} />

          {/* SQL Routes */}
          <Route path="/sql" element={<Maintenance />} />

          {/* Error */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
