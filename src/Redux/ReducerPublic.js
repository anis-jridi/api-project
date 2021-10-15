import { SET_PUBLIC } from "./actionType";

const initState = {
  publics: [],
};

export const publicReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_PUBLIC:
      return { ...state, publics: payload };

    default:
      return state;
  }
};
