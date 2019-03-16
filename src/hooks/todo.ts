import { useState } from 'react';

type TodoStatus = 'active' | 'completed';

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
    checkTodo: (checkedId) => {
      setTodos(
        todos.map((todo, index) => {
          if (checkedId === index) {
            todo.status = 'completed';
          }
          return todo;
        }),
      );
    },
    removeTodo: (checkedId) => {
      setTodos(todos.filter((_, index) => checkedId !== index));
    },
  };
};
