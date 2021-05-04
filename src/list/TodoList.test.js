import { render, screen } from '@testing-library/react';
import TodoList from "./TodoList";

const todos = [
  { id: 1, name: "First todo", details: "First todo details" },
  { id: 2, name: "Second todo", details: "Second todo details" },
];

test('renders todos list', () => {
  render(<TodoList todos={todos} />);
  const firstTodo = screen.getByText(/First todo/i);
  expect(firstTodo).toBeInTheDocument();

  const secondTodo = screen.getByText(/Second todo/i);
  expect(secondTodo).toBeInTheDocument();
});
