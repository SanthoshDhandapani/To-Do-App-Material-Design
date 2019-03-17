import { createMuiTheme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { Color } from 'csstype';
import { hexToRgb, rgbWithAlpha } from '../../utils/color';
import { mColors } from '../colors';

export interface IExtendedTheme extends ThemeOptions {
  input?: {
    underline: Color;
  };
  headerSvgIconStyle?: React.CSSProperties;
  boxPrimary?: React.CSSProperties;
  boxActive?: React.CSSProperties;
  boxCompleted?: React.CSSProperties;
}

const primaryRgb = hexToRgb(mColors.primary);
const activeBoxRgb = hexToRgb(mColors.primary);
const completedBoxRgb = hexToRgb(mColors.primary);

const config: IExtendedTheme = {
  palette: {
    type: 'light',
    primary: {
      main: mColors.primary,
      contrastText: mColors.whitey,
      light: mColors.lite,
    },
  },
  typography: {
    useNextVariants: true,
  },
  input: {
    underline: mColors.lineGrey,
  },
  boxPrimary: {
    boxShadow: `0 12px 20px -10px ${rgbWithAlpha(
      primaryRgb,
      '0.28',
    )}, 0 4px 20px 0px ${rgbWithAlpha(
      '0, 0, 0',
      '0.12',
    )}, 0 7px 8px -5px ${rgbWithAlpha(primaryRgb, '0.2')}`,
  },
  boxActive: {
    boxShadow: `0 12px 20px -10px ${rgbWithAlpha(
      activeBoxRgb,
      '0.28',
    )}, 0 4px 20px 0px ${rgbWithAlpha(
      '0, 0, 0',
      '0.12',
    )}, 0 7px 8px -5px ${rgbWithAlpha(activeBoxRgb, '0.2')}`,
  },
  boxCompleted: {
    boxShadow: `0 12px 20px -10px ${rgbWithAlpha(
      completedBoxRgb,
      '0.28',
    )}, 0 4px 20px 0px ${rgbWithAlpha(
      '0, 0, 0',
      '0.12',
    )}, 0 7px 8px -5px ${rgbWithAlpha(completedBoxRgb, '0.2')}`,
  },
  headerSvgIconStyle: {
    width: 42,
    height: 38,
  },
};

const theme = createMuiTheme(config);

export default theme;

export interface IThemeProps {
  theme: IExtendedTheme;
}
