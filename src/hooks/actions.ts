import { useState } from 'react';

const ENTER_KEY_CODE = 13;

export const actionsHook = (initialValue = '') => {
  const [inputValue, setInputValue] = useState(initialValue);
  return {
    inputValue,
    changeInput: (event) => setInputValue(event.target.value),
    clearInput: () => setInputValue(''),
    keyInput: (event, callback?: (T: any) => any) => {
      if (event.which === ENTER_KEY_CODE || event.keyCode === ENTER_KEY_CODE) {
        if (callback) callback(inputValue);
        return true;
      }
      return false;
    },
  };
};
