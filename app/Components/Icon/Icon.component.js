// @flow

import React from 'react';
import { Image } from 'react-native';
import type ImageStylePropTypes from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedImageStylePropTypes';
import { Styles } from './Icon.component.style';
import { Icons } from '../../Themes';

type Props = {
  name: string,
  src?: {uri: string} | number,
  color: string | number,
  size: number,
  style?: ImageStylePropTypes
}

export default ({
  name,
  src,
  color,
  size,
  style
}: Props) => {
  let icon;
  if (src)
    icon = src;
  else if (name && Icons[name])
    icon = Icons[name];
  else
    icon = Icons.default;
  return (
    <Image source={icon} style={[Styles.icon(size, color), style]} />
  );
};
