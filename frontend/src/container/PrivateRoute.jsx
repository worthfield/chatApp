import React from "react";
import { useAuthContext } from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { authUser } = useAuthContext();

  return <>{authUser ? <Outlet /> : <Navigate to="/signin" />}</>;
};

export default PrivateRoute;
