import React, { createContext, useContext, useReducer } from "react";
// import { faker } from "@faker-js/faker";
import * as faker from "faker";
import { cartReducer, filterReducer } from "./Reducer";

const Cart = createContext();
function Context({ children }) {
  const products = [...Array(40)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    fastDelivery: faker.datatype.boolean(),
    inStock: faker.random.arrayElement([0, 3, 5, 6]),
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
  //   console.log(products);
  const [state, dispatch] = useReducer(cartReducer, {
    product: products,
    cart: [],
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  // console.log(state.product);
  return (
    <Cart.Provider value={{ state, dispatch, filterState, filterDispatch }}>
      {children}
    </Cart.Provider>
  );
}

export default Context;

export const useCartState = () => {
  return useContext(Cart);
};
