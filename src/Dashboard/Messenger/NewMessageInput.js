import { styled } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { sendDirectMessage } from "../../realtimeCommunication/socketConnection.js";

const MainContainer = styled("div")({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px 20px",
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  height: "100%",
  width: "100%",
  color: "white",
  border: "none",
  borderRadius: "8px 0 0 8px",
  fontSize: "14px",
  padding: "0 10px",
  outline: "none",
});

const NewMessageInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = useState("");

  const handleMessageValueChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") handleSendMessage();
  };

  const handleSendMessage = () => {
    if (message.trim().length > 0) {
      sendDirectMessage({
        receiverUserId: chosenChatDetails.id,
        content: message,
      });
    }
    setMessage("");
  };

  return (
    <MainContainer>
      <Input
        placeholder={`Write Message to ${chosenChatDetails.name}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
      />
      <button
        className="btn btn-success h-100 px-5"
        style={{ borderRadius: "0px 8px 8px 0" }}
        onClick={handleSendMessage}
      >
        send
      </button>
    </MainContainer>
  );
};
const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(NewMessageInput);
