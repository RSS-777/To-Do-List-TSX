import { FC } from "react";
import { ITodo } from "../types/data";
import './Todo.css';

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

export const TodoItem: FC<ITodoItem> = (props) => {
    const { id, title, complete, removeTodo, toggleTodo } = props;

    return (
        <div className="block-task-list">
            <input
                type="checkbox"
                checked={complete}
                onChange={() => toggleTodo(id)}
                className="checkbox"
            />
            <div className="title">
                {title}
            </div>
            <button
                onClick={() => removeTodo(id)}
                className="delete"
            >x</button>
        </div>
    )
}