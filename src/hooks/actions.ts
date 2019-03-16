import { useState } from 'react';
import { IToDo } from './todo';

export type TEdit = Record<number, IToDo>;
export interface IActions {
  edit?: TEdit | undefined;
  delete?: boolean | undefined;
  confirmPopUp?: boolean;
}

const ENTER_KEY_CODE = 13;

const defaultToDo: IToDo = { id: 0, text: '', status: 'default' };
const actions: IActions = {
  edit: {},
  delete: undefined,
};

export const actionsHook = () => {
  const [todoObj, setInputValue] = useState<IToDo>(defaultToDo);
  const [actionObj, setAction] = useState<IActions>(actions);
  return {
    todoObj,
    actionObj,
    changeInput: (event) => {
      todoObj.text = event.target.value;
      setInputValue({ ...todoObj });
    },
    clearInput: () => {
      defaultToDo.text = '';
      setInputValue(defaultToDo);
    },
    updateActions: (action) => setAction({ ...action }),
    keyInput: (event, callback?: (T: any) => any) => {
      if (event.which === ENTER_KEY_CODE || event.keyCode === ENTER_KEY_CODE) {
        if (callback) callback(todoObj);
        return true;
      }
      return false;
    },
  };
};
