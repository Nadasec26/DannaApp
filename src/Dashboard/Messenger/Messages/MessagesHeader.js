import { Typography, styled } from "@mui/material";
import React from "react";
import Avatar from "../../../shared/components/Avatar.js";

const MainContainer = styled("div")({
  width: "98%",
  display: "column",
  marginTop: "10px",
});

export default function MessagesHeader({ name, proImage }) {
  return (
    <MainContainer>
      <Avatar large username={name} proImage={proImage} />
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "white", margin: "0 5px" }}
      >
        {name}
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontWeight: "#b9bbbe", color: "white", margin: "0 5px" }}
      >
        this is the beginning of your conversation with {name}
      </Typography>
    </MainContainer>
  );
}
