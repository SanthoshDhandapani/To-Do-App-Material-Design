import { Grid, Paper, withStyles, WithStyles } from '@material-ui/core';
import React, { memo } from 'react';
import { style } from '../styles/components/container';

interface IProps extends React.FunctionComponent<WithStyles<typeof style>> {}

const Container: IProps = memo(({ classes, children }) => (
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

export default withStyles(style)(Container);
