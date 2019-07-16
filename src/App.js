import React, { useState } from 'react'
import './App.css';

import Input from './components/Input'
import TodoList from './components/TodoList'
import Modal from './components/Modal'

function App() {
  let [todos, updateTodos] = useState([]);
  let [show, updateShow] = useState(false);
  let [selected, updateSelected] = useState(null);

  let toggleShow = (i) => {
    updateSelected(i)
    updateShow(!show);
  }
  
  let addTodo = todo => updateTodos([...todos, todo]);

  let deleteTodo = i => updateTodos([...todos.slice(0,i), ...todos.slice(i+1)])

  let updateTodoItem = (i, todo) => {
    updateTodos([...todos.slice(0,i), todo, ...todos.slice(i+1)])
    toggleShow(null)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Input addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleShow={toggleShow}/>
      {show ? <Modal show={show} toggleShow={toggleShow} updateTodoItem={updateTodoItem} selected={selected} todos={todos}/> : null }
    </div>
  );
}

export default App;
