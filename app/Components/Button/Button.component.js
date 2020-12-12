// @flow

import React from 'react';
import { View, Text } from 'react-native';
import { TouchableNative } from '../Touchable/TouchableNative.component';
import { Styles } from './Button.component.style';

type Props = {
  label: string
};

export default (props: Props) => {
  const { label } = props;
  return (
    <TouchableNative onPress={() => console.warn('woi')}>
      <View style={Styles.button}>
        <Text style={Styles.textButton}>{label}</Text>
      </View>
    </TouchableNative>
  );
};
