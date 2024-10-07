import React from "react";
import { Box, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

export default function InvitationsDecisionButtons({
  disabled,
  acceptInvitationsHandler,
  rejectInvitationsHandler,
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={acceptInvitationsHandler}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={rejectInvitationsHandler}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
}
