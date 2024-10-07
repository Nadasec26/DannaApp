import { hospitalActions } from "../actions/hospitalActions.js";

const initState = { hospital: {} };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case hospitalActions.GET_Hospital:
      return {
        ...state,
        hospital: action.hospital,
      };
    case hospitalActions.GET_Hospital_ADDRESS:
      return {
        ...state,
        hospital: action.hospital,
      };
    default:
      return state;
  }
};

export default reducer;
