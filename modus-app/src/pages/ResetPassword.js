import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { auth, sendPasswordResetEmail } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./modus.css";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/home");
  }, [user, loading]);
  return (
    <div className="Reset">
      <div className="resetContainer">
        <div className="loginContainer">
      <input
        type="text"
        placeholder="Email Address "
        className="resetEmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="resetButton"
        onClick={() => sendPasswordResetEmail(email)}
      >
        Reset Password
      </button>
      </div>
      </div>
    </div>
  );
}
export default ResetPassword;
