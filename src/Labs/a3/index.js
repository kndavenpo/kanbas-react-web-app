import React from 'react';
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
  console.log('Hello World!');
  return (
      <div>
        <h1>Assignment 3</h1><br/>
        <TodoItem/><br/>
        <TodoList/><br/>
        <ConditionalOutput/><br/>
        <Styles/><br/>
        <Classes/><br/>
        <JavaScript/><br/>
        <PathParameters/><br/>
      </div>
  );
}
export default Assignment3;