import {
  Divider,
  Fab,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Check from '@material-ui/icons/Done';
import Edit from '@material-ui/icons/Edit';
import ViewListSharp from '@material-ui/icons/ViewListSharp';
import React, { Fragment, FunctionComponent, memo } from 'react';
import { mColors } from '../../assets/colors';
import { IThemeProps } from '../../assets/theme';
import { IToDo } from '../../hooks/todo';
import { style } from '../../styles/components/app/active';
import CardIcon from '../cardIcon';
import SectionCard from '../sectionCard';

interface IActiveTodoListComponentProps {
  todoList: IToDo[];
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

const ActiveTodoRow: FunctionComponent<{ todo: IToDo }> = ({ todo }) => (
  <Fragment>
    <ListItem key={todo.id}>
      <Fab
        aria-label='Check'
        style={{
          width: 30,
          height: 30,
          minWidth: 0,
          minHeight: 0,
          boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)',
        }}
        color={'primary'}
      >
        <Check />
      </Fab>
      <ListItemText style={{ marginTop: '3px' }} primary={todo.text} />
      <ListItemSecondaryAction>
        <IconButton aria-label='Edit'>
          <Edit fontSize={'small'} style={{ color: mColors.completedLite }} />
        </IconButton>
        <IconButton aria-label='Delete'>
          <Delete fontSize={'small'} style={{ color: '#F44336' }} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <Divider />
  </Fragment>
);

const ActiveTodoList = memo(({ classes, theme, todoList }: IProps) => (
  <Grid
    container={true}
    direction={'row'}
    alignContent={'center'}
    justify={'center'}
    className={classes.layout}
  >
    <SectionCard
      cardIcon={<IconComponent iconStyle={theme.headerSvgIconStyle} />}
      label={'TODO'}
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
        <Grid container={true} direction={'row'} style={{ marginTop: '-10px' }}>
          <Grid item={true} xs={12}>
            <List disablePadding={true}>
              {todoList.map((todoObj) => (
                <ActiveTodoRow todo={todoObj} />
              ))}
            </List>
          </Grid>
        </Grid>
      )}
    </SectionCard>
  </Grid>
));

export default withStyles(style, { withTheme: true })(
  ActiveTodoList as React.FunctionComponent<IActiveTodoListComponentProps>,
);
