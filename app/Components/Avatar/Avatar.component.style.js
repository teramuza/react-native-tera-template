//@flow

import { StyleSheet } from 'react-native';
import { responsiveWidth as rw } from '../../Utils/Layout.utils';

export const Styles = StyleSheet.create({
  avatar: (size: number, resizeMode: string) => ({
    width: rw(size),
    height: rw(size),
    borderRadius: size,
    resizeMode
  })
});
