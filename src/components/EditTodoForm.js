import { useState } from "react";

const EditTodoForm = ({todo, editTodo}) => {

    const [value, setValue] = useState(todo.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, todo.id);
    }

    return (
        <form className="wrapper__form" onSubmit={(e) => handleSubmit(e)}>
            <input
                className="wrapper__input"
                type="text"
                placeholder="What do you want to do"
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button className="wrapper__btn">Update</button>
        </form>
    )
}

export default EditTodoForm;