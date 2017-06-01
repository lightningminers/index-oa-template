/**
 * Created by xiangwenwen on 2017/2/28.
 */

import axios from 'axios';
import logger from './logger';
import { authCode, isObject, msgLog } from './shared';

axios.interceptors.request.use(function(config){
    msgLog(config.url);
    return config;
},function (error) {
    return Promise.reject(error);
});

function request(Config,msg){
    if (process.env.NODE_ENV !== 'production') {
        if (!isObject(Config)){
            logger.error('必须传入 axios 配置对象');
            return;
        }
    }
    return new Promise(function(resolve, reject){
        axios(Config).then(function(response){
            resolve(response);
        }).catch(function(error){
            reject({
                errcode: 100,
                errmsg: msg,
                error: error
            });
        });
    });
}

/**
 * [jsApiOAuth js-api 权限校验]
 * @param  {[type]} Config    [axios 配置对象]
 * @param  {[type]} jsApiList [需要权限校验的api列表]
 * @return {[type]}           [Promise]
 */
export function jsApiOAuth(Config, jsApiList){
    if (process.env.NODE_ENV !== 'production') {
        if (!isObject(Config)){
            logger.error('必须传入 axios 配置对象');
            return;
        }
    }
    let params = Config.params || {};
    const href = params.href;
    dd.error(function(error){
        logger.error('dd js api OAuth error' + JSON.stringify(error));
    });
    if (process.env.NODE_ENV !== 'production') {
        if (!href){
            logger.warn('参数 href 不能为空格');
        }
        if (href !== location.href){
            logger.warn('传入的 href 参数 与 location.href 不相等');
        }
    }
    params.href = encodeURIComponent(href);
    Config.params = params;
    return new Promise(function(resolve,reject){
        axios(Config).then(function(response){
            const data = response.data;
            if (process.env.NODE_ENV !== 'production') {
                const checks = ['agentId','corpId','timeStamp','nonceStr','signature'];
                const responseKey = Object.keys(data);
                checks.map(function(v){
                   const checkResult = responseKey.filter(function (k) { return v === k;});
                   if (checkResult.length === 0){
                       logger.warn('jsApiOAuth Response ' + v + ' 不能返回空');
                   }
                });
            }
            if (data.errcode === 0){
                const config = {
                    agentId: data.agentId || '',
                    corpId: data.corpId || '',
                    timeStamp: data.timeStamp || '',
                    nonceStr: data.nonceStr || '',
                    signature: data.signature || '',
                    jsApiList: jsApiList || []
                };
                dd.config(config);

            }
            resolve(response);
        }).catch(function(error){
            reject({
                errcode: 100,
                errmsg: 'js api auth request bad',
                error: error
            });
            // alert('sign request error' + JSON.stringify(error));
        });
    });

}

 /**
  * [getUserId 获取用户id]
  * @param  {[type]} Config [axios 配置对象]
  * @param  {[type]} corpId [企业corpId]
  * @return {[type]}        [Promise]
  */
export function getUserId(Config, corpId){
     if (process.env.NODE_ENV !== 'production') {
         if (!Config || typeof Config === 'string'){
             logger.error('必须传入 axios 配置对象');
             return;
         }
         if (!corpId){
             logger.error('必须传入 corpId');
             return;
         }
     }
    return new Promise(function(resolve, reject){
        authCode(corpId).then(function(result){
            const code = result.code;
            let params = Config.params || {};
            params.code = code;
            Config.params = params;
            request(Config, 'getUserId request bad').then(function(response){
                resolve(response);
            }).catch(function(error){
                reject(error);
            });
        }).catch(function(error){
            reject(error);
        });
    });
}

/**
 * [getUserInfoRequest 获取用户详细信息]
 * @param  {[type]} Config [axios 配置对象]
 * @return {[type]}        [Promise]
 */
export function getUserInfo(Config){
    return request(Config, 'getUserInfo request bad')
}

/**
 * [getMicroApps 获取全部应用]
 * @param  {[type]} Config [axios 配置对象]
 * @return {[type]}        [Promise]
 */
export function getMicroApps(Config){
    return request(Config,'microApps request bad');
}

export default {
  jsApiOAuth,
  getUserId,
  getUserInfo,
  getMicroApps
};