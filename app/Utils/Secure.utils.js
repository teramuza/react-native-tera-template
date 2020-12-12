import CryptoJS from 'crypto-js';
import { SECURITY } from '../Constants/Statics';

const configSecurity = {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
};
const keyPromise = CryptoJS.enc.Utf8.parse(SECURITY.ENCRYPTION_KEY);
const AESEncrypt = (data) => CryptoJS.AES.encrypt(JSON.stringify(data), keyPromise, configSecurity).toString();
const AESDecrypt = (data) => {
  const convertToBase64 = CryptoJS.enc.Base64.parse(data);
  const decrypt = CryptoJS.AES.decrypt(
    {
      ciphertext: convertToBase64,
      salt: ''
    },
    keyPromise,
    configSecurity
  );

  return JSON.parse(decrypt.toString(CryptoJS.enc.Utf8));
};

export { AESEncrypt, AESDecrypt };
