import React from "react";
import { Button, Typography } from "@mui/material";
import Avatar from "../../../shared/components/Avatar.js";
import OnlineIndicator from "./OnlineIndicator.js";
import { chatTypes, getActions } from "../../../store/actions/chatActions.js";
import { connect } from "react-redux";

const FriendsListItem = ({
  id,
  userName,
  isOnline,
  proImage,
  setChosenChatDetails,
}) => {
  const handleChooseActiveConversation = () => {
    setChosenChatDetails({ id, name: userName ,proImage }, chatTypes.DIRECT);
  };

  return (
    <Button
      onClick={handleChooseActiveConversation}
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    >
      <Avatar username={userName} proImage={proImage} />
      <Typography
        style={{ marginLeft: "7px", fontWeight: "700", color: "#8e9297" }}
        variant="subtitle1"
        align="left"
      >
        {userName}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(FriendsListItem);
