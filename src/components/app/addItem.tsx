import { Fab, Grid, withStyles, WithStyles } from '@material-ui/core';
import { InputProps } from '@material-ui/core/Input';
import AddIcon from '@material-ui/icons/Add';
import Assignment from '@material-ui/icons/Assignment';
import React, { Fragment, memo } from 'react';
import { CardIcon, MInput, SectionCard } from '../';
import { IThemeProps } from '../../assets/theme';
import { style } from '../../styles/components/app/addItem';

interface IAddTodoComponentProps {
  value?: string;
  inputProps?: InputProps;
  onEnter?: (e, callBack?) => any;
  clear?: () => any;
  onAddClick?: (e, callBack?: () => any) => any;
}

interface IProps
  extends IAddTodoComponentProps,
    IThemeProps,
    WithStyles<typeof style> {}

const IconComponent = ({ iconStyle }) => (
  <CardIcon>
    <Assignment style={iconStyle} />
  </CardIcon>
);

const AddTodoComponent = memo(
  ({ classes, theme, value, inputProps, ...props }: IProps) => {
    const addTodoItem = () => {
      props.onAddClick(value);
      if (props.clear) {
        props.clear();
      }
    };

    if (inputProps) {
      inputProps.onKeyPress = (e) => {
        props.onEnter(e, addTodoItem);
      };
    }

    return (
      <Fragment>
        <Grid
          container={true}
          direction={'row'}
          alignContent={'center'}
          justify={'center'}
        >
          <SectionCard
            cardIcon={<IconComponent iconStyle={theme.headerSvgIconStyle} />}
            label={'ADD ITEM'}
          >
            <Grid container={true} className={classes.layout}>
              <Grid xs={10} item={true} className={classes.input}>
                <MInput
                  mInputLabelProps={{ children: 'What do you want to do?' }}
                  mFormControlProps={{
                    fullWidth: true,
                  }}
                  mInputProps={inputProps}
                />
              </Grid>

              <Grid xs={2} item={true} className={classes.addBtn}>
                <Fab
                  color='primary'
                  aria-label='Add'
                  size={'medium'}
                  onClick={addTodoItem}
                  disabled={!value}
                >
                  <AddIcon />
                </Fab>
              </Grid>
            </Grid>
          </SectionCard>
        </Grid>
      </Fragment>
    );
  },
);

export const AddTodo = withStyles(style, { withTheme: true })(
  AddTodoComponent as React.FunctionComponent<IAddTodoComponentProps>,
);
