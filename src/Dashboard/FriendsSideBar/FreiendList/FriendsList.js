import React from "react";
import FriendsListItem from "./FriendsListItem.js";
import { styled } from "@mui/material";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MainContainer = styled("div")({
  flexGrow: "1",
  width: "100%",
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  friends.forEach((f) => {
    const isUserOnline = onlineUsers.find((user) => user.userId == f.id);
    f.isOnline = isUserOnline ? true : false;
  });
  return friends;
};

const FriendsList = ({ friends, onlineUsers }) => {
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  return (
    <MainContainer>
      {checkOnlineUsers(friends, onlineUsers).map((f) => {
        if (f.id == id && user.role == "user") {
          return (
            <FriendsListItem
              userName={f.userName}
              email={f.email}
              proImage={f.profileImage}
              id={f.id}
              key={f.id}
              isOnline={f.isOnline}
            ></FriendsListItem>
          );
        } else if (user.role == "doctor") {
          return (
            <FriendsListItem
              userName={f.userName}
              email={f.email}
              proImage={f.profileImage}
              id={f.id}
              key={f.id}
              isOnline={f.isOnline}
            ></FriendsListItem>
          );
        }
      })}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(FriendsList);
