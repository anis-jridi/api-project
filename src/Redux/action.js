import { SET_CHANGE, SET_PUBLIC } from "./actionType";

export const handelSetChange = (id) => {
  return {
    type: SET_CHANGE,
    payload: id,
  };
};

export const handelSetPublic = (id) => {
  return {
    type: SET_PUBLIC,
    payload: id,
  };
};
