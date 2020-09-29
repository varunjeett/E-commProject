import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  // eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://paisebachaoindia.com/wp-content/uploads/2016/01/banner.png"
          alt="ad"
        />

        {basket?.length === 0 ? (
          <div className="checkout__title">
            <h2>
              Hello {user?.email}, Your Shopping Basket is Empty.
              <p>
                <i>
                  You have no items in your Cart. To buy one or more items,
                  click "Add to Cart" next to the item.
                </i>
              </p>
            </h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">
              Hello {user?.email}, Your Shopping Basket
            </h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                showButton
              />
            ))}
          </div>
        )}
      </div>

      <div className="checkout__right">{basket.length > 0 && <Subtotal />}</div>
    </div>
  );
}

export default Checkout;
