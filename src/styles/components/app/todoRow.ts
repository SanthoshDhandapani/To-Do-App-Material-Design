import { createStyles } from '@material-ui/core';
import { mColors } from '../../../assets/colors';

export const style = createStyles({
  doneBtn: {
    width: 30,
    height: 30,
    minWidth: 0,
    minHeight: 0,
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)',
  },
  rowText: {
    marginTop: '3px',
    wordBreak: 'break-all',
  },
  warnAction: { color: mColors.warn },
  input: {
    paddingRight: 16,
  },
  inputContainer: {
    marginTop: -20,
  },
  addBtn: {
    textAlign: 'center',
  },
});
