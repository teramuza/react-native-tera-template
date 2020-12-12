/**
 * @format
 */

import { AppRegistry } from 'react-native';
import BaseApp from './app/Router/BaseApp';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => BaseApp);
