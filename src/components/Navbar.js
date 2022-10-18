import React from "react";
// import App from "../App";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import "./myStyle.css";
import logo from "../logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useCartState } from "../context/Context";
function Navbar() {
  const {
    state: { cart },
    filterDispatch,
  } = useCartState();
  return (
    <header>
      <img src={logo}></img>
      <input
        type="text"
        placeholder="Seach..."
        onChange={(e) => {
          filterDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value });
        }}
      />
      <Link to="/checkout" className="cart-icon">
        <span>{cart.length}</span>
        <FaShoppingCart fontSize="60px" color="white" />
        {/* <IoIosArrowDown color="white" fontSize="30px" /> */}
      </Link>
    </header>
  );
}

export default Navbar;
