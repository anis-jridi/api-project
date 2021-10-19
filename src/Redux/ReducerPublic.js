import {
  ADD_PUBLIC,
  DELETE_PUBLIC,
  EDIT_PUBLIC,
  SET_PUBLIC,
} from "./actionType";

const initState = {
  publics: [],
};

export const publicReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_PUBLIC:
      return { ...state, publics: payload };
    case DELETE_PUBLIC:
      return {
        ...state,
        publics: state.publics.filter((pub) => pub.id !== payload),
      };

    case EDIT_PUBLIC:
      return {
        ...state,
        publics: state.publics.map((pub) =>
          pub.id === payload.id ? { ...pub, ...payload } : pub
        ),
      };

    case ADD_PUBLIC:
      return {
        ...state,
        publics: [...state.publics, payload],
      };
    default:
      return state;
  }
};
