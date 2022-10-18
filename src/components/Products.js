import React from "react";
import { useCartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Sidebar from "./Sidebar";
import "./myStyle.css";
import { useFetcher } from "react-router-dom";
function Products() {
  const {
    state: { product },
    filterState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = useCartState();

  console.log(byStock, byFastDelivery, sort, byRating, searchQuery);

  const transformData = () => {
    let newData = product;

    if (sort) {
      newData = newData.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      newData = newData.filter((curr) => curr.inStock);
    }

    if (byFastDelivery) {
      newData = newData.filter((curr) => curr.fastDelivery);
    }

    if (byRating) {
      newData = newData.filter((curr) => curr.rating >= byRating);
    }
    if (searchQuery) {
      newData = newData.filter((curr) =>
        curr.name.toLowerCase().includes(searchQuery)
      );
    }
    return newData;
  };
  return (
    <main className="container">
      <Sidebar />
      <div className="productContainer">
        {transformData().map((curr) => {
          return <SingleProduct key={curr.id} {...curr} />;
        })}
      </div>
    </main>
  );
}

export default Products;
