/* eslint-disable no-console */
// @flow

import { Linking, NetInfo } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { isIOS, width } from './Platforms.utils';
import { Constants, ResponseCode } from '../Constants';
import { AESDecrypt } from './Secure.utils';
import { CONFIG } from '../Constants/Statics';

const noop = () => {};

const keyExtractor = (item, index) => index.toString();

const renderScreen = ({ item }) => item();

const getItemLayout = (data, index) => (
  { length: width, offset: (width) * index, index }
);

const isNetworkConnected = () => {
  if (isIOS()) {
    return new Promise((resolve) => {
      const handleFirstConnectivityChangeIOS = (isConnected) => {
        NetInfo.isConnected.removeEventListener('connectionChange', handleFirstConnectivityChangeIOS);
        resolve(isConnected);
      };
      NetInfo.isConnected.addEventListener('connectionChange', handleFirstConnectivityChangeIOS);
    });
  }

  return NetInfo.isConnected.fetch();
};

const isEmptyObject = (Obj) => !Object.keys(Obj).length;

const isPropertyEmpty = (obj) => {
  let empty = true;

  Object.keys(obj).map((data) => {
    const value = obj[data];
    if(value){
      empty = false;
    }
  });

  return empty;
};

const numberWithCommas = (num) => {
  if(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return num;
};

const preventStartZero = (num) => {
  if (num) {
    return num.search(/^0/) !== -1;
  }
};

const removeCommas = (num) => {
  if(num){
    return num.replace(/\./g, '');
  }

  return num;
};

const removeSpace = (str) => {
  if(str) {
    return str.trim();
  }
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const responseParser = (response) => {
  let parsedResponse;
  if (isIOS()) {
    const firstDecodeResponse = decodeURIComponent(response);
    const decodedResponse = decodeURIComponent(firstDecodeResponse);
    parsedResponse = JSON.parse(decodedResponse);
    return parsedResponse;
  } else {
    parsedResponse = JSON.parse(response);
    return parsedResponse;
  }
};

const injectedJavascript = `(function() {
  window.postMessage = function(data) {
    window.ReactNativeWebView.postMessage(data);
  };
})()`;

const cleanObject = (obj) => {
  const result = obj;
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    const propName = obj[keys[i]];

    if (!obj[propName]) {
      delete result[propName];
    }
  }
  return result;
};

/**
 * @param {Object} obj example input { "page": 1, "sortBy": "date" }
 * output will be "page=1&sortBy=date"
 */
const queryObjectToString = (obj) => {
  let queryParam = '';
  const clearObject = cleanObject(obj);
  const entries = Object.entries(clearObject);

  entries.forEach(([key, value]) => {
    if (Object.prototype.hasOwnProperty.call(obj, key) && value) {
      const i = Object.keys(obj).indexOf(key);
      if (i !== 0) {
        queryParam += `&${key}=${value}`;
      } else {
        queryParam += `${key}=${value}`;
      }
    }
  });

  return queryParam;
};

const removeLast3Character = (amount) => {
  const amountToString = amount.toFixed();
  const removeUniqueCode = amountToString.substring(0, amountToString.length - 3);
  const convertToInt = parseInt(removeUniqueCode, 10);
  return `${convertToInt}.`;
};

// MARK: Remove character plus (+) in email generator
const removeCharacterPlus = (email) => {
  if (email.includes('+')) {
    return email.slice(1);
  } else {
    return email;
  }
};

const isString = (string) => typeof string === 'string';

const isValidJson = (string) => {
  try {
    return JSON.parse(string);
  } catch (error) {
    return false;
  }
};

const hyperLink = (link) => {
  if (typeof link !== 'string') return;

  return Linking.openURL(link);
};

const generateKeycloakOptionHeaders = async () => {
  try {
    const tokenKeycloak = await AsyncStorage.getItem(Constants.LOCAL_STORAGE.TOKEN);

    return {
      headers: {
        'Authorization': `Bearer ${tokenKeycloak}`,
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    return {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
};

const reduxActionCatchHandler = (type, error, defaultErrorMessage) => {

  try {
    const response = error?.response;
    const data = response?.data;

    const status = response?.status;

    if (status === ResponseCode.unauthorized) {
      return {
        encrypted: false,
        type,
        error: response,
        errorType: 'catch',
        errorMessage: `${status} - Unauthorized`
      };
    }

    if (status === ResponseCode.server_timeout) {
      return {
        encrypted: false,
        type,
        error: response,
        errorType: 'catch',
        errorMessage: `${status} - Request Timed Out`
      };
    }

    const encrypted = isString(data);

    if (encrypted) {
      const decrypted = AESDecrypt(data);
      const errorMessage = decrypted?.message;

      return {
        encrypted: true,
        type,
        error: decrypted,
        errorType: 'catch',
        errorMessage: errorMessage || defaultErrorMessage
      };
    } else {
      return {
        encrypted: false,
        type,
        error: response,
        errorType: 'catch',
        errorMessage: data?.message || defaultErrorMessage
      };
    }

  } catch (error) {
    return {
      reduxActionCatchHandlerError: true,
      type,
      error,
      errorType: 'catch',
      errorMessage: defaultErrorMessage
    };
  }
};

const removeHttps = (string) => {
  try {
    return string.replace(/.*?:\/\//g, '');
  } catch (error) {
    return string;
  }
};

const getGenderByKey: Object = (key: string) => {
  const { GENDER } = Constants;
  if (key === GENDER.MALE.key)
    return GENDER.MALE;
  else if (key === GENDER.FEMALE.key)
    return GENDER.FEMALE;
  return {
    id: 0
  };
};

const getGenderById: Object = (id: Number) => {
  const { GENDER } = Constants;
  if (id === GENDER.FEMALE.id)
    return GENDER.FEMALE;
  else if (id === GENDER.MALE.id)
    return GENDER.MALE;
  return {
    id: 0
  };
};

const toTitleCase = (str) => str.replace(
  /\w\S*/g,
  function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  }
);

const replaceZeroWithCountryCode = (str) => '62' + str.slice(1);

const isPasswordValid = (value: String) => {
  const regularExpression = /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
  const matched = value.match(regularExpression);
  return matched !== null;
};

const catchLogger = (...data: Array<*>) => {
  consoleLogger('CATCH: ', data);
};

const responseLogger = (...data: Array<*>) => {
  consoleLogger('RESPONSE: ', data);
};

const consoleLogger = (...data: Array<*>) => {
  if (CONFIG.BUILD_TYPE !== Constants.ENV.PROD) {
    console.log(new Date(), ' ', data);
  }
};

const errorLogger = (...data: Array<*>) => {
  console.log(new Date(), '*ERROR* ', data);
};

export {
  noop,
  keyExtractor,
  renderScreen,
  getItemLayout,
  isNetworkConnected,
  isEmptyObject,
  isPropertyEmpty,
  numberWithCommas,
  removeCommas,
  sleep,
  responseParser,
  injectedJavascript,
  removeLast3Character,
  cleanObject,
  queryObjectToString,
  preventStartZero,
  removeSpace,
  removeCharacterPlus,
  hyperLink,
  isString,
  isValidJson,
  generateKeycloakOptionHeaders,
  reduxActionCatchHandler,
  removeHttps,
  toTitleCase,
  replaceZeroWithCountryCode,
  getGenderByKey,
  getGenderById,
  isPasswordValid,
  catchLogger,
  responseLogger,
  consoleLogger,
  errorLogger
};
