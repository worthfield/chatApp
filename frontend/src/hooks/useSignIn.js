import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { toast } from "react-toastify";

const useSignIn = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const signin = async (values) => {
    const success = validation(values);
    if (!success) return;
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/signin",
        values
      );
      const data = response.data;
      localStorage.setItem("user-info", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };
  return { loading, signin };
};

export default useSignIn;
const validation = ({ username, password }) => {
  if (username === "" || password === "") {
    toast.error("All field are required", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return false;
  }
  return true;
};
