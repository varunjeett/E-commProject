import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating , showButton }) {
  
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  const removefromCart = () => {
    dispatch({
      //remove from cart
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="productPhoto" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong> {price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              // eslint-disable-next-line
              <span role="img">⭐️</span>
            ))}
        </div>
        
        {/* showButton is checking for null , not for true or false */}
        { showButton && (
          <button
            onClick={removefromCart}
            className="removeCart__button highlight"
          >
            Remove from Cart
          </button>
        )}

      </div>
    </div>
  );
}

export default CheckoutProduct;
