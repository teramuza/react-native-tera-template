//@flow

import { StyleSheet } from 'react-native';
import { responsiveWidth as rw } from '../../Utils/Layout.utils';
import { Colors } from '../../Themes';

export const Styles = StyleSheet.create({
  icon: (size: number, color: string) => ({
    width: rw(size),
    height: rw(size),
    tintColor: color || Colors.AUBERGINE,
    resizeMode: 'stretch'
  })
});
