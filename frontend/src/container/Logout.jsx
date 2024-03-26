import React from "react";
import { CiLogout } from "react-icons/ci";
import { useAuthContext } from "../context/authContext";
import useSignout from "../hooks/useSignout";

const Logout = () => {
  const { setAuthUser } = useAuthContext();
  const { signOut } = useSignout();
  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      setAuthUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CiLogout size={30} className="m-2 cursor-pointer" onClick={handleLogout} />
  );
};

export default Logout;
