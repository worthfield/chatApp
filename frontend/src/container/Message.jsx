import React from "react";
import { useAuthContext } from "../context/authContext";
import useConversation from "../store/useConversation";
import { extractTime } from "../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bgColor = fromMe ? "bg-warning " : "bg-gray-600 text-white";
  const formattedTime = extractTime(message.createdAt)
  return (
    <div className={`chat px-2 ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>

      <div className={`chat-bubble  text-black ${bgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50">Sent at {formattedTime}</div>
    </div>
  );
};

export default Message;
