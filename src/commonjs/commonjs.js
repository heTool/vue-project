/**
 * Created by Administrator on 2017/11/1.
 */
//加密算法
 export function des(key,message){
  let keyHex = CryptoJS.enc.Utf8.parse(key);
  let ivHex = CryptoJS.enc.Utf8.parse(key);
  let encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    iv:ivHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

