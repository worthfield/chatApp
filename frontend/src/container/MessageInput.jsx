import React from "react";
import { IoIosSearch } from "react-icons/io";

const MessageInput = () => {
  return (
    <div className="w-full px-6 absolute bottom-0 py-2 gap-2 flex  bg-gray-200">
      <div className=" w-full ">
        <input
          type="text"
          placeholder="Type a message"
          className="input input-bordered input-warning w-full focus:outline-none"
        />
      </div>
      <button>
        <IoIosSearch className="" size={24} />
      </button>
    </div>
  );
};

export default MessageInput;
