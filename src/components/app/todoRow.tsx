import {
  Divider,
  Fab,
  Grid,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Popover,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import Delete from '@material-ui/icons/Delete';
import Check from '@material-ui/icons/Done';
import Edit from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/SaveAlt';
import React, { Fragment, FunctionComponent, memo } from 'react';
import { mColors } from '../../assets/colors';
import { IActions, TEdit } from '../../hooks/actions';
import { IToDo } from '../../hooks/todo';
import { MInput } from '../mInput';

interface IToDoRowProps {
  completed?: boolean;
  rowIndex;
  updateItem?;
  onEnter?: (e, callBack) => {};
  todo: IToDo;
  deleteItem: (id) => {};
  actionProps: IActions;
  updateActions?: (actions: IActions) => any;
}

const modifiedValues: Record<number, string> = [];

const onEditClick = (todo: IToDo, edits: TEdit, update) => {
  const id = todo.id;
  edits[id] = todo;
  modifiedValues[id] = todo.text;
  update({ edit: { ...edits } });
};

const onCancelClick = (todo: IToDo, edits: TEdit, update) => {
  delete edits[todo.id];
  update({ edit: { ...edits } });
};

const onSaveClick = (values, updateItem, todo: IToDo, edits, update) => {
  const updatedValue = values[todo.id];
  updatedValue.trim();
  if (updatedValue.length !== 0) {
    todo.text = updatedValue;
  }
  delete values[todo.id];
  Promise.all([updateItem(), onCancelClick(todo, edits, update)]);
};

export const TodoRow: FunctionComponent<IToDoRowProps> = ({
  updateActions,
  actionProps,
  completed,
  deleteItem,
  rowIndex,
  onEnter,
  updateItem,
  todo,
}) => {
  const isActive = !completed;
  const editEntries = actionProps.edit;
  const isEdit =
    isActive && Object.keys(editEntries).indexOf(todo.id + '') !== -1;

  return (
    <Fragment>
      <ListItem>
        {isActive && !isEdit && (
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
            <Check
              onClick={() => {
                todo.status = 'completed';
                updateItem();
              }}
              tabIndex={rowIndex}
            />
          </Fab>
        )}
        {!isEdit ? (
          isActive ? (
            <ListItemText style={{ marginTop: '3px' }} primary={todo.text} />
          ) : (
            <Typography variant={'body1'} color='textSecondary'>
              {todo.text}
            </Typography>
          )
        ) : (
          <Grid item={true} xs={10}>
            <MInput
              mFormControlProps={{
                fullWidth: true,
                style: { marginTop: -20 },
              }}
              mInputProps={{
                defaultValue: todo.text,
                onChange: (e) => {
                  modifiedValues[todo.id] = e.target.value;
                  // modifiedValues = { ...modifiedValues };
                },
                onKeyDown: (e) => {
                  onEnter(e, () => {
                    onSaveClick(
                      modifiedValues,
                      updateItem,
                      todo,
                      editEntries,
                      updateActions,
                    );
                  });
                },
              }}
            />
          </Grid>
        )}
        <ListItemSecondaryAction>
          {isActive &&
            (!isEdit ? (
              <IconButton
                aria-label='Edit'
                onClick={() => {
                  onEditClick(todo, editEntries, updateActions);
                }}
              >
                <Edit
                  fontSize={'small'}
                  style={{ color: mColors.completedLite }}
                />
              </IconButton>
            ) : (
              <IconButton
                aria-label='Edit'
                onClick={(e) =>
                  onSaveClick(
                    modifiedValues,
                    updateItem,
                    todo,
                    editEntries,
                    updateActions,
                  )
                }
              >
                <Save fontSize={'small'} style={{ color: mColors.lite }} />
              </IconButton>
            ))}
          {!isEdit ? (
            <IconButton
              aria-label='Delete'
              onClick={() => {
                deleteItem(todo.id);
              }}
            >
              <Delete fontSize={'small'} style={{ color: '#F44336' }} />
            </IconButton>
          ) : (
            <IconButton
              aria-label='Close'
              onClick={() => {
                onCancelClick(todo, editEntries, updateActions);
              }}
            >
              <Close fontSize={'small'} style={{ color: '#F44336' }} />
            </IconButton>
          )}
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </Fragment>
  );
};
