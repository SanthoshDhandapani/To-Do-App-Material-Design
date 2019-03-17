import {
  Divider,
  Fab,
  Grid,
  ListItem,
  ListItemSecondaryAction,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import { GridSize } from '@material-ui/core/Grid';
import Close from '@material-ui/icons/Close';
import Delete from '@material-ui/icons/Delete';
import Check from '@material-ui/icons/Done';
import Edit from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/SaveAlt';
import React, { Fragment, FunctionComponent, memo } from 'react';
import { mColors } from '../../assets/colors';
import { IActions } from '../../hooks/actions';
import { IToDo } from '../../hooks/todo';
import { style } from '../../styles/components/app/todoRow';
import {
  ActionIcon,
  ModifyTodo,
  onCancelClick,
  onEditClick,
  onSaveClick,
  UpdateActionIcon,
} from './row';
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

interface IGridSizes {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
}

const modifiedValues: Record<number, string> = [];

interface IProps extends IToDoRowProps, WithStyles<typeof style> {}

const TodoRowComponent: FunctionComponent<IProps> = memo(
  ({
    classes,
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

    // Declaring sizes for responsiveness
    const gridSizes: IGridSizes = { xs: 11, sm: 10, md: 11, lg: 11 };
    if (isActive) {
      gridSizes.xs = !isEdit ? 7 : 9;
      gridSizes.sm = !isEdit ? 8 : 12;
      gridSizes.md = !isEdit ? 8 : 11;
      gridSizes.lg = !isEdit ? 9 : 11;
    }

    return (
      <Fragment>
        <ListItem>
          {isActive && !isEdit && (
            <Grid item={true} xs={2} lg={1}>
              <Fab
                aria-label='Check'
                className={classes.doneBtn}
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
            </Grid>
          )}
          <Grid
            item={true}
            // Takes care the responsiveness of the row
            xs={gridSizes.xs}
            sm={gridSizes.sm}
            md={gridSizes.md}
            lg={gridSizes.lg}
          >
            {!isEdit ? (
              <Typography
                component={'p'}
                variant='body1'
                color={isActive ? 'textPrimary' : 'textSecondary'}
                className={classes.rowText}
              >
                {todo.text}
              </Typography>
            ) : (
              // Renders input with row value when the row is in edit mode
              <ModifyTodo
                value={todo.text}
                formControlProps={{
                  fullWidth: true,
                  className: classes.inputContainer,
                }}
                onInputChangeCallBack={(e) => {
                  modifiedValues[todo.id] = e.target.value;
                }}
                onKeyEnterCallBack={(e) => {
                  onEnter(e, () => {
                    onSaveClick(
                      modifiedValues,
                      updateItem,
                      todo,
                      editEntries,
                      updateActions,
                    );
                  });
                }}
              />
            )}
          </Grid>

          <ListItemSecondaryAction>
            {// Render update button only for active rows
            isActive && (
              <UpdateActionIcon
                pIsEdit={isEdit}
                saveCallBack={() => {
                  onSaveClick(
                    modifiedValues,
                    updateItem,
                    todo,
                    editEntries,
                    updateActions,
                  );
                }}
                editCallBack={() => {
                  onEditClick(modifiedValues, todo, editEntries, updateActions);
                }}
                EditIcon={
                  <Edit
                    fontSize={'small'}
                    style={{ color: mColors.completedLite }}
                  />
                }
                SaveIcon={
                  <Save fontSize={'small'} style={{ color: mColors.lite }} />
                }
              />
            )}
            {!isEdit ? (
              // Render delete button for removing the todo
              <ActionIcon
                onClickCallBack={() => {
                  deleteItem(todo.id);
                }}
                ariaLabel={'Delete'}
                Icon={
                  <Delete fontSize={'small'} style={{ color: mColors.warn }} />
                }
              />
            ) : (
              // Render cancel button if row is in edit mode
              <ActionIcon
                onClickCallBack={() => {
                  onCancelClick(todo, editEntries, updateActions);
                }}
                ariaLabel={'Close'}
                Icon={
                  <Close fontSize={'small'} style={{ color: mColors.warn }} />
                }
              />
            )}
          </ListItemSecondaryAction>
        </ListItem>

        <Divider />
      </Fragment>
    );
  },
);

export const TodoRow = withStyles(style)(
  TodoRowComponent as React.FunctionComponent<IToDoRowProps>,
);
