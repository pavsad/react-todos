function getResetBtnJsx(value, onChange) {
    if (!value) return null;
    return <button onClick={(ev) => {ev.preventDefault(); onChange('')}}>Reset</button>
}

export default function TodoListFilter(props) {
    return <form>
        <label> Filter list:
            <input value={props.value} onChange={(ev) => props.onChange(ev.target.value)} />
        </label>
        {getResetBtnJsx(props.value, props.onChange)}
    </form>
};