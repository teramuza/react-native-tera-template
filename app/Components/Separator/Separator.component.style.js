// @flow

import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

const Styles = StyleSheet.create({
  separator: (color: string) => ({
    backgroundColor: color || Colors.HINT_OF_PENSIVE
  }),
  vertical: (percentage?: number) => ({
    width: 1,
    height: `${percentage || 100}%`
  }),
  horizontal: (percentage?: number) => ({
    width: `${percentage || 100}%`,
    height: 1
  })
});

export { Styles };
