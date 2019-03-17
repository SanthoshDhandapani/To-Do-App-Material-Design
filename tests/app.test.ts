import { IToDo, todoHookModel } from '../src/hooks/todo';
import { todosList1, todosList2 } from '../src/utils/mocks/todos_mock_list';

let todos: IToDo[] = [];

const setToDoMock = () => (todoList) => {
  todos = [...todoList];
};
const { addTodo, updateTodos, ...toDoModel } = todoHookModel(
  todos,
  setToDoMock,
);

test('Add a single todo and expect active list to have that', () => {
  const todoText = 'Buy milk today';
  addTodo(todoText);
  expect(todos[0].text).toEqual(todoText);
});

describe('Add list of todo tasks and verify those are added in active list', () => {
  const todosCount = todosList1.length;
  let allMatched = false;
  const mockList = [...todosList1];
  test('Updated todos list size, matching initial todos list size', () => {
    todos.splice(0, todos.length);
    mockList.forEach((todo) => {
      addTodo(todo);
    });
    expect(todos.length).toEqual(todosCount);
    todos.forEach((todo) => {
      allMatched = mockList.indexOf(todo.text) !== -1;
      if (!allMatched) return;
    });
  });
  test('Matching items in todo with initial list ', () => {
    expect(allMatched).toBe(true);
  });
});

describe('Update and move item to completed', () => {
  const check = 'I am the only one active';
  const updateText = 'I am the updated active';
  let activeTodosCount;
  let completedTodosCount;
  const mockList = todosList2;
  test('Updated a to do item - (' + check + ')', () => {
    toDoModel.todos = [...mockList];
    updateTodos();
    const activeList = toDoModel.todos.filter(
      (todo) => todo.status === 'active',
    );
    activeTodosCount = activeList.length;
    completedTodosCount = toDoModel.todos.filter(
      (todo) => todo.status === 'completed',
    ).length;
    let updated: boolean;
    const foundTodo = activeList.find((todo) => todo.text === check);
    if (foundTodo) {
      foundTodo.text = updateText;
      updated = true;
    }
    updateTodos();
    expect(updated).toBe(true);
  });

  test('Move the updated item to completed', () => {
    const activeList = toDoModel.todos.filter(
      (todo) => todo.status === 'active',
    );
    activeList.forEach((todo) => {
      if (todo.text === updateText) {
        todo.status = 'completed';
        activeTodosCount -= activeTodosCount;
        return;
      }
    });
    const completedList = toDoModel.todos.filter(
      (todo) => todo.status === 'completed',
    );
    const expectedActiveListLength = toDoModel.todos.filter(
      (todo) => todo.status === 'active',
    ).length;
    expect(expectedActiveListLength).toBe(activeTodosCount);
    expect(completedList.length).toBe(completedTodosCount + 1);
  });
});
