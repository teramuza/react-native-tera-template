// @flow

import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import type { PressEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { Styles } from './Card.component.style';
import TouchableNative from '../Touchable/TouchableNative.component';

type Props = {
  width: number,
  height: number,
  borderRadius: number,
  style?: ViewPropTypes.style,
  children?: React$Node,
  onPress?: (event: PressEvent) => mixed,
  color?: string
};

export default ({ width, height, borderRadius, style, children, onPress, color }: Props) => {
  return (
    <TouchableNative onPress={onPress}>
      <View style={[
        Styles.cardContainer(width, height, borderRadius),
        Styles.coloredCard(color),
        style
      ]}
      >
        {children}
      </View>
    </TouchableNative>
  );
}
