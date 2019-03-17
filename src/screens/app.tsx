import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import MuiTheme from '../assets/theme';
import { Container, Header } from '../components';
import { ActiveTodoList, AddTodo, CompletedTodoList } from '../components/app';
import { actionsHook, todoHook } from '../hooks';

export const App: React.FunctionComponent = (props) => {
  const { actionObj, updateActions, todoObj, ...actions } = actionsHook();
  const {
    addTodo,
    activeTodos,
    completedTodos,
    updateTodos,
    removeTodo,
  } = todoHook();
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
          todoList={activeTodos()}
        />
        <CompletedTodoList
          actions={actionObj}
          deleteProp={removeTodo}
          completedList={completedTodos()}
        />
      </Container>
    </MuiThemeProvider>
  );
};
