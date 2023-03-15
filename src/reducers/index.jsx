import proReducer from "./ProductReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  product: proReducer,
});

export default rootReducer;
