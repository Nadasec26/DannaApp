import { setMessages } from "../../store/actions/chatActions.js";
import store from "../../store/store.js";
import { jwtDecode } from "jwt-decode";

const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const token = jwtDecode(localStorage.getItem("token"));
  const userId = token?.userId;

  if (receiverId && userId) {
    const userInConversation = [receiverId, userId];

    updateChatHistoryIfSameConversationActive({
      participants,
      userInConversation,
      messages,
    });
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  userInConversation,
  messages,
}) => {
  const result = participants.every(function (participantId) {
    return userInConversation.includes(participantId._id);
  });

  if (result) {
    store.dispatch(setMessages(messages));
  }
};

export { updateDirectChatHistoryIfActive };
