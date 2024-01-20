import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from "../reducer";

const TodoForm = () => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const task = {id: uuidv4(), task: value, isCompleted: false, isEdit: false};
        dispatch(addTodo(task));

        setValue('');
    }

    return (
        <form className="wrapper__form" onSubmit={(e) => handleSubmit(e)}>
            <input
                className="wrapper__input"
                type="text"
                placeholder="What are we doing today"
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button className="wrapper__btn">Add Task</button>
        </form>
    )
}

export default TodoForm;