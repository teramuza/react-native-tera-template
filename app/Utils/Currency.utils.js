// @flow

import { Constants, PlatformConstants } from '../Constants';
import { getState } from '../Redux/Store';
import { numberWithCommas } from './Helpers.utils';

const Currency = (number) => {
  const { language: { language } } = getState('language');
  const formattedNumber = numberWithCommas(number);

  if (language === PlatformConstants.LANGUAGE.EN) {
    return `${lang('Idr')} ${formattedNumber.toLocaleString(Constants.LOCALE.EN)}`;
  } else {
    return `${lang('Idr')} ${formattedNumber.toLocaleString(Constants.LOCALE.ID)}`;
  }
};

const redenominator = (nominal: number) => {
  const zerosDivider = parseInt((nominal.toString().length - 1) / 3);
  let newNominal = nominal / (Math.pow(10, 3 * zerosDivider));
  const backComma = newNominal.toString().split('.')[1];
  if (backComma > 2) {
    newNominal = Number(newNominal.toString().split('.')[0] + '.' + backComma.slice(0, 2));
  }
  switch (zerosDivider) {
    case 1:
      return newNominal + ' rb';
    case 2:
      return newNominal + ' jt';
    case 3:
      return newNominal + ' mil';
    case 4:
      return newNominal + ' tril';
    default:
      return nominal;
  }
};

export { Currency, redenominator };
