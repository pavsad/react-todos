import {TodosContext} from "../contexts/TodosContext";
import {useContext} from "react";
import {useHistory} from "react-router-dom";
import TodoEditForm from "../edit/TodoEditForm";

export default function PageNewTodo(props) {
    const {dispatch} = useContext(TodosContext);
    const history = useHistory();
    const addTodo = (todo) => {
        dispatch({type: 'ADD', todo});
        history.push('/');
    };
    return (
        <TodoEditForm todo={null} onSubmit={addTodo} />
    );
}