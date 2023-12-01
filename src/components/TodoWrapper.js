import { useState } from "react";
import {v4 as uuidv4 } from 'uuid'

import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoWrapper = () => {
    const [todo, setTodo] = useState([]);

    const addTodo = (task) => {
        setTodo([...todo, {id: uuidv4(), task, isCompleted: false, isEdit: false }]);
    }

    const deleteTodo = (id) => {
        setTodo(todo.filter(todo => todo.id !== id));
    }

    const toggleComplete = (id) => {
        setTodo(todo.map(todo => {
            return (
                todo.id === id ? {...todo, isCompleted: !todo.isCompleted } : todo
            )
        }))
    }

    const editTodo = (id) => {
        setTodo(todo.map(todo => {
            return (
                todo.id === id ? {...todo, isEdit: !todo.isEdit } : todo
            )
        }))
    }

    return (
        <section className="wrapper">
            <div className="wrapper__container">
                <div className="wrapper__inner">
                    <h3 className="wrapper__title">All Tasks</h3>
                    <TodoForm addTodo={addTodo}/>
                    {
                        todo.map(todo => {
                            return <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default TodoWrapper;