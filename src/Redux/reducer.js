import {
  ADD_BINANCE,
  DELETE_BINANCE,
  EDIT_BINANCE,
  SET_CHANGE,
} from "./actionType";

const initState = {
  changes: [],
};

export const changeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_CHANGE:
      return { ...state, changes: payload };
    case DELETE_BINANCE:
      return {
        ...state,
        changes: state.changes.filter((anis) => anis.id !== payload),
      };
    case EDIT_BINANCE:
      return {
        ...state,
        changes: state.changes.map((el) =>
          el.id === payload.id ? { ...el, ...payload } : el
        ),
      };
    case ADD_BINANCE:
      return {
        ...state,
        changes: [...state.changes, payload],
      };

    default:
      return state;
  }
};
