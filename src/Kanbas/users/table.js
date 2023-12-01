import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsFillCheckCircleFill, BsPencil, BsPlusCircleFill } from "react-icons/bs";
import * as client from "./client";
import { Link } from "react-router-dom";
import "../../index.css";

function UserTable() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, []);

  // A6 - 3.5.5
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };

  // A6 - 3.5.6
  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  // A6 - 3.5.7
  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };



  return (
      <div className = "wd-general">
        <h1>User List</h1>
        <table className="table">
          <thead>
          <tr>
            <th>Username and Password</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          {/*A6 - 3.5.5*/}
          <tr>
            <td>
              <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
              <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
            </td>
            <td>
              <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>

            {/*A6 - 3.5.6*/}
            <td className="text-nowrap">
              <BsFillCheckCircleFill onClick={updateUser}
                                     className="me-2 text-success fs-1 text" />
              <BsPlusCircleFill onClick={createUser}
                                className="text-success fs-1 text" />
            </td>
          </tr>
          </thead>
          <tbody>
          {users.map((user) => (
              <tr key={user._id}>
                <td>
                  {/*A6 - 3.5.8*/}
                  <Link to={`/kanbas/account/${user._id}`}>
                    {user.username}
                  </Link>
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  {/*A6 - 3.5.6*/}
                  <button className="btn btn-warning me-2">
                    <BsPencil onClick={() => selectUser(user)} />
                  </button>

                  {/*A6 - 3.5.7*/}
                  <button className="btn btn-danger me-2">
                    <BsTrash3Fill onClick={() => deleteUser(user)} />
                  </button>
                </td>

              </tr>))}
          </tbody>
        </table>
      </div>
  );
}
export default UserTable;

