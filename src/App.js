import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Prime from "./Prime";
import Payment from "./Payment.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders.js";

const promise = loadStripe(
  "pk_test_51HTnupEdNZ4HNcoqY6fGn83bTi592IaNS36D4cQiPQNaHm4WHXcKSWcC1Vqvu0ZUmAfD4LafZApCk4n4xYx4Z7k700I1wR90I5"
);

function App() {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  //useeffect, code depeending on condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //not logged in
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>


          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/prime">
            <Header />
            <Prime />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/prime">
            <Prime />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
