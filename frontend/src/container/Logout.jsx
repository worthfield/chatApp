import React from "react";
import { CiLogout } from "react-icons/ci";
import { signOut } from "../apis/auth";
import { useAuthContext } from "../context/authContext";

const Logout = () => {
    const {setAuthUser}= useAuthContext()
  const handleLogout = () => {
    try {
      const data = signOut();
      localStorage.removeItem("user-info");
      setAuthUser(null)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CiLogout size={30} className="m-2 cursor-pointer" onClick={handleLogout} />
  );
};

export default Logout;
