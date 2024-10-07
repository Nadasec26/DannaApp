import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { baseURL } from "../../utils/baseURL.js";
import { Await, Navigate } from "react-router-dom";
import { socketLogout } from "../../realtimeCommunication/socketConnection.js";

export const logout = async () => {
  try {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const response = await axios.get(
      `${baseURL}users/logOut/${decoded.userId}`,
      {
        headers: { token: localStorage.getItem("token") },
      }
    );
    console.log(response);
    localStorage.clear();

    socketLogout();

    <Navigate to="/auth/signin" />;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
