import React from "react";
import { Typography, styled } from "@mui/material";

const Wrapper = styled("div")({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default function WelcomeMessage() {
  return (
    <Wrapper>
      <Typography variant="h6" sx={{ color: "white" }}>
        To Start Chatting , Choose Conversation
      </Typography>
    </Wrapper>
  );
}
