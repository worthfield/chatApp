import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuthContext } from "../context/authContext";
const useSignUp = () => {
  const { setAuthUser } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const signup = async (values) => {
    const success = validation(values);
    if (!success) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/auth/signup",
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

  return { loading, signup };
};
export default useSignUp;

const validation = ({ fullname, username, password, confirmPassword }) => {
  if (
    fullname === "" ||
    username === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
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
  if (password !== confirmPassword) {
    toast.error("Password doesn't match", {
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
  if (password.length < 6) {
    toast.error("Password should be atleast 6 characters", {
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
