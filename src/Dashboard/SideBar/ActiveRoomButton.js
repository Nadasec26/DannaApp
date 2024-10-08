import { Button, Tooltip } from "@mui/material";
import React from "react";
import Avatar from "../../shared/components/Avatar.js";
import * as roomHandler from "../../realtimeCommunication/roomHandler.js";

export default function ActiveRoomButton({
  creatorUserName,
  creatorProImage,
  roomId,
  amountOfParticipants,
  isUserInRoom,
}) {
  const handleJoinActiveRoom = () => {
    if (amountOfParticipants < 2) {
      roomHandler.joinRoom(roomId);
    }
  };

  const activeRoomButtonDisabled = amountOfParticipants > 1;
  const roomTitle = `Creator: ${creatorUserName}. connected: ${amountOfParticipants}`;
  if (creatorProImage == "undefined" || creatorProImage == undefined)
    creatorProImage = "";
  
  return (
    <Tooltip title={roomTitle}>
      <div>
        <Button
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "16px",
            margin: "0",
            padding: "0",
            minWidth: "0",
            marginTop: "10px",
            color: "white",
            backgroundColor: "#5865F2",
            overflow: "hidden",
          }}
          disabled={activeRoomButtonDisabled || isUserInRoom}
          onClick={handleJoinActiveRoom}
        >
          <Avatar username={creatorUserName} proImage={creatorProImage} />
        </Button>
      </div>
    </Tooltip>
  );
}
