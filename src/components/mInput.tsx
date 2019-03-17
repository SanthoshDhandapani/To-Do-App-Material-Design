import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import Input, { InputProps } from '@material-ui/core/Input';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import React, { memo } from 'react';
import { IExtendedTheme } from '../assets/theme';
import { style } from '../styles/components/mInput';

interface ICustomizedInputProps extends WithStyles<typeof style> {
  floating?: boolean;
  mFormControlProps?: FormControlProps;
  mInputLabelProps?: InputLabelProps;
  mInputProps?: InputProps;
}

interface IProps extends React.FunctionComponent<ICustomizedInputProps> {}

const CustomizedInput: IProps = memo(
  ({
    floating = true,
    classes,
    mFormControlProps,
    mInputLabelProps,
    mInputProps,
  }: ICustomizedInputProps) => (
    <FormControl {...mFormControlProps}>
      {floating && (
        <InputLabel
          htmlFor='standard-input'
          classes={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
          {...mInputLabelProps}
        >
          {mInputLabelProps && mInputLabelProps.children}
        </InputLabel>
      )}
      <Input
        id='standard-input'
        classes={{
          underline: classes.cssUnderline,
        }}
        {...mInputProps}
      />
    </FormControl>
  ),
);

export const MInput = withStyles(style)(CustomizedInput);
