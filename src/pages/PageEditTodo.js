import {TodosContext} from "../contexts/TodosContext";
import {useContext} from "react";
import {useHistory, useParams} from "react-router-dom";
import TodoEditForm from "../edit/TodoEditForm";

export default function PageEditTodo(props) {
    console.log('render - PageEditTodo');
    const {todos, dispatch} = useContext(TodosContext);
    const history = useHistory();
    let todo = null;
    let {id} = useParams();
    if (id) {
        id = parseInt(id);
        todo = todos.find(item => item.id === id);
    }
    const editTodo = (todo) => {
        dispatch({type: 'EDIT', todo});
        history.push('/');
    };
    return (
        <TodoEditForm todo={todo} onSubmit={editTodo} />
    );
}