// @flow

import FormData from 'form-data';
import { useState } from 'react';
import debounce from 'lodash/debounce';
import { isAndroid } from './Platforms.utils';
import type { PhotoPayloadProp } from '../Types/DefaultTypes';
import { consoleLogger } from './Helpers.utils';

const createFormData = (body, photo_key?, photo?) => {
  const data = new FormData();
  if (photo_key && photo) {
    data.append(photo_key, {
      name: photo.fileName,
      type: photo.type,
      uri: isAndroid() ? photo.uri : photo.uri.replace('file://', '')
    });
  }

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  consoleLogger('data: ', data);
  return data;
};

const createArrayPhotoFormData = (body, photos: PhotoPayloadProp[]) => {
  const data = new FormData();
  photos.forEach(function(items: PhotoPayloadProp) {
    if (items.photo_key && items.photo) {
      data.append(items.photo_key, {
        name: items.photo.fileName,
        type: items.photo.type,
        uri: isAndroid()
          ? items.photo.uri
          : items.photo.uri.replace('file://', '')
      });
    }
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};

const checkValue = debounce(
  (val, setError, config, key, propsError, propsSetError) => {
    let errorMessage = '';

    for (let i = 0; i < config.length; i++) {
      const curConfig = config[i];
      const validated = curConfig.validating(val);
      if (!validated) {
        errorMessage = curConfig.errorMessage;
        break;
      }
    }
    if (errorMessage && errorMessage.length !== 0) {
      propsError[key] = errorMessage;
      propsSetError(propsError);
      setError({ visible: true, errorMessage });
    } else {
      propsError[key] = null;
      propsSetError(propsError);
      setError({ visible: false, errorMessage });
    }
  },
  500
);

type ConfigInputItemType = {
  errorMessage: String,
  validating: Function
};

/**
 * Validator Text Input
 * @param {String} initValue - initial text input value (required)
 * @param key
 * @param config
 * @param propsError
 * @param propsSetError
 */

const useFormInput = (
  initValue: String,
  key: String,
  config?: [ConfigInputItemType],
  propsError?: Object,
  propsSetError?: Function
) => {
  const [value, setValue] = useState(initValue);
  const [errors, setError] = useState({ visible: false, errorMessage: '' });

  const handleChange = (val: String) => {
    setValue(val);
    if (config) {
      checkValue(val, setError, config, key, propsError, propsSetError);
    }
  };

  return {
    value,
    errors,
    onChangeText: handleChange
  };
};

export { createFormData, createArrayPhotoFormData, useFormInput };
