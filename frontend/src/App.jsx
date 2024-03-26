import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Signin from "./container/Signin";
import Signup from "./container/Signup";
import PrivateRoute from "./container/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
