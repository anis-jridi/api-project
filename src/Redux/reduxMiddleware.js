import { combineReducers } from "redux";
import { changeReducer } from "./reducer";
import { publicReducer } from "./ReducerPublic";

const reducers = combineReducers({
  allChanges: changeReducer,
  allPublics: publicReducer,
});

export default reducers;
