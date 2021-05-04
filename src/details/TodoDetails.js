export default function TodoDetails(props) {
    const todo = props.todo;
    if (!todo.id) return null;
    return (
        <div>
            <h3>Details of todo #{todo.id}</h3>
            <div>{todo.details}</div>
        </div>
    );
};