import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
      <div className="wd-general">
        <h1>Signup</h1>
        {error && <div>{error}</div>}
        Username:
        <input
            value={credentials.username}
            className="wd-general"
            onChange={(e) => setCredentials({
              ...credentials,
              username: e.target.value })} /><br/>
        Password:
        <input
            value={credentials.password}
            className="wd-general"
            onChange={(e) => setCredentials({
              ...credentials,
              password: e.target.value })} /><br/>
        <button onClick={signup}
                className="wd-general">
          Signup
        </button>
      </div>
  );
}
export default Signup;