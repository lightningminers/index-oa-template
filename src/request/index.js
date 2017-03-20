// import axios from 'axios';
import { APIHOST } from '../lib/env.js';
import { authCode } from '../lib/util.js';

const stream = weex.requireModule('stream');
const fetch = stream.fetch;
/**
 * [getMicroAppsRequest 获取全部应用]
 * @return {[type]} [Promise]
 */
export function getMicroAppsRequest(){
    const microApps = {
        url: APIHOST + '/api/get-microapp-list',
        type: 'json'
    };
    return new Promise(function(resolve,reject){
        fetch(microApps, function(response){
            const ok = response.ok;
            const data = response.data;
            console.log(response);
            if (ok){
                console.log(1234);
                resolve(data);
            } else {
                reject({
                    errcode: 101,
                    errmsg: 'microApps request bad'
                });
            }
        });
    });
}

/**
 * [jsApiOAuthRequest js-api 权限校验]
 * @return {[type]} [Promise]
 */
export function jsApiOAuthRequest(){
    const signRequest = {
        url: APIHOST + '/api/jsapi-oauth?href=' + encodeURIComponent(location.href),
        type: 'json'
    };
    return new Promise(function(resolve,reject){
        fetch(signRequest, function(response){
            const ok = response.ok;
            const data = response.data;
            if(ok){
                const config = {
                    agentId:'76853717',
                    corpId: data.corpId,
                    timeStamp: data.timeStamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: [
                        'biz.util.openLink',
                        'runtime.permission.requestAuthCode'
                    ]
                };
                resolve({
                    errcode: 0
                });
            } else {
                reject({
                    errcode: 101,
                    errmsg: 'js api auth request bad'
                })
            }
        });
    });

}

/**
 * [getUserId 获取用户id]
 * @param  {[type]} corpId [企业corpId]
 * @return {[type]}        [Promise]
 */
export function getUserId(corpId){
    return new Promise(function(resolve, reject){
        authCode(corpId).then(function(result){
            const code = result.code;
            const getUserInfo = {
                url: APIHOST + '/api/get-user-info',
                params: {
                    code: code
                }
            }
            axios(getUserInfo).then(function(response){
                const data = response.data;
                if(data.errcode === 0){
                    resolve(data);
                } else {
                    reject(data);
                }
            }).catch(function(error){

            });
        }).catch(function(error){
            reject(error);
        });
    });
}

/**
 * [getUserInfoRequest 获取用户详情信息]
 * @param  {[type]} userid [用户id]
 * @return {[type]}        [Promise]
 */
export function getUserInfoRequest(userid){
    return new Promise(function(resolve, reject){
        const get = {
            url: APIHOST + '/api/get',
            params: {
                userid: userid
            }
        };
        axios(get).then(function(response){
            const data = response.data;
            if(data.errcode === 0){
                resolve(data);
            } else {
                reject(data);
            }
        }).catch(function(error){
            reject(error);
        });
    });
}
