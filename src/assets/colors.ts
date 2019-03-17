import { lightBlue } from '@material-ui/core/colors';
import { Color } from 'csstype';

export const mColors: IMColors = {
  primary: lightBlue[400],
  lite: lightBlue[300],
  whitey: '#fff',
  lineGrey: '#b2b2b2',
  mildGrey: '#eee',
  active: '#ffa21a',
  activeLite: '#ffaa2e',
  completed: '#5cb860',
  completedLite: '#6abe6d',
  warn: '#F44336',
};

interface IMColors {
  primary: Color;
  lite: Color;
  whitey: Color;
  lineGrey: Color;
  mildGrey: Color;
  active: Color;
  activeLite: Color;
  completed: Color;
  completedLite: Color;
  warn: Color;
}
