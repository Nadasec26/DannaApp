import React, { useState } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as roomHandler from "../../../realtimeCommunication/roomHandler.js";

export default function CloseRoomButton() {
  const handleLeaveRoom = () => {
    roomHandler.leaveRoom()
  };

  return (
    <IconButton onClick={handleLeaveRoom} style={{ color: "white" }}>
      <CloseIcon />
    </IconButton>
  );
}
