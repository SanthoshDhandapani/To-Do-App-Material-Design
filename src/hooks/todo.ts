import { useState } from 'react';

type TodoStatus = 'default' | 'active' | 'completed';

export interface IToDo {
  id: number;
  text: string;
  status: TodoStatus;
}

export const todoHook = (initialValue = []) => {
  const [todos, setTodos] = useState<IToDo[]>(initialValue);
  return {
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
    updateTodos: () => {
      setTodos([...todos]);
    },
    removeTodo: (checkedId) => {
      setTodos(todos.filter((todo) => checkedId !== todo.id));
    },
  };
};
