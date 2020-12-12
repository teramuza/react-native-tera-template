/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';
import React from 'react';
import type { Node } from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../../../Themes/Colors';

const Header = (): Node => (
  <ImageBackground
    accessibilityRole="image"
    source={require('./logo.png')}
    style={styles.background}
    imageStyle={styles.logo}
  >
    <Text style={styles.text(28)}>{`${lang('Welcome_to')} React Native`}</Text>
    <Text style={styles.text(16)}>Project Template made by Tera</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: Colors.WHISPER
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192
  },
  text: (font) => ({
    fontSize: font,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black
  })
});

export default Header;
