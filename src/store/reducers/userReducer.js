import { userActions } from "../actions/userActions.js";

const initState = { user: {}, userChildren: [] };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case userActions.GET_USER:
      return {
        ...state,
        user: action.user,
      };
    case userActions.GET_USER_CHILDREN:
      return {
        ...state,
        userChildren: action.userChildren,
      };

    default:
      return state;
  }
};

export default reducer;
