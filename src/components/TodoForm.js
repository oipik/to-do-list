import { useState } from "react";

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value);
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