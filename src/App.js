import './App.css';
import TodosContextProvider from "./contexts/TodosContext";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import PageTodoList from "./pages/PageTodoList";
import PageNewTodo from "./pages/PageNewTodo";
import PageTodoDetails from "./pages/PageTodoDetails";
import PageEditTodo from "./pages/PageEditTodo";

function App() {
    console.log('render - App');
    return (
        <>
            <h1>Todos app</h1>
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/">List</Link></li>
                            <li><Link to="/new">Add</Link></li>
                        </ul>
                    </nav>
                </div>
                <TodosContextProvider>
                    <Switch>
                        <Route exact path="/">
                            <PageTodoList />
                        </Route>
                        <Route path="/new">
                            <PageNewTodo />
                        </Route>
                        <Route path="/edit/:id">
                            <PageEditTodo />
                        </Route>
                        <Route path="/details/:id">
                            <PageTodoDetails />
                        </Route>
                    </Switch>
                </TodosContextProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
