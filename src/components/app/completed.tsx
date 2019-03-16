import { Grid, Typography, withStyles, WithStyles } from '@material-ui/core';
import Check from '@material-ui/icons/BeenhereSharp';
import React, { memo } from 'react';
import { IThemeProps } from '../../assets/theme';
import { style } from '../../styles/components/app/completed';
import CardIcon from '../cardIcon';
import SectionCard from '../sectionCard';

const IconComponent = ({ iconStyle }) => (
  <CardIcon completed={true}>
    <Check style={iconStyle} />
  </CardIcon>
);

interface ICompletedTodoListComponentProps {}

interface IProps
  extends ICompletedTodoListComponentProps,
    IThemeProps,
    WithStyles<typeof style> {}

const CompletedTodoList = memo(({ classes, theme }: IProps) => (
  <Grid
    container={true}
    direction={'row'}
    alignContent={'center'}
    justify={'center'}
    className={classes.layout}
  >
    <SectionCard
      label={'COMPLETED'}
      cardIcon={<IconComponent iconStyle={theme.headerSvgIconStyle} />}
    >
      <Grid item={true} xs={12}>
        <Typography
          align={'center'}
          variant='body1'
          color='textSecondary'
          gutterBottom={true}
        >
          Completed list is empy!
        </Typography>
      </Grid>
    </SectionCard>
  </Grid>
));

export default withStyles(style, { withTheme: true })(
  CompletedTodoList as React.FunctionComponent<
    ICompletedTodoListComponentProps
  >,
);
