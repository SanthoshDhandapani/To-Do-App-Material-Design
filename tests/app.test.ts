import { todoHookModel } from '../src/hooks/todo';
import { todosList1, todosList2 } from '../src/utils/mocks/todos_mock_list';

const getTodoHook = (todos) => {
  let todoHook;
  const setToDoMock = () => (todoList) => {
    todoHook.todos = todoList;
  };
  todoHook = { ...todoHookModel(todos, setToDoMock()) };
  return todoHook;
};

test('Add a single todo and expect active list to have that', () => {
  const { todos, addTodo } = getTodoHook([]);
  const todoText = 'Buy milk today';
  addTodo(todoText);
  expect(todos[0].text).toEqual(todoText);
});

describe('Add list of todo tasks and verify those are added in active list', () => {
  let allMatched = false;
  test('Updated todos list size, matching initial todos list size', () => {
    const { addTodo, activeTodos } = getTodoHook([]);
    const todosCount = todosList1.length;
    todosList1.forEach((todo) => {
      addTodo(todo);
    });
    const activeList = activeTodos();
    expect(activeList.length).toEqual(todosCount);
    activeList.forEach((todo) => {
      allMatched = todosList1.indexOf(todo.text) !== -1;
      if (!allMatched) return;
    });
  });
  test('Matching items in todo with initial list ', () => {
    expect(allMatched).toBe(true);
  });
});

describe('Update and move item from to completed and remove the completed item', () => {
  const check = 'I am the only one active';
  const updateText = 'I am the updated active';
  let activeTodosCount;
  let completedTodosCount;
  const mockList = todosList2;
  let updatedList = [];

  test('Updated a to do item - (' + check + ')', () => {
    const { todos, updateTodos, activeTodos, completedTodos } = getTodoHook([
      ...mockList,
    ]);
    const activeList = activeTodos();
    activeTodosCount = activeList.length;
    completedTodosCount = completedTodos().length;
    const foundTodo = activeList.find((todo) => todo.text === check);
    if (foundTodo) {
      foundTodo.text = updateText;
    }
    updateTodos();
    updatedList = todos;
    expect(!!foundTodo).toBe(true);
  });

  test('Move the updated item to completed', () => {
    const { todos, activeTodos, completedTodos } = getTodoHook([
      ...updatedList,
    ]);
    const activeList = activeTodos();
    activeList.forEach((todo) => {
      if (todo.text === updateText) {
        todo.status = 'completed';
        activeTodosCount -= activeTodosCount;
        return;
      }
    });
    const completedList = completedTodos();
    const expectedActiveListLength = activeTodos().length;
    updatedList = todos;
    expect(expectedActiveListLength).toBe(activeTodosCount);
    expect(completedList.length).toBe(completedTodosCount + 1);
  });

  test('Remove the moved item from completed', () => {
    const todoHook = getTodoHook([...updatedList]);
    const completedList = todoHook.completedTodos();
    const itemToBeDeleted = completedList.find(
      (todo) => todo.text === updateText,
    );
    todoHook.removeTodo(itemToBeDeleted.id);
    const deletedItem = todoHook.todos.find((todo) => todo.text === updateText);
    expect(deletedItem).toBe(undefined);
    updatedList = undefined;
  });
});
