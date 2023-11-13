import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";

  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  // 3.4.5 Fetching Arrays
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  // 3.4.6 Deleting items from an array
  const removeTodo = async (todo) => {
    const response = await axios
        .get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };

  // 3.4.7 Create new array elements
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };

  // 3.4.8 Fetching an item by primary key id
  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  // 3.4.9 Update array elements
  const updateTitle = async () => {
    const response = await axios.get(
        `${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  // 3.5.1 Posting data in an HTTP Body
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  // 3.5.2 Deleting Data
  const deleteTodo = async (todo) => {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  // 3.5.3 Updating Todo
  const updateTodo = async () => {
    const response = await axios.put(
        `${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (
        t.id === todo.id ? todo : t)));
    setTodo({});
  };




  return (
      <div>
        <h3>Working with Arrays</h3>
        {/*3.3.1 Retrieving Arrays*/}
        <div>
          <h4>Retrieving Arrays</h4>
          <a href={API} className="btn btn-primary me-2">
            Get All Todos
          </a>
        </div><br/>

        {/*3.3.2 Retrieving an Item from an Array by ID */}
        <div>
          <h4>Retrieving an Item from an Array by ID</h4>
          <input
              className="form-control"
              value={todo.id}
              onChange={(e) => setTodo({ ...todo,
                id: e.target.value })}/>
          <a href={`${API}/${todo.id}`}
             className="btn btn-primary me-2">
            Get Todo by ID
          </a>
        </div><br/>

        {/*3.4.5 Fetching Arrays*/}
        <div>
          <h4>Fetching Arrays with Axios</h4>

          {/*3.4.7 Create new array elements*/}
          <button onClick={createTodo}
                  className="btn btn-primary mb-2 w-100">
            Create Todo
          </button><br/><br/>

          {/*3.4.9 Update array elements ++++++++++++++++++++++++++++++++++++++++++++++ NOT WORKING*/}
          {/*<button onClick={updateTitle}*/}
          {/*        className="btn btn-success mb-2 w-100">*/}
          {/*  Update Title*/}
          {/*</button>*/}

          {/*3.5.1 Posting data in an HTTP Body*/}
          <textarea
              onChange={(e) => setTodo({ ...todo,
                description: e.target.value })}
              value={todo.description} type="text"
          /><br/>
          <input
              onChange={(e) => setTodo({
                ...todo, due: e.target.value })}
              value={todo.due} type="date"
          /><br/>
          <label>
            <input
                onChange={(e) => setTodo({
                  ...todo, completed: e.target.checked })}
                value={todo.completed} type="checkbox"
            />
            Completed
          </label><br/>
          <button onClick={postTodo} >
            Post Todo
          </button><br/>

          {/*3.5.2 Updating ToDo*/}
          <button onClick={updateTodo}>
            Update Todo
          </button><br/><br/>



          <ul className="list-group">
            {todos.map((todo) => (
                <li key={todo.id} className="list-group-item">
                  {/*3.5.1 Posting data in an HTTP Body*/}
                  <input
                      checked={todo.completed}
                      type="checkbox" readOnly
                  />
                  {todo.title}
                  {/*<p>{todo.description}</p>*/}
                  {/*<p>{todo.due}</p>*/}

                  {/*3.4.8 Fetching an item by its primary key ID */}
                  <button
                      onClick={() => fetchTodoById(todo.id)}
                      className="btn btn-warning me-2 float-end" >
                    Edit
                  </button>

                  {/*3.4.6. Deleting Items from an array*/}
                  <button
                      onClick={() => removeTodo(todo)}
                      className="btn btn-danger float-end" >
                    Remove
                  </button>

                  {/*3.5.2 Deleting Data */}
                  <button
                      onClick={() => deleteTodo(todo)}
                      className="btn btn-danger float-end ms-2">
                    Delete
                  </button>


                </li>
            ))}
          </ul>
        </div><br/>



        {/*3.3.3 Filtering array items using a query string */}
        <div>
          <h4>Filtering Array Items</h4>
          <a href={`${API}?completed=true`}
             className="btn btn-primary me-2" >
            Get Completed Todos
          </a>
        </div><br/>

        {/*3.3.4 Creating new Items in an Array */}
        <div>
          <h4>Creating new Items in an Array</h4>
          <a href={`${API}/create`}
             className="btn btn-primary me-2">
            Create Todo
          </a>
        </div><br/>

        {/*3.3.5 Deleting an Item from an Array*/}
        <div>
          <input
              value={todo.id}
              onChange={(e) => setTodo({
                ...todo, id: e.target.value })}
              className="form-control mb-2"
              type="number"
          />
          <h4>Deleting from an Array</h4>
          <a href={`${API}/${todo.id}/delete`}
             className="btn btn-primary me-2">
            Delete Todo with ID = {todo.id}
          </a>
        </div><br/>

        {/*3.3.6 Updating an Item in an Array */}
        <div>
          <input
              value={todo.title}
              onChange={(e) => setTodo({
                ...todo, title: e.target.value })}
              className="form-control mb-2"
              type="text"
          />
          <h3>Updating an Item in an Array</h3>
          <a
              href={`${API}/${todo.id}/title/${todo.title}`}
              className="btn btn-primary me-2" >
            Update Title to {todo.title}
          </a>
        </div>

      </div>
  );
}
export default WorkingWithArrays;