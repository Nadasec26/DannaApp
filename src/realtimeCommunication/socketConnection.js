import { io } from "socket.io-client";
import {
  setPendingFriendsInvitations,
  setFriends,
  setOnlineUsers,
} from "../store/actions/friendsActions.js";
import store from "../store/store.js";
import { updateDirectChatHistoryIfActive } from "../shared/utils/chat.js";
import * as roomHandler from "./roomHandler.js";
import * as webRTCHandler from "./webRTCHandler.js";
import { jwtDecode } from "jwt-decode";

let socket = null;

export const connectWithSocketServer = (token) => {
  socket = io("http://localhost:3000", {
    auth: {
      token,
    },
  });

  if (token && !socket.id) {
    socket.on("connect", () => {
      console.log("successful connect with socket server");
      console.log(socket.id);
    });
  }

  socket.on("doctors-invitations", (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  socket.on("doctors-list", (data) => {
    const { doctors } = data;
    store.dispatch(setFriends(doctors));
  });

  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });

  socket.on("direct-chat-history", (data) => {
    updateDirectChatHistoryIfActive(data);

    const doctor = jwtDecode(token);
    if (
      doctor.role === "doctor" &&
      doctor.userId === data.participants[1]._id
    ) {
      store.dispatch(
        setFriends([
          {
            email: data.messages[0].author.email,
            id: data.messages[0].author._id,
            isOnline: true,
            profileImage: data.messages[0].author.profileImage?.url,
            userName: data.messages[0].author.userName,
          },
        ])
      );
    }
  });

  socket.on("room-create", (data) => {
    roomHandler.newRoomCreated(data);
  });

  socket.on("active-rooms", (data) => {
    roomHandler.updateActiveRooms(data);
  });

  socket.on("conn-prepare", (data) => {
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, false);
    socket.emit("conn-init", { connUserSocketId });
  });

  socket.on("conn-init", (data) => {
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, true);
  });

  socket.on("conn-signal", (data) => {
    webRTCHandler.handleSignalingData(data);
  });

  socket.on("room-participant-left", (data) => {
    webRTCHandler.handleParticipantLeftRoom(data);
  });
};

export const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
};

export const createNewRoom = () => {
  socket.emit("room-create");
};

export const joinRoom = (data) => {
  socket.emit("room-join", data);
};

export const leaveRoom = (data) => {
  socket.emit("room-leave", data);
};

export const signalPeerData = (data) => {
  socket.emit("conn-signal", data);
};

export const socketLogout = () => {
  socket.emit("logout");
};
