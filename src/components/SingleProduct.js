import React from "react";
import { useCartState } from "../context/Context";
import "./myStyle.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
function SingleProduct(item) {
  const {
    state: { cart },
    dispatch,
  } = useCartState();
  // console.log(cart);
  return (
    <div className="singleProduct">
      <img src={item.image} />
      <div className="detail">
        <h3 className="productName">{item.name}</h3>
        <p className="productPrice">Rs {item.price}</p>
        {item.fastDelivery ? (
          <p className="productDelivery">Fast Delivery</p>
        ) : (
          <p className="productDelivery">4 days Delivery</p>
        )}

        <div>
          {[...Array(5)].map((curr, index) => {
            if (index < item.rating)
              return <FaStar fontSize="3rem" color="orange" key={index} />;
            else
              return <FaRegStar fontSize="3rem" color="orange" key={index} />;
          })}
        </div>
        {cart.some((c) => c.id === item.id) ? (
          <button
            className="removeCart"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item,
              });
            }}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="addCart"
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: item,
              });
            }}
            disabled={!item.inStock > 0}
          >
            {item.inStock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
