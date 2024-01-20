import { useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector } from "react-redux";
import { selectAll } from "../reducer/todosSlice";

import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

const TodoWrapper = () => {
    
    const todos = useSelector(selectAll);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todos));
    }, [todos])

    return (
        <section className="wrapper">
            <div className="wrapper__container">
                <div className="wrapper__inner">
                    <h3 className="wrapper__title">All Tasks</h3>
                    <TodoForm/>
                    {
                        <TransitionGroup component={null}>
                            {
                                todos.map(todo =>
                                    todo.isEdit ?
                                        <EditTodoForm key={todo.id} todo={todo} />
                                        :
                                        <CSSTransition timeout={500} key={todo.id} classNames="wrapper__box">
                                            <Todo key={todo.id} todo={todo} />
                                        </CSSTransition>
                                )
                            }
                        </TransitionGroup>
                    }
                </div>
            </div>
        </section>
    )
}

export default TodoWrapper;