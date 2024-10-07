import React, { useState } from "react";
import { styled } from "@mui/material";
import ResizeRoomButton from "./ResizeRoomButton.js";
import VideosContainer from "./VideosContainer.js";
import RoomButtons from "./RoomButtons/RoomButtons.js";

const MainContainer = styled("div")({
  position: "absolute",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#202225",
});

const fullScreenRoomStyle = {
  width: "100%",
  height: "100vh",
};

const minimizeRoomStyle = {
  bottom: "0",
  right: "0",
  width: "30%",
  height: "40vh",
};

export default function Room() {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);

  const roomResizeHandler = () => {
    setIsRoomMinimized(!isRoomMinimized);
  };

  return (
    <MainContainer
      style={isRoomMinimized ? minimizeRoomStyle : fullScreenRoomStyle}
    >
      <VideosContainer />
      <RoomButtons />
      <ResizeRoomButton
        isRoomMinimized={isRoomMinimized}
        handleRoomResize={roomResizeHandler}
      />
    </MainContainer>
  );
}
