import React, { useState } from "react";
import { useCartState } from "../context/Context";
import Rating from "./Rating";
import "./myStyle.css";

function Sidebar() {
  const [rating, setRating] = useState(2);
  const {
    filterState: { byStock, byFastDelivery, sort, byRating, searchQuery },
    filterDispatch,
  } = useCartState();

  return (
    <div className="sidebar">
      <p className="sidebar_title">Filter Products</p>
      <form>
        <input
          type="radio"
          id="ascending"
          name="sorting"
          onChange={() =>
            filterDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
          }
        />
        <label htmlFor="ascending">Price:Low to High</label>

        <br />
        <input
          type="radio"
          id="descending"
          name="sorting"
          onChange={() => {
            filterDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" });
          }}
        />

        <label htmlFor="descending">Price:High to Low</label>
      </form>
      <input
        type="checkbox"
        id="includeOutOfStock"
        onChange={() => {
          filterDispatch({ type: "FILTER_BY_STOCK" });
        }}
      />
      <label id="includeOutOfStock">Include Out Of Stock</label>
      <br />
      <input
        type="checkbox"
        id="fastDilevery"
        onChange={() => {
          filterDispatch({ type: "FILTER_BY_DELIVERY" });
        }}
      />
      <label id="fastDilevery">Fast Delivery Only</label>
      <br />
      <span className="rate">Rating:</span>
      <Rating
        rate={byRating}
        onClick={(index) =>
          filterDispatch({ type: "FILTER_BY_RATING", payload: index })
        }
      />

      <button onClick={() => filterDispatch({ type: "CLEAR_FILTER" })}>
        Clear Filter
      </button>
    </div>
  );
}

export default Sidebar;
