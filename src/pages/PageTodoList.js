import TodoList from "../list/TodoList";
import {useContext} from "react";
import {TodosContext} from "../contexts/TodosContext";
import {useHistory} from "react-router-dom";
import TodoListFilter from "../list/TodoListFilter";

export default function PageNewTodo() {
    const { todos, filter, dispatch } = useContext(TodosContext);
    const filteredTodos = todos.filter(todos => todos.name.toLowerCase().includes(filter.toLowerCase()));
    const history = useHistory();
    const onDetails = (id) => history.push('/details/' + id)
    const onEdit = (id) => history.push('/edit/' + id)
    const onDelete = (id) => dispatch({type: 'DELETE', id})
    const onFilter = (query) => {
        query = query.trim();
        dispatch({type: 'FILTER', filter: query})
    };
    return (
        <>
            <TodoListFilter value={filter} onChange={onFilter} />
            <TodoList todos={filteredTodos}
                      onDetails={onDetails}
                      onEdit={onEdit}
                      onDelete={onDelete}
            />
        </>
    );
}