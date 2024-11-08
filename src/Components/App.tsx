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
          <Route path="/python" element={<Python />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
