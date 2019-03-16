import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
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
  const { inputValue, ...actions } = actionsHook();
  const { todos, addTodo } = todoHook();
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <Header />
      <Container>
        <AddTodo
          inputProps={{
            value: inputValue,
            onChange: actions.changeInput,
          }}
          onEnter={actions.keyInput}
          value={inputValue}
          onAddClick={addTodo}
          clear={actions.clearInput}
        />
        <ActiveTodoList
          todoList={todos.filter((todo) => todo.status === 'active')}
        />
        <CompletedTodoList />
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
