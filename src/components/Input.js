import React, { useState } from 'react'
import './Input.css'
import moment from 'moment';

const Input = ({addTodo}) => {
    let [title, updateTitle] = useState('')
    let [todo, updateTodo] = useState('')

    let handleOnChange = (e, fn) => {
        e.preventDefault()
        fn(e.target.value);
    }

    let handleButtonAdd = (e) => {
        e.preventDefault()
        let newTodo = {
            title,
            todo,
            time: moment().toDate()
        }
        addTodo(newTodo)
        updateTitle('')
        updateTodo('')
    }

    return (
        <form className='add-todo-form' onSubmit={handleButtonAdd}>
            <input value={title} onChange={(e) => handleOnChange(e, updateTitle)} className='add-title' type='text' placeholder='Enter Title'></input>
            <textarea value={todo} onChange={(e) => handleOnChange(e, updateTodo)}className='add-todo' type='text' placeholder='Enter Description'></textarea>
            <button className="update-btn">Add Todo</button>
        </form>
    )
}

export default Input