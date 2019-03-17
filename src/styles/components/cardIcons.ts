import { createStyles } from '@material-ui/core';
import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import { mColors } from '../../assets/colors';
import { IExtendedTheme } from '../../assets/theme';

export const style = (theme: IExtendedTheme) => {
  const { main, light, contrastText } = theme.palette
    .primary as SimplePaletteColorOptions;

  return createStyles({
    card: {
      borderRadius: 5,
      padding: 15,
      marginTop: '-50px',
      marginRight: 15,
      float: 'left',
      color: contrastText,
    },
    cardPrimary: {
      background: `linear-gradient(60deg, ${main}, ${light})`,
      ...theme.boxPrimary,
    },
    cardActive: {
      background: `linear-gradient(60deg, ${mColors.active}, ${
        mColors.activeLite
      })`,
      ...theme.boxActive,
    },
    cardSuccess: {
      background: `linear-gradient(60deg, ${mColors.completed}, ${
        mColors.completedLite
      })`,
      ...theme.boxCompleted,
    },
  });
};
