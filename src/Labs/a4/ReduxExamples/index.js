import React from "react";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";

const ReduxExamples = () => {
  return (
      <div>
        <h2>Redux Examples</h2>
        <HelloRedux />
        <CounterRedux/>
        <AddRedux/>
        <TodoList />
      </div>
  );
};

export default ReduxExamples;