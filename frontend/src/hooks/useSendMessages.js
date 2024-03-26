import React, { useState } from "react";
import useConversation from "../store/useConversation";
import axios from "axios";
import { toast } from "react-toastify";
const useSendMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessages = async (message) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `/api/messages/send/${selectedConversation._id}`,
        {message}
      );
      const data = response.data;
      setMessages([...messages, data]);
      setLoading(false)
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
    }
  };
  return { loading, sendMessages };
};

export default useSendMessages;
