// @flow

import React from 'react';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { isAndroid, isIOS } from '../../Utils/Platforms.utils';

export default (props: any) => {
  if (isAndroid()) {
    return <TouchableNativeFeedback {...props} />;
  } else if (isIOS()) {
    return <TouchableOpacity {...props} />;
  } else {
    return <TouchableOpacity {...props} />;
  }
};
