import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Conversation from "./Conversation";

const Home = () => {
  return (
    <div className="flex min-h-screen max-h-screen bg-base-200  border-2  ">
      <Sidebar />
      <Conversation />
    </div>
  );
};

export default Home;
