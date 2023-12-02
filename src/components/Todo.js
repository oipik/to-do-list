import edit from '../../src/images/edit.svg';
import del from '../../src/images/delete.svg';

const Todo = ({ todo, deleteTodo, editTodo, toggleComplete }) => {

    return (
        <div className="wrapper__box">
            <div className="wrapper__box--inner">
                <input className="wrapper__checkbox" type="checkbox" onClick={() => toggleComplete(todo.id)}/>
                <p className={`wrapper__task ${todo.isCompleted ? "completed" : "incompleted"}`}>{todo.task}</p>
            </div>
            <div className="wrapper__icons">
                <img className="wrapper__edit" src={edit} alt="edit" onClick={() => editTodo(todo.id)} />
                <img className="wrapper__img" src={del} alt="delete" onClick={() => deleteTodo(todo.id)} />
            </div>
        </div>
    )
}

export default Todo;