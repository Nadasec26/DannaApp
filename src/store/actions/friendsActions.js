import { toast } from "react-toastify";
import * as api from "../../api.js";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITATIONS: "FRIENDS.SET_PENDING_FRIENDS_INVITATIONS",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS",
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
    acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),
    rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data)),
  };
};

export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
    pendingFriendsInvitations,
  };
};

export const setFriends = (friends) => {
  return {
    type: friendsActions.SET_FRIENDS,
    friends,
  };
};

export const setOnlineUsers=(onlineUsers)=>{
  return {
    type: friendsActions.SET_ONLINE_USERS,
    onlineUsers,
  };
}

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async () => {
    const response = await api.sendFriendInvitation(data);
    if (response.error) {
      toast.error(response.exception?.response?.data.message);
    } else {
      toast.success(response.data.message);
      closeDialogHandler();
    }
  };
};

const acceptFriendInvitation = (data) => {
  return async () => {
    const response = await api.acceptFriendInvitation(data);
    console.log(response)
    if (response.error) {
      toast.error(response.exception?.response?.data.message);
    } else {
      toast.success(response.data.message);
    }
  };
};

const rejectFriendInvitation = (data) => {
  return async () => {
    const response = await api.rejectFriendInvitation(data);
    console.log(response);
    if (response.error) {
      toast.error(response.exception?.response?.data.message);
    } else {
      toast.info(response.data.message);
    }
  };
};
