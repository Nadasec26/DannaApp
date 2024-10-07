import axios from "axios";
import { Navigate } from "react-router-dom";
import { baseURL } from "./utils/baseURL.js";
import { jwtDecode } from "jwt-decode";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  // baseURL,
});

export const getUserData = async () => {
  try {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const { data } = await axios.get(`${baseURL}users/${decoded.userId}`, {
      headers: { token },
    });
    localStorage.setItem("profileImage", data.result.profileImage?.url);
    return data.result;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const getUserChildrenData = async () => {
  try {
    const token = localStorage.getItem("token");  
    const { data } = await axios.get(`${baseURL}children`, {
      headers: { token },
    });
    return data.result;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post("users/addFriend", data, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
  } catch (exception) {
    checkResponseCode();
    return {
      error: true,
      exception,
    };
  }
};

export const acceptFriendInvitation = async (data) => {
  try {
    return await apiClient.post("users/acceptAddFriend", data, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
  } catch (exception) {
    checkResponseCode();
    return {
      error: true,
      exception,
    };
  }
};

export const rejectFriendInvitation = async (data) => {
  try {
    return await apiClient.post("users/rejectAddFriend", data, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
  } catch (exception) {
    checkResponseCode();
    return {
      error: true,
      exception,
    };
  }
};

const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;
  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && localStorage.clear() && (
      <Navigate to="/auth/signin" />
    );
  }
};

// _________________ hospitals ________________________________________________________________

export const getNearHospitals = async (reqData) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await apiClient.post(
      "bookIncubation/nearIncubations",
      reqData,
      {
        headers: { token },
      }
    );
    return data.result;
  } catch (error) {
    console.error("Error fetching near hospitals data:", error);
  }
};

export const getHospitalLocation = async (id) => {
  try {
    const { data } = await apiClient.get(`hospitals/${id}`);
    return data.result;
  } catch (error) {
    console.error("Error fetching near hospitals data:", error);
  }
};

export const getIncubationsOfHospital = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await apiClient.get(`incubations/ofHospital/${id}`, {
      headers: { token },
    });
    return data.result;
  } catch (error) {
    console.error("Error fetching near hospitals data:", error);
  }
};

export const getIncubationDetails = async (id) => {
  try {
    const { data } = await apiClient.get(`incubations/${id}`);
    return data.result;
  } catch (error) {
    console.error("Error fetching near hospitals data:", error);
  }
};

export const getAllBookings = async () => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await apiClient.get(`bookIncubation`, {
      headers: { token },
    });
    return data.result;
  } catch (error) {
    console.error("Error fetching near hospitals data:", error);
  }
};
