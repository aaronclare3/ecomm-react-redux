import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  getProductReducer,
  getProductsReducer,
} from "./redux/reducers/ProductReducer";
import { cartReducer } from "./redux/reducers/CartReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProduct: getProductReducer,
  cart: cartReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
