import React, {useEffect, useState} from 'react'
import moment from 'moment'
import './Todo.css'

const Todo = ({time, todo, title, i, deleteTodo, toggleShow}) => {
    let [fromNow, updateFromNow] = useState(moment(time).fromNow())
    
    useEffect(() => {
        let a = setInterval(() => {
            updateFromNow(moment(time).fromNow())
        }, 10000)

        return () => clearInterval(a);
    })

    return (
        <li className='list-item'>
            <div className="complete"></div>
            <div className='list-item-content'>
                <div className='content-group'>
                    <div className="todo-title">{title}</div>
                    <div className="todo-todo">{todo}</div>
                    <div className="todo-ago">{fromNow}</div>
                </div>
                <div className='btn-group'>
                    <button className="btn" onClick={() => toggleShow(i)}>Update</button>
                    <button className="btn" onClick={() => deleteTodo(i)}>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Todo