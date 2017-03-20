// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const APIHOST = 'http://30.27.108.83:3000';
/* harmony export (immutable) */ __webpack_exports__["a"] = APIHOST;


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(50)
)

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(60)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/xiangwenwen/fed-work/index-oa-template/src/pages/home/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
for (var name in module) {
__vue_options__.style[name] = module[name]
}
})

module.exports = __vue_exports__


/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_index_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_home_index_vue__);
// import Hello from './Hello.vue';
// Hello.el = '#app';
// new Vue(Hello);



__WEBPACK_IMPORTED_MODULE_0__pages_home_index_vue___default.a.el = '#app';
new Vue(__WEBPACK_IMPORTED_MODULE_0__pages_home_index_vue___default.a);

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'banner',
    props: ['corpId', 'bannerMetas'],
    data: function () {
        return {};
    },
    mounted: function () {},
    beforeDestroy: function () {},
    destroyed: function () {},
    methods: {
        bannerLink: function (item) {
            const url = item.linkUrl;
        }
    }
};

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mock_meta__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mock_meta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mock_meta__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_env_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_index_banner_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_index_banner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_index_banner_vue__);
//
//
//
//
//
//
//
//
//
//
//









// import applist from './components/index-applist.vue';
// import item from './components/index-item.vue';
// import admin from './components/index-admin.vue';
// import userlist from './components/index-userlist.vue';
// import appmanager from './components/index-appManager.vue';
/* harmony default export */ __webpack_exports__["default"] = {
    name: 'home',
    components: {
        banner: __WEBPACK_IMPORTED_MODULE_4__components_index_banner_vue___default.a
    },
    data: function () {
        return {
            openAppManager: false,
            corpId: '',
            userId: '',
            meta: {
                admin: false,
                bannerMetas: {
                    homeBannerModels: [],
                    isHomeBannerModels: false
                },
                itemMetas: {
                    homeHeaderModel: {},
                    act: '',
                    isAdminOrBoos: false,
                    attendanceUrl: '',
                    myTasksUrl: '',
                    checkinsUrl: '',
                    notReadReportUrl: '',
                    isHomeHeaderModel: false
                },
                userlistMetas: {
                    homeGroups: [],
                    renderLine: 0,
                    isHomeGroups: false
                },
                allapplistMetas: {
                    microApps: [],
                    isMicroApps: false,
                    corpId: ''
                },
                h5Config: {},
                userInfo: {
                    name: ''
                }
            }
        };
    },
    mounted: function () {
        const self = this;
        console.log('icepy', weex.config);
        const originalUrl = weex.config.bundleUrl || weex.config.originalUrl;
        console.log('icepy', originalUrl);
        this.corpId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_util__["a" /* parseCorpId */])(originalUrl, 'corpId');
        //监听userId的变化，如果有变化，立即获取用户信息
        this.$watch('userId', function () {
            this.getUserInfo();
        });
        __WEBPACK_IMPORTED_MODULE_0__mock_meta___default.a.microApps.length = 0;
        // js-api 权限校验
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__request__["a" /* jsApiOAuthRequest */])().then(function (response) {
            self.getMicroApps();
            const meta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_util__["b" /* parseMetaData */])(__WEBPACK_IMPORTED_MODULE_0__mock_meta___default.a);
            self.meta = meta;
            self.openAppManager = true;
            // 走免登的流程
            self.getUserId();
        }).catch(function (error) {
            alert('js api OAuth request bad：' + JSON.stringify(error));
        });
    },
    beforeDestroy: function () {},
    destroyed: function () {},
    methods: {
        getUserId: function () {
            // 获取userid
            const self = this;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__request__["b" /* getUserId */])().then(function (response) {
                self.userId = response.userid;
            }).catch(function (error) {
                alert('获取userid error ：' + JSON.stringify(error));
            });
        },
        getUserInfo: function () {
            // 根据userId获取用户详细信息
            const self = this;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__request__["c" /* getUserInfoRequest */])(this.userId).then(function (response) {
                self.meta.userInfo = response;
            }).catch(function (error) {
                alert('获取用户信息 error：' + JSON.stringify(error));
            });
        },
        getMicroApps: function () {
            // 获取Apps数据
            const self = this;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__request__["d" /* getMicroAppsRequest */])().then(function (response) {
                const data = response.data;
                if (data.errcode === 0) {
                    self.meta.allapplistMetas = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_util__["c" /* parseMicroApps */])(data.microAppList);
                }
            }).catch(function (error) {
                //alert('获取microApps error：' + JSON.stringify(error));
            });
        }
    }
};

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports = {
  "app-container": {
    "width": 100,
    "height": 100,
    "overflow": "hidden",
    "overflowY": "scroll"
  }
}

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

module.exports = {
  "banner-slider": {
    "width": 750,
    "height": 150,
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "borderWidth": 1,
    "borderColor": "#dadada"
  },
  "banner": {
    "width": 750,
    "height": 150
  },
  "indicator": {
    "width": 748,
    "height": 280,
    "position": "absolute",
    "top": 120,
    "itemColor": "gray",
    "itemSelectedColor": "black",
    "itemSize": 10
  },
  "banner-image": {
    "width": 750,
    "height": 150
  }
}

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metaHandler__ = __webpack_require__(73);
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCorpId;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseMetaData;
/* harmony export (immutable) */ __webpack_exports__["c"] = parseMicroApps;
/* unused harmony export openLink */
/* harmony export (immutable) */ __webpack_exports__["d"] = authCode;
/**
 * Created by xiangwenwen on 2017/2/9.
 */



var isDingtalk = '';
// var isDingtalk = /DingTalk/.test(navigator.userAgent);

function parseCorpId(url, param) {
    var searchIndex = url.indexOf('?');
    var searchParams = url.slice(searchIndex + 1).split('&');
    for (var i = 0; i < searchParams.length; i++) {
        var items = searchParams[i].split('=');
        if (items[0].trim() == param) {
            return items[1].trim();
        }
    }
}

function parseMetaData(response, corpId) {
    var meta = {};
    meta.admin = response.admin;
    meta.bannerMetas = __WEBPACK_IMPORTED_MODULE_0__metaHandler__["a" /* default */].homeBannerModelsHandler(response.homeBannerModels, corpId);
    meta.itemMetas = __WEBPACK_IMPORTED_MODULE_0__metaHandler__["a" /* default */].homeHeaderModelHandler(response.homeHeaderModel, corpId);
    meta.userlistMetas = __WEBPACK_IMPORTED_MODULE_0__metaHandler__["a" /* default */].homeGroupsHandler(response.homeGroups, corpId);
    meta.allapplistMetas = __WEBPACK_IMPORTED_MODULE_0__metaHandler__["a" /* default */].microAppsHandler(response.microApps, corpId);
    meta.h5Config = response.h5Config;
    meta.userInfo = response.userInfo;
    return meta;
}

function parseMicroApps(microApps, corpId) {
    return __WEBPACK_IMPORTED_MODULE_0__metaHandler__["a" /* default */].microAppsHandler(microApps, corpId);
}

function openLink(url, corpId) {
    if (corpId && typeof corpId === 'string') {
        if (url && url.indexOf('$CORPID$') !== -1) {
            url = url.replace(/\$CORPID\$/, corpId);
        }
    }
    if (isDingtalk) {
        dd.biz.util.openLink({
            url: url,
            onSuccess: function () {
                if (typeof corpId === 'function') {
                    corpId();
                }
            },
            onFail: function () {
                if (typeof corpId === 'function') {
                    corpId();
                }
            }
        });
    } else {
        window.open(url);
    }
}

function authCode(corpId) {
    return new Promise(function (resolve, reject) {
        dd.ready(function () {
            dd.runtime.permission.requestAuthCode({
                corpId: corpId,
                onSuccess: function (result) {
                    resolve(result);
                },
                onFail: function (err) {
                    reject(err);
                }
            });
        });
    });
}

/* unused harmony default export */ var _unused_webpack_default_export = {
    parseCorpId: parseCorpId,
    parseMetaData: parseMetaData,
    parseMicroApps: parseMicroApps
};

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app-container"]
  }, [_c('banner', {
    attrs: {
      "bannerMetas": _vm.meta.bannerMetas,
      "corpId": _vm.corpId
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["banner-slider"]
  }, _vm._l((_vm.bannerMetas.homeBannerModels), function(item) {
    return (_vm.bannerMetas.isHomeBannerModels) ? _c('div', {
      staticClass: ["banner"]
    }, [_c('img', {
      staticClass: ["banner-image"],
      attrs: {
        "src": item.imgUrl
      },
      on: {
        "click": function($event) {
          _vm.bannerLink(item, $event)
        }
      }
    })]) : _vm._e()
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(54)
)

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(64)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/xiangwenwen/fed-work/index-oa-template/src/pages/home/components/index-banner.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
for (var name in module) {
__vue_options__.style[name] = module[name]
}
})

module.exports = __vue_exports__


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by xiangwenwen on 2016/12/8.
 */

function homeHeaderModelHandler(meta, corpId) {
    var _meta = {};
    var isDeptManager = meta.isDeptManager;
    var isAdmin = meta.isAdmin;
    var boss = meta.boss;
    var dateTime = new Date();
    if (isDeptManager) {
        _meta.act = '出勤人数';
    } else {
        _meta.act = '出勤天数';
    }
    _meta.homeHeaderModel = meta;
    _meta.isAdminOrBoos = isAdmin || boss;
    _meta.isHomeHeaderModel = true;

    _meta.attendanceUrl = 'https://attend.dingtalk.com/attend/index.html?dd_web_timestamp=' + new Date().getTime() + '&showmenu=false&dd_share=false&corpId=ding68942498a5cd785e35c2f4657eb6378f&swfrom=work_homepage#stat';
    _meta.myTasksUrl = 'https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?corpid=ding68942498a5cd785e35c2f4657eb6378f&showmenu=false&dd_share=false&swfrom=work_homepage#upcoming';
    _meta.checkinsUrl = 'https://attendance.dingtalk.com/attendance/mobile/mapAttendance.html?corpid=ding68942498a5cd785e35c2f4657eb6378f&showmenu=false&dd_progress=false&dd_share=false&swfrom=work_homepage&to_page=footprint';
    _meta.notReadReportUrl = 'https://landray.dingtalkapps.com/alid/app/report/received_new.html?corpid=ding68942498a5cd785e35c2f4657eb6378f&ismy=2&dd_share=false&readType=1&swfrom=work_homepage';
    return _meta;
}

function homeBannerModelsHandler(meta, corpId) {
    var _meta = {};
    _meta.homeBannerModels = meta;
    _meta.isHomeBannerModels = !!meta.length;
    return _meta;
}

function homeGroupsHandler(meta, corpId) {
    var _meta = {};
    _meta.renderLine = meta.length;
    _meta.isHomeGroups = _meta.renderLine > 0;
    _meta.homeGroups = meta.map(function (groups) {
        groups.homeGroupDetail = groups.homeGroupDetail.map(function (item) {
            if (item.appType === 3) {
                var formatNumber = {};
                if (typeof item.value === "undefined" || typeof item.value === "NaN") {
                    formatNumber = formatNum(0);
                } else {
                    formatNumber = formatNum(parseFloat(item.value, 10));
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

function formatNum(val) {
    // 金额格式化
    var rt = null;

    if (val < 999) {
        rt = { val: val.toString().substr(0, 3), unit: "" };
        substrNum(rt);
    } else if (val < 9999999) {
        val = Math.round(val / 1000) / 10;
        rt = { val: val, unit: "万" };
        substrNum(rt);
    } else if (val < 99999999) {
        val = Math.round(val / 1000000) / 10;
        rt = { val: val, unit: "千万" };
        substrNum(rt);
    } else if (val < 99999999999) {
        val = Math.round(val / 10000000) / 10;
        rt = { val: val, unit: "亿" };
        substrNum(rt);
    } else {
        val = Math.round(val / 10000000) / 10;
        rt = { val: val, unit: "亿" };
    }
    return rt;
}

function substrNum(rt) {
    rt.val = rt.val.toString().substr(0, 3);
    if (rt.val.charAt(rt.val.length - 1) == ".") {
        //判断末尾是否 "."
        rt.val = rt.val.substr(0, 2);
    }
}

function microAppsHandler(meta, corpId) {
    var _meta = {};
    _meta.isMicroApps = !!meta.length;
    _meta.microApps = meta;
    return _meta;
}

/* harmony default export */ __webpack_exports__["a"] = {
    homeHeaderModelHandler: homeHeaderModelHandler,
    homeBannerModelsHandler: homeBannerModelsHandler,
    homeGroupsHandler: homeGroupsHandler,
    microAppsHandler: microAppsHandler
};

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

/**
 * Created by xiangwenwen on 2016/12/2.
 */

var meta = {
  "homeGroups": [{
    "id": 51,
    "groupName": "经营数据",
    "homeGroupDetail": [{
      "id": 156,
      "url": "https://landray.dingtalkapps.com/alid/app/report/createReport_new.html?showmenu=false&dd_share=false&swfrom=work_homepage&id=158b457eea778023c59114c439eb80e9&corpid=ding68942498a5cd785e35c2f4657eb6378f",
      "cloudDataSource": 1,
      "redirect": true,
      "nativeid": 1603,
      "appType": 3,
      "title": "支付宝收入",
      "tableId": 4751,
      "tableName": "营业日报"
    }, {
      "id": 537,
      "url": "https://landray.dingtalkapps.com/alid/app/report/createReport_new.html?showmenu=false&dd_share=false&swfrom=work_homepage&id=158b457eea778023c59114c439eb80e9&corpid=ding68942498a5cd785e35c2f4657eb6378f",
      "cloudDataSource": 1,
      "redirect": true,
      "nativeid": 1603,
      "appType": 3,
      "title": "日总营业额",
      "tableId": 4751,
      "tableName": "营业日报"
    }],
    "departmentIds": [],
    "staffIds": []
  }, {
    "id": 50,
    "groupName": "门店运营",
    "homeGroupDetail": [{
      "id": 151,
      "url": "https://landray.dingtalkapps.com/alid/app/report/createReport_new.html?showmenu=false&dd_share=false&swfrom=work_homepage&id=158b457eea778023c59114c439eb80e9&corpid=ding68942498a5cd785e35c2f4657eb6378f",
      "imgPath": "https://landray.dingtalkapps.com/alid/app/report/images/ico-png/25.png",
      "nativeid": 2,
      "appType": 1,
      "title": "营业日报"
    }, {
      "id": 152,
      "url": "https://landray.dingtalkapps.com/alid/app/report/createReport_new.html?showmenu=false&dd_share=false&swfrom=work_homepage&id=158b457ee4f983d9d450fa0400780d8a&corpid=ding68942498a5cd785e35c2f4657eb6378f",
      "imgPath": "https://landray.dingtalkapps.com/alid/app/report/images/ico-png/24.png",
      "nativeid": 2,
      "appType": 1,
      "title": "门店水电煤月报"
    }, {
      "id": 153,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-FAB-DISCOUNT&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-3SB5O4WI-F#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB1q5U5OXXXXXXPXVXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "打折免单申请"
    }],
    "departmentIds": [],
    "staffIds": []
  }, {
    "id": 49,
    "groupName": "巡店督导",
    "homeGroupDetail": [{
      "id": 149,
      "url": "https://attendance.dingtalk.com/attendance/mobile/mapAttendance.html?showmenu=false&dd_progress=false&dd_share=false&corpid=ding68942498a5cd785e35c2f4657eb6378f",
      "isNative": false,
      "imgPath": "http://static.dingtalk.com/media/lALOcrvqOszIzMg_200_200.png",
      "nativeid": -8,
      "appType": 0,
      "title": "签到"
    }, {
      "id": 150,
      "url": "https://landray.dingtalkapps.com/alid/app/report/createReport_new.html?showmenu=false&dd_share=false&swfrom=work_homepage&id=158b457ee8275fd852d13d34398a1872&corpid=ding68942498a5cd785e35c2f4657eb6378f",
      "imgPath": "https://landray.dingtalkapps.com/alid/app/report/images/ico-png/0.png",
      "nativeid": 2,
      "appType": 1,
      "title": "巡检日报"
    }],
    "departmentIds": [],
    "staffIds": []
  }, {
    "id": 48,
    "groupName": "企划营销",
    "homeGroupDetail": [{
      "id": 147,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-FAB-MARKETING&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-LTB5O4WI-H#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB12R3NOXXXXXcwaXXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "营销活动申请"
    }, {
      "id": 148,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-FAB-PROMOTIONAL-MATERIAL&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-ZTB5O4WI-I#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB1Pb4eOpXXXXcGXpXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "宣传物料申请"
    }],
    "departmentIds": [],
    "staffIds": []
  }, {
    "id": 47,
    "groupName": "人力资源",
    "homeGroupDetail": [{
      "id": 141,
      "url": "https://attend.dingtalk.com/attend/index.html?corpId=ding68942498a5cd785e35c2f4657eb6378f&showmenu=false&dd_share=false&dd_progress=false",
      "isNative": false,
      "imgPath": "http://static.dingtalk.com/media/lALOcsYpu8zIzMg_200_200.png",
      "nativeid": 158,
      "appType": 0,
      "title": "考勤打卡"
    }, {
      "id": 142,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-leave-NJJZLP58HL3HBTO2NJ5X1-AV05OQ8I-2&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-3PB5O4WI-8#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB1hcBoOpXXXXbPXXXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "请假"
    }, {
      "id": 143,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-FAB-HIRE&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-4VB5O4WI-K#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB1GCw.OXXXXXbOXFXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "入职申请单"
    }, {
      "id": 144,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-FAB-QUIT&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-IVB5O4WI-L#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB1ESwQOXXXXXbaaXXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "离职申请单"
    }, {
      "id": 145,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-FAB-SALARY&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-XVB5O4WI-M#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB1.vAMOXXXXXXmaFXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "薪资调整申请"
    }, {
      "id": 146,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-FAB-REASSIGNMENT&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-EUB5O4WI-J#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB1UEoTOXXXXXbCaXXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "调岗申请单"
    }],
    "departmentIds": [],
    "staffIds": []
  }],
  "h5Config": {
    "guide": [{
      "img": {
        "url": "https://gw.alicdn.com/tps/TB1jJBsOpXXXXbxXpXXXXXXXXXX-1125-636.png"
      },
      "itemId": "营业日报"
    }, {
      "img": {
        "url": "https://gw.alicdn.com/tps/TB1e2ZYOXXXXXXhaFXXXXXXXXXX-1125-636.png"
      },
      "itemId": "营销活动申请"
    }, {
      "img": {
        "url": "https://gw.alicdn.com/tps/TB1oR7VOXXXXXbOapXXXXXXXXXX-1125-636.png"
      },
      "itemId": "巡检日报"
    }]
  },
  "microApps": [{
    "url": "https://attendance.dingtalk.com/attendance/mobile/mapAttendance.html?showmenu=false&dd_progress=false&dd_share=false&corpid=ding68942498a5cd785e35c2f4657eb6378f",
    "appType": 0,
    "agentId": "53005351",
    "name": "签到",
    "icon": "http://static.dingtalk.com/media/lALOcrvqOszIzMg_200_200.png",
    "appId": -8
  }, {
    "url": "https://attend.dingtalk.com/attend/index.html?corpId=ding68942498a5cd785e35c2f4657eb6378f&showmenu=false&dd_share=false&dd_progress=false",
    "appType": 0,
    "agentId": "53005353",
    "name": "考勤打卡",
    "icon": "http://static.dingtalk.com/media/lALOcsYpu8zIzMg_200_200.png",
    "appId": 158
  }, {
    "url": "https://landray.dingtalkapps.com/alid/app/report/home.html?showmenu=false&dd_share=false&corpid=ding68942498a5cd785e35c2f4657eb6378f",
    "appType": 0,
    "agentId": "53005356",
    "name": "日志",
    "icon": "http://static.dingtalk.com/media/lALOcsZGkszIzMg_200_200.png",
    "appId": 2
  }, {
    "url": "https://app.dingtalk.com/blackboard/noticeList.html?showmenu=false&dd_progress=false&dd_share=false&corpid=ding68942498a5cd785e35c2f4657eb6378f",
    "appType": 0,
    "agentId": "53005358",
    "name": "公告",
    "icon": "http://static.dingtalk.com/media/lALOcsZHFszIzMg_200_200.png",
    "appId": -2
  }, {
    "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?showmenu=false&dd_progress=false&dd_share=false&corpid=ding68942498a5cd785e35c2f4657eb6378f",
    "appType": 0,
    "agentId": "53005359",
    "name": "审批",
    "icon": "http://static.dingtalk.com/media/lALOcsZGQszIzMg_200_200.png",
    "appId": -4
  }, {
    "url": "http://mail.dingtalk.com/auth/login",
    "appType": 0,
    "agentId": "53005361",
    "name": "钉邮",
    "icon": "http://static.dingtalk.com/media/lALOcsah9MzIzMg_200_200.png",
    "appId": -5
  }, {
    "url": "https://space.dingtalk.com/auth/login",
    "appType": 0,
    "agentId": "53005362",
    "name": "钉盘",
    "icon": "http://static.dingtalk.com/media/lALOcsahiMzIzMg_200_200.png",
    "appId": -3
  }, {
    "url": "https://clouddata.dingtalkapps.com/alid/mobile/index.html?corpId=ding68942498a5cd785e35c2f4657eb6378f&dd_progress=false",
    "appType": 0,
    "agentId": "53005363",
    "name": "智能报表",
    "icon": "http://static.dingtalk.com/media/lALOcsxZiszIzMg_200_200.png",
    "appId": 1603
  }, {
    "url": "http://businessConference.dingtalk.com/auth/login",
    "appType": 0,
    "agentId": "53005365",
    "name": "电话会议",
    "icon": "http://static.dingtalk.com/media/lALOcsajBszIzMg_200_200.png",
    "appId": -9
  }, {
    "url": "",
    "appType": 0,
    "agentId": "53005366",
    "name": "视频会议",
    "icon": "http://static.dingtalk.com/media/lALOcsaifMzIzMg_200_200.png",
    "appId": 1288
  }],
  "admin": true,
  "homeHeaderModel": {
    "deptManager": true,
    "notReadReport": 0,
    "subAdmin": false,
    "turnoverTotal": 0,
    "checkins": 0,
    "attendance": 0,
    "myTasks": 0,
    "boss": false,
    "admin": true,
    "isAdmin": true,
    "isDeptManager": true,
    "isSubAdmin": false,
    "isBoss": false
  },
  "homeBannerModels": [{
    "linkUrl": "https://alimarket.m.taobao.com/markets/dingtalk/cydd?lwfrom=20161118115327653",
    "imgUrl": "https://gw.alicdn.com/tps/TB1o8BqOpXXXXanXVXXXXXXXXXX-750-300.png"
  }],
  "userInfo": {}
};

module.exports = meta;

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_env_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_util_js__ = __webpack_require__(6);
/* harmony export (immutable) */ __webpack_exports__["d"] = getMicroAppsRequest;
/* harmony export (immutable) */ __webpack_exports__["a"] = jsApiOAuthRequest;
/* harmony export (immutable) */ __webpack_exports__["b"] = getUserId;
/* harmony export (immutable) */ __webpack_exports__["c"] = getUserInfoRequest;
// import axios from 'axios';



const stream = weex.requireModule('stream');
const fetch = stream.fetch;
/**
 * [getMicroAppsRequest 获取全部应用]
 * @return {[type]} [Promise]
 */
function getMicroAppsRequest() {
    const microApps = {
        url: __WEBPACK_IMPORTED_MODULE_0__lib_env_js__["a" /* APIHOST */] + '/api/get-microapp-list',
        type: 'json'
    };
    return new Promise(function (resolve, reject) {
        fetch(microApps, function (response) {
            const ok = response.ok;
            const data = response.data;
            console.log(response);
            if (ok) {
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
function jsApiOAuthRequest() {
    const signRequest = {
        url: __WEBPACK_IMPORTED_MODULE_0__lib_env_js__["a" /* APIHOST */] + '/api/jsapi-oauth?href=' + encodeURIComponent(location.href),
        type: 'json'
    };
    return new Promise(function (resolve, reject) {
        fetch(signRequest, function (response) {
            const ok = response.ok;
            const data = response.data;
            if (ok) {
                const config = {
                    agentId: '76853717',
                    corpId: data.corpId,
                    timeStamp: data.timeStamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: ['biz.util.openLink', 'runtime.permission.requestAuthCode']
                };
                resolve({
                    errcode: 0
                });
            } else {
                reject({
                    errcode: 101,
                    errmsg: 'js api auth request bad'
                });
            }
        });
    });
}

/**
 * [getUserId 获取用户id]
 * @param  {[type]} corpId [企业corpId]
 * @return {[type]}        [Promise]
 */
function getUserId(corpId) {
    return new Promise(function (resolve, reject) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_util_js__["d" /* authCode */])(corpId).then(function (result) {
            const code = result.code;
            const getUserInfo = {
                url: __WEBPACK_IMPORTED_MODULE_0__lib_env_js__["a" /* APIHOST */] + '/api/get-user-info',
                params: {
                    code: code
                }
            };
            axios(getUserInfo).then(function (response) {
                const data = response.data;
                if (data.errcode === 0) {
                    resolve(data);
                } else {
                    reject(data);
                }
            }).catch(function (error) {});
        }).catch(function (error) {
            reject(error);
        });
    });
}

/**
 * [getUserInfoRequest 获取用户详情信息]
 * @param  {[type]} userid [用户id]
 * @return {[type]}        [Promise]
 */
function getUserInfoRequest(userid) {
    return new Promise(function (resolve, reject) {
        const get = {
            url: __WEBPACK_IMPORTED_MODULE_0__lib_env_js__["a" /* APIHOST */] + '/api/get',
            params: {
                userid: userid
            }
        };
        axios(get).then(function (response) {
            const data = response.data;
            if (data.errcode === 0) {
                resolve(data);
            } else {
                reject(data);
            }
        }).catch(function (error) {
            reject(error);
        });
    });
}

/***/ })

/******/ });