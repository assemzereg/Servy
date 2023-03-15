import * as actions from "../actions/actionTypes";

const initialState = {
  products: [],
  loading: true,
};

const ProductRecuder = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS:
      return { ...state, products: action.payload, loading: false };
    case actions.PRODUCTS_ERROR:
      return state;
    default:
      return state;
  }
};

export default ProductRecuder;
