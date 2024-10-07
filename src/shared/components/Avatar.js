import { styled } from "@mui/material";
import React from "react";

const AvatarPreview = styled("div")({
  height: "42px",
  width: "42px",
  backgroundColor: "#5865f2",
  borderRadius: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "700",
  color: "white",
  borderRadius: "50%",
  overflow: "hidden",
  cursor: "pointer",
});

export default function Avatar({ username, large, proImage }) {
  return (
    <AvatarPreview
      style={large ? { height: "80px", width: "80px", overflow: "hidden" } : {}}
    >
      {proImage ? (
        <img src={proImage} alt="profile Image" />
      ) : (
        username?.substring(0, 2)
      )}
    </AvatarPreview>
  );
}
