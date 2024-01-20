import edit from '../../src/images/edit.svg';
import del from '../../src/images/delete.svg';
import { useDispatch } from 'react-redux'; 
import { deleteTodo, editTodo, toggleComplete } from '../reducer/todosSlice';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <div className="wrapper__box">
            <div className="wrapper__box--inner">
                <input className="wrapper__checkbox" type="checkbox" onClick={() => dispatch(toggleComplete({id: todo.id, isCompleted: !todo.isCompleted}))} />
                <p className={`wrapper__task ${todo.isCompleted ? "completed" : "incompleted"}`}>{todo.task}</p>
            </div>
            <div className="wrapper__icons">
                <img className="wrapper__edit" src={edit} alt="edit" onClick={() => dispatch(editTodo({id: todo.id, isEdit: !todo.isEdit}))} />
                <img className="wrapper__img" src={del} alt="delete" onClick={() => dispatch(deleteTodo(todo.id))} />
            </div>
        </div>
    )
}

export default Todo;