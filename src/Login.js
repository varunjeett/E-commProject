import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    //prevents refresh
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in , go to personal home
        history.push("/");
      })

      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    //prevents refresh
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //user created
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png"
          alt="amazon_logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your E-mail"
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your Password"
            type="password"
          />

          <button onClick={login} type="submit" className="signin__button">
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <div class="separator">New to Amazon ?</div>

        <button onClick={register} className="signup__button">
          Create your Amazon Account
        </button>
      </div>

      {/* <h1>Login Page</h1> */}
    </div>
  );
}

export default Login;
