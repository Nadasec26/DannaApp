import React from "react";
import { styled } from "@mui/material";
import ChosenOptionLabel from "./ChosenOptionLabel.js";
import DropdownMenu from "./DropdownMenu2.js";

const MainContainer = styled("div")({
  height: "10%",
  borderBottom: "1px solid black",
  backgroundColor: "#36393f",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
  color: "white",
});

export default function AppBar() {
  return (
    <MainContainer>
      {/* <ChosenOptionLabel /> */}
      <DropdownMenu />
    </MainContainer>
  );
}
