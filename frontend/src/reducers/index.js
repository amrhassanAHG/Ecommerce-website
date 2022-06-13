import { combineReducers } from "redux";
import { productListReducer } from "./productReducers";

export default combineReducers({
  productList: productListReducer,
});
