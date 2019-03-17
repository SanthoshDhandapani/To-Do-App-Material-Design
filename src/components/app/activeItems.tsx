import {
  Grid,
  List,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import ViewListSharp from '@material-ui/icons/ViewListSharp';
import React, { memo } from 'react';
import { IThemeProps } from '../../assets/theme';
import { IActions } from '../../hooks/actions';
import { IToDo } from '../../hooks/todo';
import { style } from '../../styles/components/app/active';
import CardIcon from '../cardIcon';
import SectionCard from '../sectionCard';
import { TodoRow as ActiveTodoRow } from './todoRow';

interface IActiveTodoListComponentProps {
  todoList: IToDo[];
  actions: IActions;
  onKeyInput: (e, callBack: () => {}) => {};
  update: () => any;
  deleteProp: (id: any) => any;
  updateActionsProp: (actions: IActions) => any;
}

interface IProps
  extends IActiveTodoListComponentProps,
    IThemeProps,
    WithStyles<typeof style> {}

const IconComponent = ({ iconStyle }) => (
  <CardIcon active={true}>
    <ViewListSharp style={iconStyle} />
  </CardIcon>
);

const ActiveTodoList = memo(
  ({
    actions,
    classes,
    deleteProp,
    theme,
    onKeyInput,
    update,
    updateActionsProp,
    todoList,
  }: IProps) => (
    <Grid
      container={true}
      direction={'row'}
      alignContent={'center'}
      justify={'center'}
      className={classes.layout}
    >
      <SectionCard
        cardIcon={<IconComponent iconStyle={theme.headerSvgIconStyle} />}
        label={'TO-DO LIST'}
      >
        {todoList.length === 0 ? (
          <Grid item={true} xs={12}>
            <Typography
              align={'center'}
              variant='body1'
              color='textSecondary'
              gutterBottom={true}
            >
              No active to do found !
            </Typography>
          </Grid>
        ) : (
          <Grid container={true} style={{ marginTop: '-10px' }}>
            <Grid item={true} xs={12} direction={'row'}>
              <List disablePadding={true}>
                {todoList.map((todoObj, index) => (
                  <ActiveTodoRow
                    actionProps={actions}
                    deleteItem={deleteProp}
                    key={todoObj.id}
                    rowIndex={index}
                    updateItem={update}
                    onEnter={onKeyInput}
                    updateActions={updateActionsProp}
                    todo={todoObj}
                  />
                ))}
              </List>
            </Grid>
          </Grid>
        )}
      </SectionCard>
    </Grid>
  ),
);

export default withStyles(style, { withTheme: true })(
  ActiveTodoList as React.FunctionComponent<IActiveTodoListComponentProps>,
);
