import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import Navbar from "./Navbar";
function Checkout() {
  const {
    state: { product, cart },
    dispatch,
  } = useCartState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce((total, curr) => total + parseInt(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  console.log(cart);
  return (
    <>
      <Navbar></Navbar>
      <div className="btn">
        <Link to="/" className="backBtn">
          Back to Home
        </Link>
      </div>
      <br></br>
      <div className="contain">
        <div className="cartList">
          {cart.map((curr, index) => {
            return (
              <div className="cart_item">
                <img src={curr.image}></img>
                <div className="item_detail">
                  <p>{curr.name}</p>
                  <p>{curr.price}</p>

                  <form
                    onClick={(e) => {
                      // console.log(e.target.value);
                      dispatch({
                        type: "INCREASE_QUANTITY",
                        payload: { id: curr.id, qty: e.target.value },
                      });
                    }}
                  >
                    <label id="quantity">quantity:</label>
                    <select id="quantity">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </form>
                </div>
                <AiFillDelete
                  fontSize="30px"
                  color="red"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: { id: curr.id },
                    });
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="summary">
          <h1>Total Item {cart.length}</h1>
          <p>
            Total:
            {total}
          </p>
          <Link to="/" className="checkout">
            Check Out
          </Link>
        </div>
      </div>
    </>
  );
}

export default Checkout;
