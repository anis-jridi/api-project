import { SET_CHANGE } from "./actionType";

const initState = {
  changes: [],
};

export const changeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_CHANGE:
      return { ...state, changes: payload };

    default:
      return state;
  }
};
