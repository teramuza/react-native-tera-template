// @flow

import React from 'react';
import { ViewPropTypes } from 'react-native';
import type { PressEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from './Card.component.style';
import TouchableNative from '../Touchable/TouchableNative.component';

type Props = {
  width: number,
  height: number,
  borderRadius: number,
  style?: ViewPropTypes.style;
  children?: React$Node,
  colors: (string | number)[],
  onPress?: (event: PressEvent) => mixed,
  start?: { x: number; y: number },
  end?: { x: number; y: number }
};

export default ({
  width,
  height,
  borderRadius,
  style,
  children,
  onPress,
  colors,
  start,
  end
}: Props) => (
  <TouchableNative onPress={onPress}>
    <LinearGradient
      start={start}
      end={end}
      colors={colors}
      style={[Styles.cardContainer(width, height, borderRadius), style]}
    >
      {children}
    </LinearGradient>
  </TouchableNative>
);
