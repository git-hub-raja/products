import { LOAD_PRODUCTS, ADD_PRODUCT } from "./types";

const adproducts = {
    loadProducts: (dispatch, products) => { 
        dispatch({
            type: LOAD_PRODUCTS, 
            payload: products 
        });
    },

    addProduct: (dispatch, product) => { 
        dispatch({
            type: ADD_PRODUCT, 
            payload: product 
        });
    }
}

export default adproducts; 