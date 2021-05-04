export default function TodoListItem(props) {
    const { id, name } = props.todo;
    return <li>
        <b>{id}</b>
        <span>{name}</span>
        <button onClick={() => props.onDetails(id)}>Details</button>
        <button onClick={() => props.onEdit(id)}>Edit</button>
        <button onClick={() => props.onDelete(id)}>Remove</button>
    </li>
};

TodoListItem.propTypes = {};