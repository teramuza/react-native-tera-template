import { Constants } from '../Constants';

const operators = [
  {
    pattern: /^(\+?62|0)8(11(\d{6,8})|(1[2|3]|2[1|2|3]|5[2|3])(\d{8}))$/,
    name: 'telkomsel'
  },
  {
    pattern: /^(\+?62|0)8(1[7|8|9](\d{6,10})|(59|77|78)(\d{8,10}))$/,
    name: 'xl'
  },
  {
    pattern: /^(\+?62|0)8(3[3|8](\d{7,9})|(3[2|1])(\d{8,9}))$/,
    name: 'axis'
  },
  {
    pattern: /^(\+?62|0)8(9[5|6|7|8|9](\d{7,10}))$/,
    name: 'three'
  },
  {
    pattern: /^(\+?62|0)8(1[4|5|6](\d{6,8})|(5[5|6|7|8])(\d{7,10}))$/,
    name: 'indosat'
  },
  {
    pattern: /^(\+?62|0)8(8[1-9](\d{7,9}))$/,
    name: 'smartfren'
  }
];

export const isValidPhone = (str) => {
  const toFind = str.replace(/\s+/g, '');
  let found = null;

  operators.forEach((operator) => {
    if (operator.pattern.test(toFind)) {
      found = operator.name;
    }
  });

  return found;
};

const validatePhoneNumberFormat = (number) => {
  const phoneNumber = isValidPhone(number);
  return !!phoneNumber;
};

const validatePhoneNumber = (number) => number.length >= 12 && number.length <= 16;

const validateEmail = (email) => {
  const re = new RegExp (['^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>(),[\\]\\.,;:\\s@\\"]+)*)',
    '|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
    '[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+',
    '[a-zA-Z]{2,}))$'].join(''));

  return re.test(String(email).toLowerCase());
};

const containLowercase = (text) => /^(?=.*[a-z])/.test(text);

const containUppercase = (text) => /^(?=.*[A-Z])/.test(text);

const formatterPhoneNumber = (number) => {
  const countryNumber = number.substr(0, 3);
  const { PHONE_PREFIX } = Constants;

  if (countryNumber === PHONE_PREFIX.ID) {
    if (number.substr(3, 1) === '0') {
      return PHONE_PREFIX.ID + number.slice(4, number.length);
    } else {
      return number;
    }
  } else if (number.length < 3) {
    return PHONE_PREFIX.ID;
  } else if (number.substr(0, 1) === '0') {
    return PHONE_PREFIX.ID + number.slice(1, number.length);
  } else {

    const firstTwo = number.substr(0, 2);

    if (firstTwo === '62') {
      return '+' + number;
    } else {
      return PHONE_PREFIX.ID + number;
    }

  }
};

const numberOnly = (number) => {
  const num = number.match(/^\+?\d+/g, '') || [];
  return num.join('');
};

export {
  validatePhoneNumberFormat,
  validatePhoneNumber,
  validateEmail,
  containLowercase,
  containUppercase,
  formatterPhoneNumber,
  numberOnly
};
