import TodoDetails from "../details/TodoDetails";
import {useContext} from "react";
import {useParams} from "react-router-dom"
import {TodosContext} from "../contexts/TodosContext";

export default function PageTodoDetails() {
    let {id} = useParams();
    id = parseInt(id);
    const {todos} = useContext(TodosContext);
    const todo = todos.find(item => item.id === id);
    return (
        <TodoDetails todo={todo} />
    );
}