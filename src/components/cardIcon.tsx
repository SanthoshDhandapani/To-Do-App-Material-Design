import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import React from 'react';
import { style } from '../styles/components/cardIcons';

export interface ICardIconProps {
  active?: boolean;
  completed?: boolean;
  children?: React.ReactNode;
}

interface ICardIconStyleProps
  extends ICardIconProps,
    WithStyles<typeof style> {}

export interface ICardIconComponentProps
  extends React.FunctionComponent<ICardIconStyleProps> {}

const CardIconComponent: ICardIconComponentProps = ({
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

export const CardIcon = withStyles(style)(CardIconComponent);
