import moment from 'moment/min/moment-with-locales';

import { Constants } from '../Constants';

const formatMilliseconds = (milliseconds) => {
  const remainingSec = Math.round(milliseconds / 1000);
  const seconds = parseInt((remainingSec % 60).toString(), 10);
  const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
  const hours = parseInt((remainingSec / 3600).toString(), 10);
  const s = seconds < 10 ? '0' + seconds : seconds;
  const m = minutes < 10 ? '0' + minutes : minutes;
  let h = hours < 10 ? '0' + hours : hours;
  h = h === '00' ? '' : h + ':';
  return (h + m + ':' + s);
};

const epochToDate = (epoch, dateFormat) => moment.unix(epoch).format(dateFormat);

const remainingTime = (date, dateFormat) => {
  const startDate = moment(date, dateFormat);
  const endDate = moment();
  return startDate.to(endDate, true);
};

const formatDate = (date) => moment(date).format(Constants.DATE_FORMAT.DDMMYYYY);

const formatStandardDate = (date) => moment(date).format(Constants.DATE_FORMAT.STANDARD);

const formatNormalDate = date => moment(date).format(Constants.DATE_FORMAT.DDMMMMYY);

const customFormatDate = (date, format) => moment(date).format(format);

const durationTime = (date) => {
  const endDate = moment(date);
  const startDate = moment();

  return moment.duration(endDate.diff(startDate));
};

const formatHours = (hours) => hours < 10 ? '0' + hours : hours;

const formatMinutes = (minutes) => minutes < 10 ? '0' + minutes : minutes;

const formatSeconds = (seconds) => seconds < 10 ? '0' + seconds : seconds;

const getHourFromMilliseconds = (milliseconds) => {
  const remainingSec = Math.round(milliseconds / 1000);
  const hours = parseInt((remainingSec / 3600).toString(), 10);
  return hours < 10 ? '0' + hours : hours;
};

const getMinutesFromMilliseconds = (milliseconds) => {
  const remainingSec = Math.round(milliseconds / 1000);
  const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
  return minutes < 10 ? '0' + minutes : minutes;
};

const getSecondsFromMilliseconds = (milliseconds) => {
  const remainingSec = Math.round(milliseconds / 1000);
  const seconds = parseInt((remainingSec % 60).toString(), 10);
  return seconds < 10 ? '0' + seconds : seconds;
};

const getMillisecondsDuration = (startDate, endDate) => {
  const now = moment(startDate);
  const end = moment(endDate);
  var duration = moment.duration(end.diff(now));
  return duration.asMilliseconds();
};

export {
  formatMilliseconds,
  epochToDate,
  remainingTime,
  durationTime,
  formatHours,
  formatMinutes,
  formatSeconds,
  formatDate,
  customFormatDate,
  formatStandardDate,
  formatNormalDate,
  getHourFromMilliseconds,
  getMinutesFromMilliseconds,
  getSecondsFromMilliseconds,
  getMillisecondsDuration
};
