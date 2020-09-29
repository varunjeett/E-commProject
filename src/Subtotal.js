import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      {/*Price*/}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items) : <strong>{`${value}`} </strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" />
              this order cantains gift!!!
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button
        className="checkout__button"
        onClick={() => history.push("/payment")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
