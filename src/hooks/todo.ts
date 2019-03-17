import { useState } from 'react';

type TodoStatus = 'default' | 'active' | 'completed';

export interface IToDo {
  id: number;
  text: string;
  status: TodoStatus;
}

export const todoHookModel = (todos: IToDo[], setTodos) => ({
  todos,
  addTodo: (text) => {
    if (text) {
      todos.push({
        id: todos.length,
        text,
        status: 'active',
      });
      setTodos([...todos]);
    }
  },
  activeTodos: () => todos.filter((todo) => todo.status === 'active'),
  updateTodos: () => {
    setTodos([...todos]);
  },
  completedTodos: () => todos.filter((todo) => todo.status === 'completed'),
  removeTodo: (checkedId) => {
    setTodos(todos.filter((todo) => checkedId !== todo.id));
  },
});

export const todoHook = (initialValue = []) => {
  const [todos, setTodos] = useState<IToDo[]>(initialValue);
  return todoHookModel(todos, setTodos);
};
