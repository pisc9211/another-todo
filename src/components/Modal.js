import React, {useState} from 'react'
import './Modal.css'
import moment from 'moment';

const Modal = ({show, toggleShow, selected, updateTodoItem, todos}) => {
    let [title, updateTitle] = useState(todos[selected].title)
    let [todo, updateTodo] = useState(todos[selected].todo)

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
        updateTodoItem(selected, newTodo)
        updateTitle('')
        updateTodo('')
    }

    return show ? (
        <div className="modal-container">
            <div className="inner-modal">
                <div className="close-modal" onClick={toggleShow}><p>x</p></div>
                <div className="title">Update Todo</div>
                <form onSubmit={handleButtonAdd}>
                    <input className='update-title' type='text' value={title} onChange={(e) => handleOnChange(e, updateTitle)}></input>
                    <textarea className='update-description' type='text' value={todo} onChange={(e) => handleOnChange(e, updateTodo)}></textarea>
                    <button className="update-btn">Update</button>
                </form>
            </div>
        </div>
    
        ) : null;
}

export default Modal