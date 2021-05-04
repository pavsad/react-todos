import {createContext, useReducer} from "react";
import {default as nextId} from "../utils/IdGenerator";
import reducer from "./reducer";

export const TodosContext = createContext([]);

const originalTodos = [
    { id: nextId(), name: "Add new todo", details: "Try add new todo in the list using above form" },
    { id: nextId(), name: "Edit existing todo", details: "Try edit exiting todo from the list" },
];

const initialState = {
    todos: originalTodos,
    filter: '',
};

const TodosContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <TodosContext.Provider value={{...state, dispatch}}>
            {children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;