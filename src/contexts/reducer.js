const reducer = (state, action) => {
    console.log('Call reducer', action);
    let todos = state.todos;
    switch (action.type) {
        case 'FILTER':
            return {...state, filter: action.filter};
        case 'ADD':
            todos = [...todos, action.todo];
            return {...state, todos};
        case 'EDIT':
            todos = todos.filter(todo => todo.id !== action.todo.id);
            todos = [...todos, action.todo];
            return {...state, todos};
        case 'DELETE':
            todos = todos.filter(todo => todo.id !== action.id);
            return {...state, todos};
        default:
            return state;
    }
};

export default reducer;