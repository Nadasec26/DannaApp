import React from "react";
import { styled } from "@mui/material";
import SideBar from "./SideBar/SideBar.js";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar.js";
import Messenger from "./Messenger/Messenger.js";
import AppBar from "./AppBar/AppBar.js";
import Room from "./Room/Room.js";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions.js";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = ({ isUserInRoom }) => {
  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <div style={{ width: "100%" }}>
        <AppBar />
        <Messenger />
      </div>
      {isUserInRoom && <Room />}
    </Wrapper>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Dashboard);
