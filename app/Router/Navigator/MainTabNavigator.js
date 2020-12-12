/* eslint-disable react/jsx-no-bind */
//@flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, TouchableNative } from '../../Components';
import Routes from '../Routes';
import MainStack from './MainStack';
import { Catamaran, Colors } from '../../Themes';
import { responsiveFontValue as rf, responsiveHeight as rh } from '../../Utils/Layout.utils';

const Tab = createBottomTabNavigator();

const MainTab = () => (
  <React.Fragment>
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      initialRouteName={Routes.MainStack.MainStack}
      tabBarOptions={{
        keyboardHidesTabBar: true
      }}
    >
      <Tab.Screen
        name={Routes.MainStack.ExampleScreen}
        component={MainStack}
        options={{
          tabBarLabel: 'Example',
          tabBarIcon: 'storefront'
        }}
      />
      <Tab.Screen
        name={Routes.ExampleScreen}
        component={MainStack}
        options={{
          tabBarLabel: 'ForYou',
          tabBarIcon: 'lotus'
        }}
      />
    </Tab.Navigator>
  </React.Fragment>
);

const TabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) return null;

  return (
    <View style={Styles.containerTab}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        let icon = options?.tabBarIcon !== undefined ? options.tabBarIcon : 'lotus';

        const iconSize = !isFocused ? 22 : 26;

        if (!isFocused)
          icon = icon + '_outline';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key
          });

          if (!isFocused && !event.defaultPrevented)
            navigation.navigate(route.name);
        };

        return (
          <TouchableNative key={index} useForeground onPress={onPress}>
            <View style={Styles.tabItem}>
              <Icon name={icon} color={Colors.AUBERGINE} size={iconSize} />
              <Text style={[Styles.text, isFocused ? Styles.textFocus : Styles.textBlur]}>
                {lang(label)}
              </Text>
            </View>
          </TouchableNative>
        );
      })}
    </View>
  );
};

const Styles = StyleSheet.create({
  containerTab: {
    flexDirection: 'row',
    backgroundColor: Colors.WHISPER,
    height: rh(45)
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: rh(10)
  },
  text: {
    fontSize: rf(7),
    color: Colors.AUBERGINE,
    marginTop: -3
  },
  textFocus: {
    fontSize: rf(8),
    fontFamily: Catamaran.medium,
    color: Colors.AUBERGINE
  },
  textBlur: {
    fontFamily: Catamaran.regular
  }
});

export default MainTab;
