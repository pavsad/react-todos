import TodoListItem from "./TodoListItem";
import {useContext} from "react";
import {TodosContext} from "../contexts/TodosContext";

export default function TodoList(props) {
    return (
        <ul>
            {(props.todos).map(todo => <TodoListItem
                key={todo.id}
                todo={todo}
                onDetails={props.onDetails}
                onEdit={props.onEdit}
                onDelete={props.onDelete}
            />)}
        </ul>
    );
};