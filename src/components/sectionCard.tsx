import {
  createStyles,
  Divider,
  Grid,
  Icon,
  Paper,
  Typography,
} from '@material-ui/core';
import { IconProps } from '@material-ui/core/Icon';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import AddBox from '@material-ui/icons/Check';
import Computer from '@material-ui/icons/Computer';
import { ColumnCountProperty } from 'csstype';
import React, { Fragment, lazy, memo } from 'react';
import { mColors } from '../assets/colors';
import CardIcon, { ICardIconProps } from './cardIcon';

const style = createStyles({
  card: { marginTop: 30, padding: 16, paddingRight: 20 },
  cardHeaderLabel: {
    fontSize: '1rem',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 500,
    lineHeight: '0.8',
  },
  svgIcon: {
    width: 46,
    height: 42,
  },
  /* icon: {
    fontSize: '36px',
    lineHeight: '46px',
    width: '46px',
    height: '46px',
    textAlign: 'center',
    overflow: 'unset',
    marginBottom: '1px',
  }, */
  divider: { marginTop: 25, marginBottom: 10, background: mColors.mildGrey },
});

interface ISectionProps extends WithStyles<typeof style> {
  label: React.ReactNode;
  cardIcon?: React.ReactNode;
}

interface IProps extends React.FunctionComponent<ISectionProps> {}

const SectionCard: IProps = memo(({ label, cardIcon, classes, children }) => (
  <Grid item={true} xs={12} sm={8} md={6}>
    <Paper className={classes.card}>
      <Grid container={true} direction={'row'} />
      {cardIcon}
      <Typography
        className={classes.cardHeaderLabel}
        component='h6'
        color='textSecondary'
      >
        {label}
      </Typography>
      <Divider className={classes.divider} />
      <Grid container={true}>{children}</Grid>
    </Paper>
  </Grid>
));

export default withStyles(style)(SectionCard);
