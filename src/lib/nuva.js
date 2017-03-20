/**
 * Created by xiangwenwen on 2017/1/23.
 */

var nuva = {};

function log(info) {
    console.log('nuvajs error : ' + info);
}

function nuvajsAndroidExec(config){
    var body = config.body;
    var win = config.onSuccess;
    var fail = config.onFail;
    var context = config.context;
    var STATUS_NO_RESULT = '0';
    var STATUS_OK = '1';
    var STATUS_ERROR = '2';
    var weexModuleNuvaExec = nuva.weexModuleNuvaExec;
    if (weexModuleNuvaExec && typeof weexModuleNuvaExec === 'function'){
        weexModuleNuvaExec(body,function (response) {
            if (typeof response != "undefined" && response.__status__) {
                var status = response.__status__;
                var message = response.__message__;
                if (STATUS_OK === status){
                    win && win.call(context, message);
                } else if (STATUS_ERROR === status){
                    fail && fail.call(context, message);
                }
            } else {
                fail && fail.call('-1', "");
            }
        });
    } else {
        log('Android');
        fail && fail.call('-1', "");
    }
}

function nuvajsiOSExec(config){
    var body = config.body;
    var win = config.onSuccess;
    var fail = config.onFail;
    var context = config.context;
    var weexModuleNuvaExec = nuva.weexModuleNuvaExec;
    if (weexModuleNuvaExec && typeof weexModuleNuvaExec === 'function'){
        weexModuleNuvaExec(body,function (response) {
            if (typeof response != "undefined") {
                if ('0' === response.errorCode) {
                    win && win.call(context, response);
                } else {
                    fail && fail.call(context, response);
                }
            }
            else {
                fail && fail.call('-1', "");
            }
        });
    } else {
        log('iOS');
        fail && fail.call('-1', "");
    }
}

function parseResponse(response) {
    var responseText = response.result.responseText;
    var r1 = {};
    if (responseText) {
        //判断是不是json类型的字符串
        if (responseText.substring(0, 1) == '{' || responseText.substring(0, 1) == '[') {
            r1 = JSON.parse(responseText);
        } else {
            r1 = responseText;
        }
    }
    return r1;
}

function exec(platform,config) {
    if (platform === 'iOS'){
        nuvajsiOSExec(config);
    } else {
        if (platform === 'Android'){
            nuvajsAndroidExec(config);
        }
    }
}

function register(exec) {
    nuva.weexModuleNuvaExec = exec;
    return nuva;
}

nuva.exec = exec;
nuva.parseResponse = parseResponse;
nuva.register = register;
nuva.weexModuleNuvaExec = null;

module.exports = nuva;