import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Javascript from "../Screens/Javascript/Javascript";
import Python from "../Screens/Python/Python";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/python" element={<Python />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
