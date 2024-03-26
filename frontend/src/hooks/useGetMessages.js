import React, { useState, useEffect } from "react";
import useConversation from "../store/useConversation";
import axios from "axios";
import { toast } from "react-toastify";
const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  const getMessages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/api/messages/${selectedConversation._id}`
      );
      const data = response.data;
      setMessages(data);
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
      setLoading(false);
    }
  };
  return { loading, messages };
};

export default useGetMessages;
