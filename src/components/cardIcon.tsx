import { createStyles, Icon } from '@material-ui/core';
import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import React from 'react';
import { mColors } from '../assets/colors';
import { IExtendedTheme } from '../assets/theme';

const cardIconStyle = (theme: IExtendedTheme) => {
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

export interface ICardIconProps {
  active?: boolean;
  completed?: boolean;
  children?: React.ReactNode;
}

interface ICardIconStyleProps
  extends ICardIconProps,
    WithStyles<typeof cardIconStyle> {}

export interface ICardIconComponentProps
  extends React.FunctionComponent<ICardIconStyleProps> {}

const CardIcon: ICardIconComponentProps = ({
  classes,
  children,
  active,
  completed,
}) => {
  const boxClass = active
    ? classes.cardActive
    : completed
    ? classes.cardSuccess
    : classes.cardPrimary;
  return <div className={classes.card + ' ' + boxClass}>{children}</div>;
};

export default withStyles(cardIconStyle)(CardIcon);
