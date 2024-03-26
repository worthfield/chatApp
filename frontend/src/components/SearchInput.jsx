import {useState} from "react";
import { IoIosSearch } from "react-icons/io";
import { toast } from "react-toastify";
import useConversation from "../store/useConversation";
import useGetUsers from "../hooks/useGetUsers";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { users } = useGetUsers();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be atleast 3 characters long");
    }
    const user = users.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );
    if (user) {
      setSelectedConversation(user);
      setSearch("");
    }
    else{
      toast.error("No user found")
    }
  };
  return (
    <div className="form-control w-full mb-2 ">
      <div className="flex gap-1 w-full justify-center items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type here"
          className="input w-10/12 input-sm focus:outline-none bg-base-200"
        />
        <button onClick={handleSubmit}>
          <IoIosSearch size={24} />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
