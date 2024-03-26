import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessages from "../hooks/useSendMessages";

const MessageInput = () => {
  const [text, setText] = useState("");
  const { loading, sendMessages } = useSendMessages();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") return;
    await sendMessages(text);
    setText('')
  };
  return (
    <form onSubmit={handleSubmit} className="w-full px-6 bottom-0 py-2 gap-2 flex  bg-gray-200">
      <div className=" w-full relative">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message"
          className="input input-bordered input-warning w-full focus:outline-none"
        />
      </div>
      <button type='submit'  className=''>
					{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
				</button>
    </form>
  );
};

export default MessageInput;
