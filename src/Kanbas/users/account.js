import "../../index.css";

// A6: 3.5.2
import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Account() {
  const { id } = useParams();
  // 3.5.2
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);

  // 3.5.3
  const save = async () => {
    await client.updateUser(account);
  };

  // 3.5.8
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };


  // 3.5.2, 3.5.8
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);


  // 3.5.10
  const signout = async () => {
    await client.signout();
    navigate("/kanbas/signin");
  };

  return (
      <div className="w-60 wd-general">
        <h1>Account</h1>
        {account && (
            <div>
              Password:<br/>
              <input value={account.password}
                     className=" wd-general"
                     onChange={(e) => setAccount({ ...account,
                       password: e.target.value })}/><br/>
              First Name:<br/>
              <input value={account.firstName}
                     className=" wd-general"
                     onChange={(e) => setAccount({ ...account,
                       firstName: e.target.value })}/><br/>
              Last Name:<br/>
              <input value={account.lastName}
                     className=" wd-general"
                     onChange={(e) => setAccount({ ...account,
                       lastName: e.target.value })}/><br/>
              Date of Birth:<br/>
              <input
                  value={account.dob ? new Date(account.dob).toISOString().split('T')[0] : ''}
                  className="wd-general"
                  onChange={(e) => setAccount({ ...account, dob: e.target.value })}
              /><br/>
              Email:<br/>
              <input value={account.email}
                     className=" wd-general"
                     onChange={(e) => setAccount({ ...account,
                       email: e.target.value })}/><br/>
              Role:<br/>
              <select className=" wd-general"
                  onChange={(e) => setAccount({ ...account,
                role: e.target.value })}>

                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select><br/>
              <div >
                {/*A6- 3.5.3             */}
                <button className="btn btn-success spacer" onClick={save}>
                  Save
                </button>
                {/*A6- 3.5.10             */}
                <button className="btn btn-primary spacer" onClick={signout}>
                  Signout
                </button>
              </div>
              {/*A6- 3.5.4             */}
              <Link to="/Kanbas/admin/users" className="btn btn-warning w-100 wd-general">
                Users
              </Link>

            </div>
        )}
      </div>
  );
}
export default Account;