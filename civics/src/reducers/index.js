import { combineReducers } from "redux";
import RepReducer from "./reducer_reps";

const rootReducer = combineReducers({
  reps: RepReducer
});

export default rootReducer;
