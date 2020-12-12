import React from 'react';
import { StatusBar, View } from 'react-native';

export default ({ backgroundColor, ...props }) => (
  <View style={backgroundColor}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);
