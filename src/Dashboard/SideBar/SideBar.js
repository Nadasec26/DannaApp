import React from "react";
import { styled } from "@mui/material";
import CreateRoomButton from "./CreateRoomButton.js";
import { connect } from "react-redux";
import ActiveRoomButton from "./ActiveRoomButton.js";

const MainContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});

const SideBar = ({ activeRooms, isUserInRoom }) => {
  return (
    <MainContainer>
      <CreateRoomButton isUserInRoom={isUserInRoom} />
      {activeRooms.map((room) => (
        <ActiveRoomButton
          key={room.roomId}
          roomId={room.roomId}
          creatorUserName={room.creatorUserName}
          creatorProImage={room.creatorImage}
          amountOfParticipants={room.participants.length}
          isUserInRoom={isUserInRoom}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(SideBar);
