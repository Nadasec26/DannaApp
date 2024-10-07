import React from "react";
import { Button } from "@mui/material";

export default function CustomPrimaryButton({
  label,
  additionalStyles,
  disabled,
  onClick,
}) {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#5865f2",
        color: "white",
        textTransform: "none",
        fontWeight: "500",
        width: "1005",
        height: "40px",
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
