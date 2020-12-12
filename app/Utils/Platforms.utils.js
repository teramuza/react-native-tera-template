import { Platform, Dimensions, NativeModules } from 'react-native';
import { get } from 'lodash';

const PLATFORM = {
  IOS: 'ios',
  ANDROID: 'android'
};

const { width, height } = Dimensions.get('window');

const isAndroid = () => Platform.OS === PLATFORM.ANDROID;

const isIOS = () => Platform.OS === PLATFORM.IOS;

const isNative = () =>
  Platform.OS === PLATFORM.ANDROID || Platform.OS === PLATFORM.IOS;

const isIpad = () => isIOS() && get(NativeModules, 'DeviceProfile.device', 'iPhone') === 'iPad';

const isIphoneX = () => {
  let ratio = height / width;
  if (width > height) {
    ratio = width / height;
  }
  return (isIOS() && ratio >= 2.0);
};

const iPhoneMarginTopSafeArea = () => (isIphoneX() ? 44 : 20);

const osVersion = () => {
  return parseInt(Platform.Version, 10);
};

const iOSBefore10 = () => {
  return (osVersion() <= 10);
};

const iOSAfter10 = () => {
  return (osVersion() >= 11 && isIOS());
};

const isViewPort320 = () => {
  return width === 320;
};

export {
  PLATFORM,
  isAndroid,
  isIOS,
  isNative,
  isIphoneX,
  iPhoneMarginTopSafeArea,
  iOSBefore10,
  iOSAfter10,
  isViewPort320,
  isIpad,
  height,
  width
};
