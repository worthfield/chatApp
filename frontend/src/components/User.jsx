import React from "react";
import useConversation from "../store/useConversation";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  return (
    <ul
      onClick={() => setSelectedConversation(user)}
      className={`menu p-0 w-full border-b-2  ${
        isSelected ? "bg-gray-200" : ""
      }`}
    >
      <li>
        <div>
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-16">
              <span className="text-3xl">D</span>
            </div>
          </div>
          {user.fullname}
        </div>
      </li>
    </ul>
  );
};

export default User;
