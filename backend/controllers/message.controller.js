import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
const sendMessages = async (req, res, next) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    let conversations = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversations) {
      conversations = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversations.messages.push(newMessage._id);
    }
    await Promise.all([conversations.save(), newMessage.save()]);
    return res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};
const getMessage = async (req, res, next) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    const conversations = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");
    if (!conversations) return res.status(200).json([]);
    return res.status(200).json(conversations.messages);
  } catch (error) {
    next(error);
  }
};
export default { sendMessages, getMessage };
