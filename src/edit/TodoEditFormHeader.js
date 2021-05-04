export default function TodoEditFormHeader(props) {
    const todo = props.todo;
    if (todo.id) {
        return <h2>Edit todo #{todo.id}</h2>
    } else {
        return <h2>Create new todo:</h2>
    }
}