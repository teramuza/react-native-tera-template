// @flow

import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import { Styles } from './Separator.component.style';

type Props = {
  direction?: 'row' | 'column',
  sizePercentage?: number,
  style?: ViewPropTypes.style,
  color?: string
}

export default ({ direction = 'column', sizePercentage, style, color }: Props) => {
  if (direction === 'row') {
    return (
      <View style={[Styles.separator(color), Styles.vertical(sizePercentage), style]} />
    );
  }
  return (
    <View style={[Styles.separator(color), Styles.horizontal(sizePercentage), style]} />
  );
};
