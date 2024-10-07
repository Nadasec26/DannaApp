import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import Avatar from "../../../shared/components/Avatar.js";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/friendsActions.js";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const PendingInvitationsListItem = ({
  id,
  username,
  mail,
  proImage,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonDisabled(true);
  };

  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} proImage={proImage} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: "700",
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subTitle1"
          >
            {username}
          </Typography>

          <Box sx={{ display: "flex" }}>
            <IconButton
              style={{ color: "white" }}
              disabled={buttonDisabled}
              onClick={handleAcceptInvitation}
            >
              <CheckIcon />
            </IconButton>
            <IconButton
              style={{ color: "white" }}
              disabled={buttonDisabled}
              onClick={handleRejectInvitation}
            >
              <ClearIcon />
            </IconButton>
          </Box>
        </Box>
      </div>
    </Tooltip>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(PendingInvitationsListItem);
