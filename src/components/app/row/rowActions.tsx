import { Grid, IconButton } from '@material-ui/core';
import { FormControlProps } from '@material-ui/core/FormControl';
import React, { memo } from 'react';
import { TEdit } from '../../../hooks/actions';
import { IToDo } from '../../../hooks/todo';
import { MInput } from '../../mInput';

interface IModifyTodoProps {
  value: string;
  onKeyEnterCallBack: (e) => void;
  onInputChangeCallBack: (e) => void;
  formControlProps: FormControlProps;
}

interface IUpdateActionIconProps {
  pIsEdit: boolean;
  editCallBack: (e?) => void;
  saveCallBack: (e?) => void;
  EditIcon: React.ReactNode;
  SaveIcon: React.ReactNode;
}

export const onEditClick = (
  pMofifiedValues,
  todo: IToDo,
  edits: TEdit,
  update,
) => {
  const id = todo.id;
  edits[id] = todo;
  pMofifiedValues[id] = todo.text;
  update({ edit: { ...edits } });
};

export const onCancelClick = (todo: IToDo, edits: TEdit, update) => {
  delete edits[todo.id];
  update({ edit: { ...edits } });
};

export const onSaveClick = (values, updateItem, todo: IToDo, edits, update) => {
  const updatedValue = values[todo.id];
  updatedValue.trim();
  if (updatedValue.length !== 0) {
    todo.text = updatedValue;
  }
  delete values[todo.id];
  Promise.all([updateItem(), onCancelClick(todo, edits, update)]);
};

export const ActionIcon = ({ onClickCallBack, ariaLabel, Icon }) => (
  <IconButton aria-label={ariaLabel} onClick={onClickCallBack}>
    {...Icon}
  </IconButton>
);

export const UpdateActionIcon = memo(
  ({
    pIsEdit,
    editCallBack,
    saveCallBack,
    EditIcon,
    SaveIcon,
  }: IUpdateActionIconProps) =>
    !pIsEdit ? (
      <ActionIcon
        ariaLabel='Edit'
        onClickCallBack={editCallBack}
        Icon={EditIcon}
      />
    ) : (
      <ActionIcon
        ariaLabel='Save'
        onClickCallBack={saveCallBack}
        Icon={SaveIcon}
      />
    ),
);

export const ModifyTodo = ({
  value,
  onKeyEnterCallBack,
  onInputChangeCallBack,
  formControlProps,
}: IModifyTodoProps) => (
  <Grid item={true} xs={10} md={11}>
    <MInput
      mFormControlProps={formControlProps}
      mInputProps={{
        defaultValue: value,
        onChange: onInputChangeCallBack,
        onKeyDown: onKeyEnterCallBack,
      }}
    />
  </Grid>
);
