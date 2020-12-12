import { Alert, Linking, BackHandler } from 'react-native';
import VersionCheck from 'react-native-version-check';
import get from 'lodash/get';

import axios from 'axios';
import { version_app } from '../Constants/ApiEndpoints';
import { Constants } from '../Constants';

const getCurrentVersion = () => VersionCheck.getCurrentVersion();

const version = getCurrentVersion();

const versionCheck = async () => {
  const currentVersion = parseFloat(version.replace('.', '').replace('.', ''));

  try {
    const response = await axios.get(version_app);
    const value = get(response, 'data.message.data.value', '');
    const stringValue = value.replace('.', '').replace('.', '');
    const latestVersion = Number(stringValue);

    if (currentVersion < latestVersion) {
      Alert.alert(
        'New Version available!',
        'Please update app to the newest version to continue',
        [
          {
            text: 'OK',
            onPress: async () => {
              BackHandler.exitApp();
              Linking.openURL(Constants.APP_URL);
            }
          }
        ],
        { cancelable: false },
      );
    }
  } catch (error) {
    // error get version playstore
  }
};

export {
  versionCheck,
  version
};
