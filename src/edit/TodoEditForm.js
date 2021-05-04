import {useRef, memo, useState} from "react";
import TodoEditFormHeader from "./TodoEditFormHeader";
import IdGenerator from "../utils/IdGenerator";
import PropTypes from "prop-types";

const emptyFields = {
    name: '',
    details: '',
};

const TodoEditForm = (props) => {
    console.log('render - EditForm');
    const initialData = props.todo ? {...props.todo} : emptyFields;
    const [data, setData] = useState(initialData);
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (addEditTodo, formData, ev) => {
        ev.preventDefault();
        const todo = {...formData};
        todo.id = todo.id ? todo.id : IdGenerator();
        return addEditTodo(todo);
    };
    return (
        <>
            <TodoEditFormHeader todo={initialData} />
            <form>
                <label>
                    Todo name:
                    <input name="name" type="text" value={data.name} onChange={handleInputChange} />
                </label>
                <label>
                    Todo extra details:
                    <textarea name="details" value={data.details} onChange={handleInputChange} />
                </label>
                <input type="submit" onClick={handleSubmit.bind(this, props.onSubmit, data)} />
            </form>
        </>
    );
};

TodoEditForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    todo: PropTypes.object,
};

export default TodoEditForm;
export const MemoizedTodoEditForm = memo(TodoEditForm);