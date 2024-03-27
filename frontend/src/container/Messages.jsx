import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages()
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
    }, 100);
  
  }, [messages])
  

  return (
    <div className="overflow-y-auto h-full ">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id}
          ref={lastMessageRef}
          >

            <Message key={message._id} message={message} />
          </div>
        ))}
      {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
