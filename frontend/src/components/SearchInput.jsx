import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <div className="form-control w-full mb-2 ">
      <div className="flex gap-1 w-full justify-center items-center">
        <input
          type="text"
          placeholder="Type here"
          className="input w-10/12 input-sm focus:outline-none bg-base-200"
        />
        <button>
          <IoIosSearch size={24} />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
