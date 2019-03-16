import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React, { Fragment, memo } from 'react';

const Header = memo(() => (
  <div style={{ flexGrow: 1 }}>
    <AppBar style={{ alignItems: 'center' }}>
      <Toolbar>
        <Typography component='h6' variant='h6' color='inherit' align='center'>
          Todo App - Material Design
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
));

export default Header;
