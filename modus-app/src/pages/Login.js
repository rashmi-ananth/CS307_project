import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      //loading screen
      return;
    }
    if (user) history.replace("/home");
  }, [user, loading]);

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h2 className="header">Log in </h2>
        <input
          type="text"
          placeholder="Email Address "
          className="loginText"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password "
          className="passwordText"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="login"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Log in
        </button>
        <button className="googleLogin" onClick={signInWithGoogle}>
          {" "}
          Login with Google{" "}
        </button>
        <button className="facebookLogin" onClick={signInWithFacebook}>
          {" "}
          Login with Facebook{" "}
        </button>
        <a className="forget" href="/reset">
          Forget your password?
        </a>
        <br></br>
        <a className="register" href="/register">
          Create account
        </a>
      </div>
    </div>
  );
}
export default Login;
