//@flow

import React from 'react';
import { FlatList } from 'react-native';

type Props = {
  components: Array<Function>,
  showsScrollIndicator?: boolean
}

const keyExtractor = (_, index: number) => index.toString();

const renderScreen = ({ item }) => item();

export default ({ components, showsScrollIndicator = false }: Props) => (
  <FlatList
    data={components}
    renderItem={renderScreen}
    keyExtractor={keyExtractor}
    showsVerticalScrollIndicator={showsScrollIndicator}
  />
);
