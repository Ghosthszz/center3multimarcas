// js/crypto.js
import { ENV } from "./env.js";

function getKey() {
  return CryptoJS.enc.Utf8.parse(ENV.CRYPTO.SECRET_KEY);
}

function getIv() {
  return CryptoJS.enc.Utf8.parse(ENV.CRYPTO.IV);
}

export function encrypt(text) {
  return CryptoJS.AES.encrypt(text, getKey(), {
    iv: getIv(),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString();
}

export function decrypt(cipher) {
  const bytes = CryptoJS.AES.decrypt(cipher, getKey(), {
    iv: getIv(),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  return bytes.toString(CryptoJS.enc.Utf8);
}
