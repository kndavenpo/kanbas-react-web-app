import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//3.5.1
function Signin() {
  const [credentials, setCredentials] = useState({ username: "",
    password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account");
  };

  return (
      <div className="wd-general">
        <h1>Signin</h1>
        <input value={credentials.username}
               className="wd-general"
               onChange={(e) => setCredentials({...credentials, username: e.target.value})}/><br/>
        <input value={credentials.password}
               className="wd-general"
               onChange={(e) => setCredentials({...credentials, password: e.target.value})}/><br/>
        <button onClick={signin}
                className="wd-general">
          Signin </button>
      </div>
  );
}
export default Signin;