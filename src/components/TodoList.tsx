import { TodoItem } from "./TodoItem";
import { ITodo } from "../types/data";
import { FC } from "react";

interface ITodoListProps {
    items: ITodo[],
    toggleTodo: (id: number) => void,
    removeTodo: (id: number) => void,
}

export const TodoList: FC<ITodoListProps> = (props) => {
    const { items, toggleTodo, removeTodo } = props;

    return (
        <div>
            {props.items.map(todo =>
                <TodoItem
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                    {...todo}
                />
            )}
        </div>
    )
}