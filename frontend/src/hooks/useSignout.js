import axios from "axios";

const useSignout = () => {
  const signOut = async () => {
    try {
      const response = await axios.post("/api/auth/signout");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  return { signOut };
};

export default useSignout;
