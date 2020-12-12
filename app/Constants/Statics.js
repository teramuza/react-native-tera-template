/* eslint-disable import/no-cycle */
// @flow

import ENV from 'react-native-config';
import APP from '../../app.json';
import { version } from '../Utils/Version.utils';

const CONFIG = {
  API_URL: ENV.API_URL,
  TIME_OUT: ENV.TIME_OUT,
  BUILD_TYPE: ENV.ENV
};

const APP_INFO = {
  APP_NAME: APP.displayName,
  PACKAGE_NAME: 'com.' + APP.name,
  VERSION: version
};

const SECURITY = {
  ENCRYPTION_KEY: ENV.ENCRYPTION_KEY
};

export { CONFIG, APP_INFO, SECURITY };
