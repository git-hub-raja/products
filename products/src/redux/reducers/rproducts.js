import { LOAD_PRODUCTS, ADD_PRODUCT } from "../actions/types";

export default function rproducts(state = {}, action) {
    switch (action.type) {
        case LOAD_PRODUCTS: return {
            ...state,
            allProducts: action.payload
        };
        case ADD_PRODUCT: return {
            ...state, 
            allProducts: [
                ...state.allProducts, 
                action.payload
            ]
        };
        default: return state;
    }
} 