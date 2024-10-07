import { styled } from "@mui/material";
import React from "react";
import AddFriendButton from "./AddFriendButton.js";
import FriendsTitle from "./FriendsTitle.js";
import FriendsList from "./FreiendList/FriendsList.js";
import PendingInvitationsList from "./PendingInvitationList/PendingInvitationsList.js";

const MainContainer = styled("div")({
  minWidth: "100px",
  width: "30%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2f3136",
});

export default function FriendsSideBar() {
  return (
    <MainContainer>
      {/* <AddFriendButton /> */}
      <FriendsTitle title="Private Message" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationsList />
    </MainContainer>
  );
}
