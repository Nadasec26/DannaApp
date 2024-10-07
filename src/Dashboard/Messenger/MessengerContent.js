import React, { useEffect } from "react";
import { styled } from "@mui/material";
import NewMessageInput from "./NewMessageInput.js";
import Messages from "./Messages/Messages.js";
import { getDirectChatHistory } from "../../realtimeCommunication/socketConnection.js";

const Wrapper = styled("div")({
  flexGrow: 1,
});

export default function MessengerContent({ chosenChatDetails }) {
  useEffect(() => {
    getDirectChatHistory({ receiverUserId: chosenChatDetails.id });
  }, []);
  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
}
