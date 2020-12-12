// @flow

import { StyleSheet } from 'react-native';
import {
  responsiveBorderRadius as rbr,
  responsiveHeight as rh,
  responsiveWidth as rw
} from '../../Utils/Layout.utils';
import { Colors } from '../../Themes';

const Styles = StyleSheet.create({
  cardContainer: (width: number, height: number, borderRadius: number) => ({
    flex: 1,
    width: rw(width),
    height: rh(height),
    elevation: 4,
    borderRadius: rbr(borderRadius),
    marginHorizontal: rw(8),
    marginVertical: rh(8)
  }),
  coloredCard: (color?: string) => ({
    backgroundColor: color || Colors.WHITE
  })
});

export { Styles };
