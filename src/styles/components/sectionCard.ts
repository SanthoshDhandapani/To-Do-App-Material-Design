import { createStyles } from '@material-ui/core/styles';
import { mColors } from '../../assets/colors';

export const style = createStyles({
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
