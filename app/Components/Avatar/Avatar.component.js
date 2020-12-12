// @flow

import React from 'react';
import { Image } from 'react-native';
import type ImageStylePropTypes from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedImageStylePropTypes';
import { Styles } from './Avatar.component.style';

type Props = {
  source: {uri: string} | number,
  size: number,
  resizeMode?: ('stretch' | 'cover' | 'center' | 'contain'),
  style?: ImageStylePropTypes
}

export default ({
  source,
  size,
  style,
  resizeMode = 'contain'
}: Props) => (
  <Image source={source} style={[Styles.avatar(size, resizeMode), style]} />
);
