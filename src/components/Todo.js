import edit from '../../src/images/edit.svg';
import del from '../../src/images/delete.svg';

import { useState } from 'react';

const Todo = ({ todo, deleteTodo, editTodo, toggleComplete }) => {

    const [value, setValue] = useState(false);
    
    // const handleChecked = (e) => {
    //     console.log(e.target.checked)
    //     if (e.target.checked) toggleComplete(todo.id);

    // }

    return (

        <div className="wrapper__box">
            <div className="wrapper__box--inner">
                <input className="wrapper__checkbox" type="checkbox" onClick={setValue(!value)}/>
                <p
                    className={`wrapper__task ${value ? "completed" : "incompleted"}`}>{todo.task}</p>
            </div>
            <div className="wrapper__icons">
                <img className="wrapper__edit" src={edit} alt="edit" onClick={() => editTodo(todo.id)} />
                <img className="wrapper__img" src={del} alt="delete" onClick={() => deleteTodo(todo.id)} />
            </div>
        </div>
    )
}

export default Todo;