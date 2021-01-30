export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return { ...state, products: [], loading: true };
    case "GET_PRODUCTS_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "GET_PRODUCTS_FAIL":
      return { ...state, products: action.payload, loading: false };
    case "CLEAR_PRODUCTS":
      return { products: [] };
    default:
      return state;
  }
};

export const getProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "GET_PRODUCT_REQUEST":
      return { ...state, loading: true };
    case "GET_PRODUCT_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "GET_PRODUCT_FAIL":
      return { ...state, error: action.payload, loading: false };
    case "CLEAR_PRODUCT":
      return { product: {} };
    default:
      return state;
  }
};
