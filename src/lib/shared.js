import logger from './logger';

export function authCode(corpId){
  return new Promise(function(resolve, reject){
    dd.ready(function(){
      dd.runtime.permission.requestAuthCode({
        corpId: corpId,
        onSuccess: function(result) {
          resolve(result);
        },
        onFail : function(err) {
          reject(err);
        }
      });
    });
  });
}

export function isObject(obj){
  return obj !== null && typeof obj === 'object'
}

export function msgLog(opt){
    wpo.log('DING WEB INTERFACE SDK API' + opt.url,1);
}