import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/authContext";

const useGetUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/users", {
          withCredentials: true,
          credentials: "include",
        });

        const info = response.data;

        setUsers(info);
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
    getUsers();
  }, []);

  return { loading, users };
};

export default useGetUsers;
