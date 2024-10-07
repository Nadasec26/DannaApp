import React from "react";
import { styled } from "@mui/material";
import { connect } from "react-redux";
import WelcomeMessage from "./WelcomeMessage.js";
import MessengerContent from "./MessengerContent.js";

const MainContainer = styled("div")({
  backgroundColor: "#36393f",
  display: "flex",
  height: "90%",
  width: "100%",
});

const Messenger = ({ chosenChatDetails }) => {
  return (
    <MainContainer>
      {!chosenChatDetails ? (
        <WelcomeMessage />
      ) : (
        <MessengerContent chosenChatDetails={chosenChatDetails} />
      )}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(Messenger);
