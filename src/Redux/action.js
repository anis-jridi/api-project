import {
  ADD_BINANCE,
  ADD_PUBLIC,
  DELETE_BINANCE,
  DELETE_PUBLIC,
  EDIT_BINANCE,
  EDIT_PUBLIC,
  SET_CHANGE,
  SET_PUBLIC,
} from "./actionType";

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
export const handelAddBinance = (addBinance) => {
  return {
    type: ADD_BINANCE,
    payload: addBinance,
  };
};
export const handelDeleteBinance = (deleteBinance) => {
  return {
    type: DELETE_BINANCE,
    payload: deleteBinance,
  };
};
export const handelEditBinance = (editBinance) => {
  return {
    type: EDIT_BINANCE,
    payload: editBinance,
  };
};
export const handelAddPublic = (addPublic) => {
  return {
    type: ADD_PUBLIC,
    payload: addPublic,
  };
};
export const handelDeletePublic = (deletePublic) => {
  return {
    type: DELETE_PUBLIC,
    payload: deletePublic,
  };
};
export const handelEditPublic = (editPublic) => {
  return {
    type: EDIT_PUBLIC,
    payload: editPublic,
  };
};
