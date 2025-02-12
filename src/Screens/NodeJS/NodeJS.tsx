import React from "react";
import Laptop from "../../Assets/bg.png";
import Item from "../../Components/Item";
import IntroductionToNodeJS from "../../Assets/NodeJS/1.png";
import EnvironmentSetup from "../../Assets/NodeJS/2.png";
import NodeJSBasics from "../../Assets/NodeJS/3.png";
import ModulesAndRequire from "../../Assets/NodeJS/4.png";
import CoreModules from "../../Assets/NodeJS/5.png";
import WorkingWithNpm from "../../Assets/NodeJS/6.png";
import FileSystemOperations from "../../Assets/NodeJS/7.png";
import HttpServerBasics from "../../Assets/NodeJS/8.png";
import RoutingInNodeJS from "../../Assets/NodeJS/9.png";
import AsyncProgrammingBasics from "../../Assets/NodeJS/10.png";
import StreamsAndBuffers from "../../Assets/NodeJS/11.png";
import ExpressJSBasics from "../../Assets/NodeJS/12.png";
import MiddlewareInExpress from "../../Assets/NodeJS/13.png";
import RestfulAPIs from "../../Assets/NodeJS/14.png";
import WorkingWithDatabases from "../../Assets/NodeJS/15.png";
import AuthenticationAuthorization from "../../Assets/NodeJS/16.png";
import ErrorHandling from "../../Assets/NodeJS/17.png";
import RealTimeCommunication from "../../Assets/NodeJS/18.png";
import ThirdPartyAPIs from "../../Assets/NodeJS/19.png";
import FileUploads from "../../Assets/NodeJS/20.png";
import TestingInNodeJS from "../../Assets/NodeJS/21.png";
import DeployingNodeJS from "../../Assets/NodeJS/22.png";
import PerformanceOptimization from "../../Assets/NodeJS/23.png";
import IntroductionToGraphQL from "../../Assets/NodeJS/24.png";
import FullStackDevelopment from "../../Assets/NodeJS/25.png";

const NodeJS = () => {
  return (
    <div className="home">
      <img className="img" alt="Laptop" src={Laptop}></img>
      <div className="info">
        <div className="title">Build Scalable Applications with Node.js</div>
        <div className="desc">
          Node.js is a powerful runtime that enables JavaScript to run server-side. Learn how to build scalable web applications, RESTful APIs, and real-time apps with Node.js.
        </div>
      </div>
      <div className="header">Fundamentals</div>
      <div className="items">
        <Item image={IntroductionToNodeJS} title="Introduction to Node.js" link="introduction-to-nodejs" />
        <Item image={EnvironmentSetup} title="Environment Setup" link="environment-setup" />
        <Item image={NodeJSBasics} title="Node.js Basics" link="nodejs-basics" />
        <Item image={ModulesAndRequire} title="Modules and Require" link="modules-and-require" />
        <Item image={CoreModules} title="Node.js Core Modules" link="nodejs-core-modules" />
        <Item image={WorkingWithNpm} title="Working with npm" link="working-with-npm" />
        <Item image={FileSystemOperations} title="File System Operations" link="file-system-operations" />
        <Item image={HttpServerBasics} title="HTTP Server Basics" link="http-server-basics" />
        <Item image={RoutingInNodeJS} title="Routing in Node.js" link="routing-in-nodejs" />
        <Item image={AsyncProgrammingBasics} title="Asynchronous Programming Basics" link="asynchronous-programming-basics" />
        <Item image={StreamsAndBuffers} title="Streams and Buffers" link="streams-and-buffers" />
      </div>
      <div className="header">Intermediate</div>
      <div className="items">
        <Item image={ExpressJSBasics} title="Express.js Basics" link="expressjs-basics" />
        <Item image={MiddlewareInExpress} title="Middleware in Express" link="middleware-in-express" />
        <Item image={RestfulAPIs} title="RESTful APIs" link="restful-apis" />
        <Item image={WorkingWithDatabases} title="Working with Databases" link="working-with-databases" />
        <Item image={AuthenticationAuthorization} title="Authentication and Authorization" link="authentication-and-authorization" />
        <Item image={ErrorHandling} title="Error Handling in Node.js" link="error-handling-in-nodejs" />
        <Item image={RealTimeCommunication} title="Real-time Communication" link="real-time-communication" />
        <Item image={ThirdPartyAPIs} title="Node.js and Third-Party APIs" link="third-party-apis" />
        <Item image={FileUploads} title="File Uploads" link="file-uploads" />
        <Item image={TestingInNodeJS} title="Testing in Node.js" link="testing-in-nodejs" />
        <Item image={DeployingNodeJS} title="Deploying Node.js Applications" link="deploying-nodejs-applications" />
        <Item image={PerformanceOptimization} title="Performance Optimization" link="performance-optimization" />
        <Item image={IntroductionToGraphQL} title="Introduction to GraphQL" link="introduction-to-graphql" />
        <Item image={FullStackDevelopment} title="Building a Full-Stack Application" link="building-a-full-stack-application" />
      </div>
    </div>
  );
};

export default NodeJS;
