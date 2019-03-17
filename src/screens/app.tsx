import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import MuiTheme from '../assets/theme';
import ActiveTodoList from '../components/app/activeItems';
import AddTodo from '../components/app/addItem';
import CompletedTodoList from '../components/app/completed';
import Container from '../components/container';
import Header from '../components/header';
import { actionsHook, todoHook } from '../hooks';

const App: React.FunctionComponent = (props) => {
  const { actionObj, updateActions, todoObj, ...actions } = actionsHook();
  const { todos, addTodo, updateTodos, removeTodo } = todoHook();
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <Header />
      <Container>
        <AddTodo
          inputProps={{
            value: todoObj.text,
            onChange: actions.changeInput,
          }}
          onEnter={actions.keyInput}
          value={todoObj.text}
          onAddClick={addTodo}
          clear={actions.clearInput}
        />
        <ActiveTodoList
          updateActionsProp={updateActions}
          actions={actionObj}
          update={updateTodos}
          deleteProp={removeTodo}
          onKeyInput={actions.keyInput}
          todoList={todos.filter((todo) => todo.status === 'active')}
        />
        <CompletedTodoList
          actions={actionObj}
          deleteProp={removeTodo}
          completedList={todos.filter((todo) => todo.status === 'completed')}
        />
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
