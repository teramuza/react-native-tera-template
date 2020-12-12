import { isAndroid } from '../Utils/Platforms.utils';

export const Constants = {
  APP_URL: isAndroid()
    ? 'https://play.google.com/store/apps/details?id=id.teramuza.wishapp'
    : 'https://itunes.apple.com/',
  ENV: {
    PROD: 'release',
    DEV: 'dev',
    UAT: 'uat',
    SIT: 'sit'
  },
  LOCALE: {
    ID: 'id-ID',
    EN: 'en-EN'
  },
  LOCAL_STORAGE: {
    TOKEN: 'token',
    REFRESH_TOKEN: 'refresh_token'
  },
  GENDER: {
    MALE: {
      ID: 1,
      KEY: 'MALE',
      NAME: 'Male',
      CODE: 'GENDER-MALE'
    },
    FEMALE: {
      ID: 2,
      KEY: 'FEMALE',
      NAME: 'Female',
      CODE: 'GENDER-FEMALE'
    }
  },
  GUIDELINE: {
    HEIGHT: 640,
    WIDTH: 360
  },
  PHONE_PREFIX: {
    ID: '+62',
    US: '+XX'
  }
};
