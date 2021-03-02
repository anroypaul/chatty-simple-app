import React, { useState } from "react";
import "./style.css";
import { TextField, Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateContext";
import { actionTypes } from "../../reducer";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [state, dispatch] = useStateValue();

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign in to the App</h1>
        <form>
          <div>
            <TextField
              type="text"
              name="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <TextField
              type="password"
              name="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button variant="contained" color="primary" onClick={signIn}>
            Sign In
          </Button>
          <Button variant="contained" color="secondary" onClick={register}>
            Register
          </Button>
          {/* <Button onClick={signIn}>Sign In</Button> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
