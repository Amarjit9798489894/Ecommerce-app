import { combineReducers } from "redux";
import {
  productsReducer,
  selectedProductsReducer,
  handleCartReducer,
  addingReducer,
  manageCountReducer,
} from "./productReducer";

// combining all the reducers
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  handleCart: handleCartReducer,
  adding: addingReducer,
  manageCount: manageCountReducer,
});
export default reducers;
