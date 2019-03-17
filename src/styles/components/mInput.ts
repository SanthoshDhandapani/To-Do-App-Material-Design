import { createStyles } from '@material-ui/core';
import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import { IExtendedTheme } from '../../assets/theme';

export const style = (theme: IExtendedTheme) => {
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
