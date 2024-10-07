import { getUserData,getUserChildrenData } from "../../api.js";

export const userActions = {
  GET_USER: "GET_USER",
  GET_USER_CHILDREN: "GET_USER_CHILDREN",
};

export const getUser = async (dispatch) => {
  return dispatch({
    type: userActions.GET_USER,
    user: await getUserData(),
  });
};

export const getUserChildren = async (dispatch) => {
  return dispatch({
    type: userActions.GET_USER_CHILDREN,
    userChildren: await getUserChildrenData(),
  });
};
