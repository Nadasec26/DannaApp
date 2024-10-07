import { getHospitalLocation } from "../../api.js";

export const hospitalActions = {
  GET_Hospital: "GET_Hospital",
  GET_Hospital_ADDRESS: "GET_Hospital_ADDRESS",
};

export const getHospital = (dispatch, hospital) => {
  return dispatch({
    type: hospitalActions.GET_Hospital,
    hospital,
  });
};

export const getHospitalAddress = async (dispatch, id) => {
  return dispatch({
    type: hospitalActions.GET_Hospital_ADDRESS,
    hospital: await getHospitalLocation(id),
  });
};
