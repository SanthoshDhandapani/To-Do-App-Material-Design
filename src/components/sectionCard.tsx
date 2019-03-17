import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import React, { memo } from 'react';
import { style } from '../styles/components/sectionCard';

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
