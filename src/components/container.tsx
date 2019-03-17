import { Grid, withStyles, WithStyles } from '@material-ui/core';
import React, { memo } from 'react';
import { style } from '../styles/components/container';

interface IProps extends React.FunctionComponent<WithStyles<typeof style>> {}

const ContainerComponent: IProps = memo(({ classes, children }) => (
  <Grid
    className={classes.layout}
    container={true}
    direction='row'
    justify='center'
    alignItems='center'
    spacing={32}
  >
    {children}
  </Grid>
));

export const Container = withStyles(style)(ContainerComponent);
