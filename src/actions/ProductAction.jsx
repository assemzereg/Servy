import * as actions from "../actions/actionTypes";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://back-safka-mvp.herokuapp.com/products`
    );
    dispatch({
      type: actions.GET_PRODUCTS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: actions.PRODUCTS_ERROR,
      payload: console.log(e),
    });
  }
};
