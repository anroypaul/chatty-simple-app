import React, { useState } from "react";
import "./style.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateContext";
import { actionTypes } from "../../reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result);
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
        <h1>Sign in to the App</h1>
        <form>
          <Button variant="contained" color="primary" onClick={signIn}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
