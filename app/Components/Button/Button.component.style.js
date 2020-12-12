// @flow

import { StyleSheet } from 'react-native';
import { responsiveHeight as rh, responsiveWidth as rw } from '../../Utils/Layout.utils';

const Styles = StyleSheet.create({
  button: (width: number, height: number) => ({
    width: rw(width),
    height: rh(height)
  })
});

export { Styles };
