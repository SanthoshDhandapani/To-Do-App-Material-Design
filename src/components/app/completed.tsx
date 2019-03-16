import {
  Grid,
  List,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import Check from '@material-ui/icons/BeenhereSharp';
import React, { memo } from 'react';
import { IThemeProps } from '../../assets/theme';
import { IActions } from '../../hooks/actions';
import { IToDo } from '../../hooks/todo';
import { style } from '../../styles/components/app/completed';
import { TodoRow as CompletedTodoRow } from '../app/todoRow';
import CardIcon from '../cardIcon';
import SectionCard from '../sectionCard';

const IconComponent = ({ iconStyle }) => (
  <CardIcon completed={true}>
    <Check style={iconStyle} />
  </CardIcon>
);

interface ICompletedTodoListComponentProps {
  completedList: IToDo[];
  actions: IActions;
  deleteProp: (id) => any;
}

interface IProps
  extends ICompletedTodoListComponentProps,
    IThemeProps,
    WithStyles<typeof style> {}

const CompletedTodoList = memo(
  ({ actions, classes, deleteProp, theme, completedList }: IProps) => (
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
        {completedList.length === 0 ? (
          <Grid item={true} xs={12}>
            <Typography
              align={'center'}
              variant='body1'
              color='textSecondary'
              gutterBottom={true}
            >
              History not found !
            </Typography>
          </Grid>
        ) : (
          <Grid
            container={true}
            direction={'row'}
            style={{ marginTop: '-10px' }}
          >
            <Grid item={true} xs={12}>
              <List disablePadding={true}>
                {completedList.map((todoObj, index) => (
                  <CompletedTodoRow
                    actionProps={actions}
                    completed={true}
                    key={todoObj.id}
                    rowIndex={index}
                    deleteItem={deleteProp}
                    todo={todoObj}
                  />
                ))}
              </List>
            </Grid>
          </Grid>
        )}
      </SectionCard>
    </Grid>
  ),
);

export default withStyles(style, { withTheme: true })(
  CompletedTodoList as React.FunctionComponent<
    ICompletedTodoListComponentProps
  >,
);
