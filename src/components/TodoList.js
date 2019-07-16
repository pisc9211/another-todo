import React from 'react'
import Todo from './Todo'
import './TodoList.css'

const TodoList = ({todos, deleteTodo, toggleShow}) => {
    return (
        <ul>
            {todos.map(({title, time, todo}, i) => <Todo i={i} todo={todo} title={title} time={time} deleteTodo={deleteTodo} toggleShow={toggleShow}/>)}
        </ul>
    )
}

export default TodoList