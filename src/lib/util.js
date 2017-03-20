/**
 * Created by xiangwenwen on 2017/2/9.
 */

import metaHandler from './metaHandler';

var isDingtalk = /DingTalk/.test(navigator.userAgent);

export function parseCorpId(url, param) {
    var searchIndex = url.indexOf('?');
    var searchParams = url.slice(searchIndex + 1).split('&');
    for (var i = 0; i < searchParams.length; i++) {
        var items = searchParams[i].split('=');
        if (items[0].trim() == param) {
            return items[1].trim();
        }
    }
}

export function parseMetaData(response, corpId) {
    var meta = {};
    meta.admin = response.admin;
    meta.bannerMetas = metaHandler.homeBannerModelsHandler(response.homeBannerModels, corpId);
    meta.itemMetas = metaHandler.homeHeaderModelHandler(response.homeHeaderModel, corpId);
    meta.userlistMetas = metaHandler.homeGroupsHandler(response.homeGroups, corpId);
    meta.allapplistMetas = metaHandler.microAppsHandler(response.microApps, corpId);
    meta.h5Config = response.h5Config;
    meta.userInfo = response.userInfo;
    return meta;
}

export function parseMicroApps(microApps, corpId){
    return metaHandler.microAppsHandler(microApps, corpId);
}

export function openLink(url, corpId){
    if(corpId && typeof corpId === 'string'){
        if (url && url.indexOf('$CORPID$') !== -1) {
            url = url.replace(/\$CORPID\$/, corpId);
        }
    }
    if (isDingtalk) {
        dd.biz.util.openLink({
            url: url,
            onSuccess: function(){
                if(typeof corpId === 'function'){
                    corpId();
                }
            },
            onFail: function(){
                if(typeof corpId === 'function'){
                    corpId();
                }
            }
        });
    } else {
        window.open(url);
    }
}

export default {
    parseCorpId: parseCorpId,
    parseMetaData: parseMetaData,
    parseMicroApps: parseMicroApps
}
