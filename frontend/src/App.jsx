import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './container/Home'
import Signin from "./components/Signin";
import Signup from "./components/Signup";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default App;
