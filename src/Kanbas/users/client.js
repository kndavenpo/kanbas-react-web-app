//ASSIGNMENT A6
import axios from "axios";
const request = axios.create({
  withCredentials: true,
});

const API_BASE = process.env.REACT_APP_API_BASE;      // This is the environmental variable used in other Kanbas pages
export const USERS_API = `${API_BASE}/users`;

// A6 - 3.5.1
export const signin = async (credentials) => {
  const response = await request.post( `${USERS_API}/signin`, credentials );
  return response.data;
};
// A6 - 3.5.2
export const account = async () => {
  const response = await request.post(`${USERS_API}/account`);
  return response.data;
};

// A6 - 3.5.3
export const updateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

// A6 - 3.5.4
export const findAllUsers = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
};

// A6 - 3.5.5
export const createUser = async (user) => {
  const response = await request.post(`${USERS_API}`, user);
  return response.data;
};

// A6 - 3.5.6
export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};

// A6 - 3.5.7
export const deleteUser = async (user) => {
  const response = await request.delete(
      `${USERS_API}/${user._id}`);
  return response.data;
};

// A6 - 3.5.9
export const signup = async (credentials) => {
  const response = await request.post(
      `${USERS_API}/signup`, credentials);
  return response.data;
};

// A6 - 3.5.10
export const signout = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};

