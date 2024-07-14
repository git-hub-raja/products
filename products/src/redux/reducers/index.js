import { combineReducers } from "redux";
import rproducts from "./rproducts";

const rootReducer = combineReducers({
    products: rproducts
});

export default rootReducer;