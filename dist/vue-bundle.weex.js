// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by xiangwenwen on 2017/3/24.
 */

function android_exec(exec, config) {
    var body = config.body;
    var win = config.onSuccess;
    var fail = config.onFail;
    var context = config.context;
    var STATUS_NO_RESULT = '0';
    var STATUS_OK = '1';
    var STATUS_ERROR = '2';
    if (exec && typeof exec === 'function') {
        exec(body, function (response) {
            if (typeof response !== "undefined" && response.__status__) {
                var status = response.__status__;
                var message = response.__message__;
                if (STATUS_OK === status) {
                    win && win.call(context, message);
                } else if (STATUS_ERROR === status) {
                    fail && fail.call(context, message);
                }
            } else {
                fail && fail.call('-1', "");
            }
        });
    } else {
        fail && fail.call('-1', "");
    }
}

/**
 * Created by xiangwenwen on 2017/3/24.
 */

function ios_exec(exec, config) {
    var body = config.body;
    var win = config.onSuccess;
    var fail = config.onFail;
    var context = config.context;
    if (exec && typeof exec === 'function') {
        exec(body, function (response) {
            if (typeof response !== "undefined") {
                if ('0' === response.errorCode) {
                    win && win.call(context, response.result);
                } else {
                    fail && fail.call(context, response.result);
                }
            } else {
                fail && fail.call('-1', "");
            }
        });
    } else {
        fail && fail.call('-1', "");
    }
}

/**
 * Created by xiangwenwen on 2017/3/24.
 */

var platform = weex.config.env.platform;

var nativeExec = weex.requireModule('nuvajs-exec').exec;

function exec(config) {
    if (platform === 'iOS') {
        ios_exec(nativeExec, config);
    } else {
        if (platform === 'android') {
            android_exec(nativeExec, config);
        }
    }
}

/**
 * Created by xiangwenwen on 2017/3/24.
 */

var __nuva_modules__ = {};
var requireStack = [];
var inProgressModules = {};

function build(__nuva_module__) {
    var factory = __nuva_module__.factory;
    __nuva_module__.__nuva_exports__ = {};
    delete __nuva_module__.factory;
    factory(__nuva_require__, __nuva_module__.__nuva_exports__, __nuva_module__);
    return __nuva_module__.__nuva_exports__;
}
function __nuva_require__(id) {
    if (!__nuva_modules__[id]) {
        throw '__nuva_module__ ' + id + ' not found';
    } else if (id in inProgressModules) {
        var cycle = requireStack.slice(inProgressModules[id]).join('->') + '->' + id;
        throw 'Cycle in require graph: ' + cycle;
    }
    if (__nuva_modules__[id].factory) {
        try {
            inProgressModules[id] = requireStack.length;
            requireStack.push(id);
            return build(__nuva_modules__[id]);
        } finally {
            delete inProgressModules[id];
            requireStack.pop();
        }
    }
    return __nuva_modules__[id].__nuva_exports__;
}

function __nuva_define__(id, factory) {
    if (__nuva_modules__[id]) {
        throw 'module ' + id + ' already defined';
    }
    __nuva_modules__[id] = {
        id: id,
        factory: factory
    };
}

/**
 * Created by xiangwenwen on 2017/3/24.
 */

var cat = {};
var EventEmitter = {
    on: function on(event, fun) {
        var cbs = cat[event];
        cbs ? cbs.push(fun) : cat[event] = [];
        if (!cbs) {
            cat[event].push(fun);
        }
    },
    off: function off(event, fun) {
        var cbs = cat[event];
        if (!cbs) {
            return false;
        }
        if (!event && !fun) {
            cat = {};
            return true;
        }
        if (event && !fun) {
            cat[event] = null;
            return true;
        }
        var cb = void 0;
        var i = cbs.length;
        while (i--) {
            cb = cbs[i];
            if (cb === fun || cb.fun === fun) {
                cbs.splice(i, 1);
                break;
            }
        }
        return true;
    },
    once: function once(event, fun) {
        function _on() {
            EventEmitter.off(event, _on);
            fun.apply(this, arguments);
        }
        _on.fun = fun;
        EventEmitter.on(event, _on);
    },
    emit: function emit(event) {
        var isString = typeof event === 'string';
        if (!isString) {
            return;
        }
        var cbs = cat[event];
        var args = toArray(arguments, 1);
        if (cbs) {
            var i = 0;
            var j = cbs.length;
            for (; i < j; i++) {
                var cb = cbs[i];
                cb.apply(this, args);
            }
        }
    }
};

function toArray(list, index) {
    var _index = index || 0;
    var i = list.length - _index;
    var _array = new Array(i);
    while (i--) {
        _array[i] = list[i + _index];
    }
    return _array;
}

/**
 * Created by xiangwenwen on 2017/3/24.
 */

function parseModules(map) {
    for (var name in map) {
        var methods = map[name];
        (function (_name, _methods) {
            __nuva_define__(_name, function (__nuva_require__$$1, __nuva_exports__, __nuva_module__) {
                var p = {};
                p._name = _name;
                for (var i in _methods) {
                    var action = _methods[i];
                    p[action] = function (_action) {
                        return function (params) {
                            if (!params) {
                                params = {};
                            }
                            var onSuccess = params.onSuccess;
                            var onFail = params.onFail;
                            delete params.onSuccess;
                            delete params.onFail;
                            delete params.onCancel;
                            var config = {
                                body: {
                                    plugin: _name,
                                    action: _action,
                                    args: params
                                },
                                onSuccess: onSuccess,
                                onFail: onFail
                            };
                            return exec(config);
                        };
                    }(action);
                }
                __nuva_module__.__nuva_exports__ = p;
            });
        })(name, methods);
    }
}

/**
 * Created by xiangwenwen on 2017/3/24.
 */

var globalEvent = weex.requireModule('globalEvent');

function rtFunc(method) {
    return function (cb) {
        var config = {
            body: {
                plugin: 'runtime',
                action: method,
                args: {}
            },
            onSuccess: function onSuccess(response) {
                if (typeof cb === 'function') {
                    cb(response);
                }
            },
            onFail: function onFail() {},
            context: null
        };
        exec(config);
    };
}

function initDingtalkRequire(cb) {
    rtFunc('getModules')(cb);
}

var nuva = {
    getModules: null,
    isReady: false,
    define: __nuva_define__,
    require: function require(id) {
        if (!id) {
            return exec;
        } else {
            return __nuva_require__(id);
        }
    },
    runtime: {
        info: rtFunc('info'),
        _interceptBackButton: rtFunc('interceptBackButton'),
        _interceptNavTitle: rtFunc('interceptNavTitle'),
        _recoverNavTitle: rtFunc('recoverNavTitle'),
        _getModules: rtFunc('getModules')
    },
    init: function init() {
        initDingtalkRequire(function (response) {
            if (response) {
                parseModules(response);
                nuva.isReady = true;
                nuva.getModules = response;
                EventEmitter.emit('__nuva_ready__');
            }
        });
    },
    ready: function ready(cb) {
        if (nuva.isReady) {
            if (typeof cb === 'function') {
                cb();
            }
        } else {
            if (typeof cb === 'function') {
                EventEmitter.once('__nuva_ready__', function () {
                    cb();
                });
            }
        }
    },
    on: function on(type, handler) {
        globalEvent.addEventListener(type, function (e) {
            var event = {
                preventDefault: function preventDefault() {
                    console.warn('当前环境不支持 preventDefault');
                },
                detail: e
            };
            handler.call(this, event);
        });
    },
    off: globalEvent.removeEventListener
};

/**
 * Created by xiangwenwen on 2017/3/27.
 */

var runtimePermission = 'runtime.permission';

function permissionJsApis(cb, jsApisConfig, errorCb) {
    if (!jsApisConfig) {
        cb(null);
        return;
    }
    nuva.ready(function () {
        var permission = nuva.require(runtimePermission);
        var apisConf = jsApisConfig ? jsApisConfig : {};
        var errCb = errorCb ? errorCb : null;
        apisConf.onSuccess = function (response) {
            cb(null, response);
        };
        apisConf.onFail = function (error) {
            if (typeof errCb === 'function') {
                errCb(error);
            } else {
                cb(error, null);
            }
        };
        permission.requestJsApis(apisConf);
    });
}

/**
 * Created by xiangwenwen on 2017/3/27.
 */

function parseJsApis(jsApis) {
    var apis = {};
    for (var name in jsApis) {
        var node = name.split('.');
        var staging = null;
        var i = 0;
        var j = node.length;
        while (true) {
            if (!staging) {
                if (1 === j) {
                    apis[node[i]] = nuva.require(name);
                    break;
                }
                if (apis[node[i]]) {
                    staging = apis[node[i]];
                    i++;
                    continue;
                }
                apis[node[i]] = {};
                staging = apis[node[i]];
                i++;
                continue;
            } else {
                if (j - 1 === i) {
                    staging[node[i]] = nuva.require(name);
                    break;
                }
                if (staging[node[i]]) {
                    i++;
                    continue;
                }
                staging[node[i]] = {};
                staging = staging[node[i]];
            }
            i++;
        }
    }
    return apis;
}

/**
 * Created by xiangwenwen on 2017/3/27.
 */

var dingtalkJsApisConfig = null;
var dingtalkQueue = null;
var dingtalkErrorCb = null;
var dingtalkInit = true;

function performQueue() {
    if (dingtalkQueue && dingtalkQueue.length > 0) {
        dingtalkQueue.forEach(function (task) {
            task();
        });
        dingtalkQueue.length = 0;
    }
}

var dingtalk = {
    isSync: false,
    apis: {},
    config: function (_config) {
        function config(_x) {
            return _config.apply(this, arguments);
        }

        config.toString = function () {
            return _config.toString();
        };

        return config;
    }(function (config) {
        if (!config) {
            return;
        }
        dingtalkJsApisConfig = config;
    }),
    init: function init() {
        // 初始化一次
        dingtalkQueue = [];
        nuva.init();
        nuva.ready(function () {
            dingtalk.isSync = true;
            dingtalk.apis = parseJsApis(nuva.getModules ? nuva.getModules : {});
            performQueue();
        });
    },
    ready: function ready(cb) {
        if (!cb || typeof cb !== 'function') {
            return;
        }
        if (dingtalk.isSync) {
            permissionJsApis(cb, dingtalkJsApisConfig, dingtalkErrorCb);
        } else {
            var bufferFunction = function bufferFunction(cb) {
                return function () {
                    permissionJsApis(cb, dingtalkJsApisConfig, dingtalkErrorCb);
                };
            };

            dingtalkQueue && dingtalkQueue.push(bufferFunction(cb));
        }
    },
    error: function error(cb) {
        if (typeof cb === 'function') {
            dingtalkErrorCb = cb;
        }
    },
    on: nuva.on,
    off: nuva.off
};

/**
 * 不建议如此处理，将来随时会删除，必须遵循-谁使用谁初始化谁释放的原则
 */
if (dingtalkInit) {
    dingtalkInit = false;
    dingtalk.init();
}

module.exports = dingtalk;
//# sourceMappingURL=weex-dingtalk.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(4)
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
__vue_options__.__file = "/Users/xiangwenwen/opensource/index-oa-template/src/Hello.vue"
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

var stream = weex.requireModule('stream');
var modal = weex.requireModule('modal');
var dingtalk = __webpack_require__(0);
var env = __webpack_require__(6);
var globalEvent = weex.requireModule('globalEvent');
var APIHOST = env.APIHOST;
/* harmony default export */ __webpack_exports__["default"] = {
    name: 'hello',
    data: function () {
        return {
            link: 'DingTalk'
        };
    },
    mounted: function () {
        var signRequest = {
            method: 'GET',
            type: 'json',
            url: APIHOST + '/api/jsapi-oauth?href=' + weex.config.originalUrl
        };
        console.log('wower ----', signRequest);
        console.log('wower ----', weex.config.originalUrl);
        stream.fetch(signRequest, function (res) {
            if (res.ok) {
                var data = res.data;
                console.log('icepy --- ', data);
            } else {
                console.log('icepy error', res.status);
            }
        });
        console.log('icepy');
        dingtalk.ready(function () {
            var dd = dingtalk.apis;
            // 设置导航
            dd.biz.navigation.setTitle({
                title: 'icepy'
            });
            dingtalk.on('navTitle', function () {
                modal.toast({
                    message: 'Hello icepy',
                    duration: 0.3
                });
            });
        });

        dingtalk.ready(function () {
            var dd = dingtalk.apis;
            dd.biz.navigation.setLeft({
                show: true, //控制按钮显示， true 显示， false 隐藏， 默认true
                control: true, //是否控制点击事件，true 控制，false 不控制， 默认false
                showIcon: false, //是否显示icon，true 显示， false 不显示，默认true； 注：具体UI以客户端为准
                text: '回家' //控制显示文本，空字符串表示显示默认文本
            });
        });
        globalEvent.addEventListener('navLeftButton', function () {
            modal.toast({
                message: 'Hello icepy',
                duration: 0.3
            });
        });
    },
    methods: {
        getClick: function () {
            dingtalk.ready(function (error, respon) {
                if (error) {
                    modal.toast({
                        message: JSON.stringify(error),
                        duration: 0.3
                    });
                    return;
                }
                for (var key in dingtalk.apis) {
                    console.log('icepy ---', key);
                    console.log('icepy ---', dingtalk.apis[key]);
                }
                var dd = dingtalk.apis;
                dd.biz.util.openLink({
                    url: 'https://github.com/icepy'
                });
                console.log(dingtalk.apis);
            });
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "backgroundColor": "#333377"
  },
  "title": {
    "fontSize": 60,
    "color": "#505050",
    "textAlign": "center"
  },
  "subtitle": {
    "display": "block",
    "fontSize": 30,
    "color": "#AAAAAA",
    "xxxx": "static",
    "textAlign": "center",
    "marginTop": 20
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Hello icepy")]), _c('text', {
    staticClass: ["subtitle"],
    on: {
      "click": _vm.getClick
    }
  }, [_vm._v(_vm._s(_vm.link))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Hello_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Hello_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Hello_vue__);

__WEBPACK_IMPORTED_MODULE_0__Hello_vue___default.a.el = '#app';
new Vue(__WEBPACK_IMPORTED_MODULE_0__Hello_vue___default.a);

// import Home from './pages/home/index.vue';
// Home.el = '#app';
// new Vue(Home);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

const APIHOST = 'http://30.27.108.54:3000';
/* harmony export (immutable) */ __webpack_exports__["APIHOST"] = APIHOST;


/***/ })
/******/ ]);