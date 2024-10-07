import { Typography, styled } from "@mui/material";
import React from "react";
import Avatar from "../../../shared/components/Avatar.js";

const MainContainer = styled("div")({
  width: "97%",
  display: "flex",
  marginTop: "10px",
});

const AvatarContainer = styled("div")({
  width: "70px",
});

const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",

});

const MessageContent = styled("div")({
  color: "#dcddde",

});

const SameAuthorMessageContent = styled("div")({
  color: "#dcddde",
  width: "97%",
});

const SameAuthorMessageText = styled("span")({
  marginLeft: "70px",
});

export default function Message({
  content,
  sameAuthor,
  userName,
  proImage,
  date,
  sameDay,
}) {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }
  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={userName} proImage={proImage} />
      </AvatarContainer>
      <MessageContainer>
        <Typography style={{ color: "white" }}>
          {userName}{" "}
          <span style={{ fontSize: "12px", color: "#72767d" }}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
}
