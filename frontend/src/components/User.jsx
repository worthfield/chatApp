import React from "react";
import useConversation from "../store/useConversation";
import { useSocketContext } from "../context/SocketContext";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(user._id);
  return (
    <ul
      onClick={() => setSelectedConversation(user)}
      className={`menu p-0 w-full border-b-2  ${
        isSelected ? "bg-gray-200" : ""
      }`}
    >
      <li>
        <div>
          <div className={`avatar placeholder ${isOnline ? 'online': ''}`}>
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
