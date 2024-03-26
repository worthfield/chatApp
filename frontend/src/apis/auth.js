import axios from "axios";
const signup = async (userData) => {
  try {
    const response = await axios.post("http://localhost:8000/auth/signup", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const LoggedIn =async(userData)=>{
  try {
    const response = await axios.post("http://localhost:8000/auth/signin",userData);
    return response.data;

  } catch (error) {
    throw error
    
  }
}
export { signup,signOut,LoggedIn };
