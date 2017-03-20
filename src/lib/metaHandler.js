/**
 * Created by xiangwenwen on 2016/12/8.
 */

function homeHeaderModelHandler(meta, corpId) {
    var _meta = {};
    var isDeptManager = meta.isDeptManager;
    var isAdmin = meta.isAdmin;
    var boss = meta.boss;
    var dateTime = new Date;
    if (isDeptManager){
        _meta.act = '出勤人数';
    } else {
        _meta.act = '出勤天数';
    }
    _meta.homeHeaderModel = meta;
    _meta.isAdminOrBoos = (isAdmin || boss);
    _meta.isHomeHeaderModel = true;

    _meta.attendanceUrl = 'https://attend.dingtalk.com/attend/index.html?dd_web_timestamp='+(new Date().getTime())+'&showmenu=false&dd_share=false&corpId=ding68942498a5cd785e35c2f4657eb6378f&swfrom=work_homepage#stat';
    _meta.myTasksUrl = 'https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?corpid=ding68942498a5cd785e35c2f4657eb6378f&showmenu=false&dd_share=false&swfrom=work_homepage#upcoming';
    _meta.checkinsUrl = 'https://attendance.dingtalk.com/attendance/mobile/mapAttendance.html?corpid=ding68942498a5cd785e35c2f4657eb6378f&showmenu=false&dd_progress=false&dd_share=false&swfrom=work_homepage&to_page=footprint';
    _meta.notReadReportUrl = 'https://landray.dingtalkapps.com/alid/app/report/received_new.html?corpid=ding68942498a5cd785e35c2f4657eb6378f&ismy=2&dd_share=false&readType=1&swfrom=work_homepage';
    return _meta;
}


function  homeBannerModelsHandler(meta,corpId) {
    var _meta = {};
    _meta.homeBannerModels = meta;
    _meta.isHomeBannerModels = !!(meta.length);
    return _meta;
}

function homeGroupsHandler(meta,corpId) {
    var _meta = {};
    _meta.renderLine = meta.length;
    _meta.isHomeGroups = _meta.renderLine > 0;
    _meta.homeGroups = meta.map(function (groups) {
        groups.homeGroupDetail = groups.homeGroupDetail.map(function (item) {
           if(item.appType === 3){
               var formatNumber = {};
               if (typeof item.value === "undefined" || typeof item.value === "NaN"){
                   formatNumber = formatNum(0);
               } else {
                   formatNumber = formatNum(parseFloat(item.value,10));
               }
               item.formatNumber = formatNumber;
               return item;
           }
           return item;
        });
        return groups;
    });
    return _meta;
}

function formatNum (val) {
    // 金额格式化
    var rt = null;

    if (val < 999) {
        rt = { val: val.toString().substr(0, 3), unit: "" };
        substrNum(rt)
    } else if (val < 9999999) {
        val = Math.round(val / 1000) / 10;
        rt = { val: val, unit: "万" };
        substrNum(rt)
    } else if (val < 99999999) {
        val = Math.round(val / 1000000) / 10;
        rt = { val: val, unit: "千万" };
        substrNum(rt)
    } else if (val < 99999999999) {
        val = Math.round(val / 10000000) / 10;
        rt = { val: val, unit: "亿" };
        substrNum(rt)
    } else {
        val = Math.round(val / 10000000) / 10;
        rt = { val: val, unit: "亿" };
    }
    return rt;
}

function substrNum(rt) {
    rt.val = (rt.val.toString()).substr(0, 3);
    if (rt.val.charAt(rt.val.length - 1) == ".") {//判断末尾是否 "."
        rt.val = rt.val.substr(0, 2);
    }
}

function microAppsHandler(meta,corpId) {
    var _meta = {};
    _meta.isMicroApps = !!(meta.length);
    _meta.microApps = meta;
    return _meta;
}


export default {
    homeHeaderModelHandler: homeHeaderModelHandler,
    homeBannerModelsHandler: homeBannerModelsHandler,
    homeGroupsHandler: homeGroupsHandler,
    microAppsHandler: microAppsHandler
};
