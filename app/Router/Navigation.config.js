//@flow

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Navigator/MainStack';

export default () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);
