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

const styles = (theme: IExtendedTheme) => {
  const primaryColor = (theme.palette.primary as SimplePaletteColorOptions)
    .main;
  return createStyles({
    cssLabel: {
      '&$cssFocused': {
        color: primaryColor,
      },
    },
    cssFocused: {},
    cssUnderline: {
      '&:before': {
        borderBottomColor: theme.input.underline,
      },
      '&:hover:not($disabled):before,&:before': {
        borderColor: `${theme.input.underline} !important`,
        borderWidth: '1px !important',
      },
      '&:after': {
        borderBottomColor: primaryColor,
      },
    },
  });
};

interface ICustomizedInputProps extends WithStyles<typeof styles> {
  mFormControlProps?: FormControlProps;
  mInputLabelProps?: InputLabelProps;
  mInputProps?: InputProps;
}

interface IProps extends React.FunctionComponent<ICustomizedInputProps> {}

const CustomizedInput: IProps = memo(
  ({
    classes,
    mFormControlProps,
    mInputLabelProps,
    mInputProps,
  }: ICustomizedInputProps) => (
    <FormControl {...mFormControlProps}>
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

export const MInput = withStyles(styles)(CustomizedInput);
