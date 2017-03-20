(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dingWebInterfaceSDK"] = factory();
	else
		root["dingWebInterfaceSDK"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(11);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (wpo, undef) {
    var startTime, scriptStart;

    if (wpo.startTime) {
        startTime = wpo.startTime;
    } else {
        try {
            startTime = window.performance.timing.responseStart;
            scriptStart = new Date();
        } catch (e) {
            scriptStart = startTime = new Date() - 0;
        }
    }

    var send = function send(params, sampling) {
        sampling = sampling || wpo.config.sample;

        //
        // 双十一当天统计数据抽样率降低
        //

        // if ((curDate.getUTCDate() == 10 && curDate.getUTCMonth() == 10 && curDate.getUTCHours() >= 16) ||
        //     (curDate.getUTCDate() == 11 && curDate.getUTCMonth() == 10)) {
        //     sampling *= 10;
        // }

        if (wpo.sampling(sampling) == (wpo.config.modVal || 1)) {
            params.sampling = sampling;
            wpo.send(params);
        }
    };

    /**
     * [custom description]
     * @param  {[int/string]} category [0/'time'，1/'count']
     * @param  {[string]} key      [自定义值]
     * @param  {[any]} value    [自定义值，如果type为count，自动忽略该值]
     * @return {[void]}
     */
    wpo.custom = function (category, key, value) {
        var customParam = {
            type: 'custom'
        },
            arr = ['time', 'count'];

        category = arr[category] || category;

        if (category == 'time' || category == 'count') {
            customParam['category'] = category;
        }

        if (customParam.type) {
            customParam['key'] = key;
            customParam['value'] = category == 'time' ? value : undef;
            send(customParam);
        }
    };

    /**
     * [error description]
     * @param  {[str]} category [可选参，错误类型，默认为sys]
     * @param  {[str]} msg      [自定义错误信息]
     * @return {[void]}
     */
    wpo.error = function (category, msg, file, line, col, stack) {
        var errorParam = {
            type: 'jserror'
        };

        if (arguments.length === 1) {
            msg = category;
            category = undefined;
        }

        // 有错误信息才上报
        if (msg) {
            errorParam['category'] = category || 'sys';
            errorParam['msg'] = msg;

            // separate msg file name
            if (file) {
                errorParam['file'] = file;
            }

            if (line) {
                errorParam['line'] = line;
            }

            if (col) {
                errorParam['col'] = col;
            }

            if (stack) {
                errorParam['stack'] = stack;
            }

            send(errorParam, 1);
        }
    };

    /**
     * [performance description]
     * @param  {[obj]} params [性能相关信息]
     * @return {[void]}
     */
    wpo.performance = function (params) {
        var perParam = {
            type: 'per'
        };

        send(wpo.extend(perParam, params));
    };

    /**
     * [retCode description]
     * @param  {[str]} api       [所调用的api]
     * @param  {[boolean]} issucess [是否成功，不成功会100%发送，成功按照抽样发送]
     * @param  {[type]} delay    [调用时间]
     * @param  {[type]} code     [错误码]
     * @param  {[type]} msg      [错误详情]
     * @return {[void]}
     */
    wpo.retCode = function (api, issucess, delay, code, msg) {
        var retParam = {
            type: 'retcode',
            api: api,
            issucess: issucess,
            delay: typeof delay == 'number' ? parseInt(delay, 10) : new Date() - startTime,
            msg: code || (issucess ? 'success' : 'fail'),
            detail: msg || '',
            sampling: this.config.retCode[api]
        };

        if (typeof retParam.delay !== 'undefined') {
            send(retParam, issucess ? retParam.sampling : 1);
        }
    };

    var sendSpeed = function sendSpeed() {
        var perParam = {
            type: 'speed'
        },
            val;

        for (var i = 0, len = wpo.speed.points.length; i < len; i++) {
            val = wpo.speed.points[i];
            if (val) {
                perParam['s' + i] = val;
                wpo.speed.points[i] = null;
            }
        }

        send(perParam);
    };

    /**
     * [speed description]
     * @param  {[int/str]} pos          [0/'s0',1/'s1',2/'s2'....10/'s10']
     * @param  {[int]} delay        [耗时，如果没有定义，这按照当前时间减去页面起始时间]
     * @param  {[boolean]} _immediately [内部使用，是否强制发送，不强制发送会尽量收集3s内的所有点的数据一次性发送]
     * @return {[void]}
     */
    wpo.speed = function (pos, delay, _immediately) {
        var sArr;

        if (typeof pos == 'string') {
            pos = parseInt(pos.slice(1), 10);
        }

        if (typeof pos == 'number') {
            sArr = wpo.speed.points || new Array(11);
            sArr[pos] = typeof delay == 'number' ? delay : new Date() - startTime;

            if (sArr[pos] < 0) {
                sArr[pos] = new Date() - scriptStart;
            }

            wpo.speed.points = sArr;
        }

        clearTimeout(wpo.speed.timer);

        if (!_immediately) {
            wpo.speed.timer = setTimeout(sendSpeed, 3000);
        } else {
            sendSpeed();
        }
    };

    /**
     * [log 日志统计]
     * @param  {[string]} msg      [发送的内容]
     * @param  {[int]} sampling [可以自定义发送的抽样]
     * @return {[void]}
     */
    wpo.log = function (msg, sampling) {
        var param = {
            type: 'log',
            msg: msg
        };

        send(param, sampling);
    };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (wpo, root, conf) {
    var cookies = {};
    var count = 0;
    var uid, timer;

    var config = {
        // 默认上报上报
        imgUrl: '//retcode.taobao.com/r.png?',
        // 默认抽样率
        sample: 10,
        modVal: 1,
        // 是否开启动态配置功能
        dynamic: false,
        retCode: {}
    };

    var sendRequest = conf.sendRequest;

    var _send = function _send() {
        var params, obj;

        while (params = core.dequeue()) {
            obj = core.extend({
                uid: uid,
                userNick: wpo.getNick(),
                times: params.times ? params.times : 1,
                _t: ~new Date() + (count++).toString()
            }, params);

            // 最后一次尝试补齐spm值
            if (!obj.spm) {
                obj.spm = wpo.getSpmId();
            }

            if (!obj.spm) {
                break;
            }

            if (wpo.debug && (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.console) {
                console.log(obj);
            }

            sendRequest.call(wpo, config.imgUrl + core.query.stringify(obj));
        }

        timer = null;
    };

    var _wait = function _wait(_clear) {
        if (_clear && timer) {
            clearTimeout(timer);
            _send();
        }
        if (!timer) {
            timer = setTimeout(_send, 1000);
        }
    };

    var core = {
        _key: 'wpokey',

        // 版本号
        ver: '<%= pkg.version %>',

        // dynamically updates itself without queue
        requestQueue: wpo.requestQueue || [],

        /**
         * 获取cookie
         *
         * @param name
         * @returns {*}
         */
        getCookie: function getCookie(name) {
            var reg,
                matches,
                cookie = '';

            if (!cookies[name]) {
                reg = new RegExp(name + '=([^;]+)');

                //
                // to make it compatible with nodejs
                //
                try {
                    cookie = conf.getCookie(this);
                } catch (e) {}

                matches = reg.exec(cookie);
                if (matches) {
                    cookies[name] = matches[1];
                }
            }

            return cookies[name];
        },

        /**
         * 设置cookie
         *
         * @param key
         * @param value
         * @param expires
         * @param domain
         * @param path
         */
        setCookie: function setCookie(key, value, expires, domain, path) {
            var str = key + '=' + value;
            if (domain) {
                str += '; domain=' + domain;
            }
            if (path) {
                str += '; path=' + path;
            }
            if (expires) {
                str += '; expires=' + expires;
            }
            document.cookie = str;
        },

        /**
         * 扩展对象
         *
         * @param target
         * @returns {*}
         */
        extend: function extend(target) {
            var args = Array.prototype.slice.call(arguments, 1);

            for (var i = 0, len = args.length, arg; i < len; i++) {
                arg = args[i];
                for (var name in arg) {
                    if (arg.hasOwnProperty(name)) {
                        target[name] = arg[name];
                    }
                }
            }

            return target;
        },

        /**
         * 获取guid
         *
         * @returns {string}
         */
        guid: function guid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : r & 0x3 | 0x8;
                return v.toString(16);
            });
        },

        /**
         * 发送请求
         *
         * @param params
         */
        send: function send(params) {
            // 如果没有禁用wpo则上报, e.g., daily环境可禁用wpo上报,防止数据污染
            if (params && !wpo.config.disabled) {
                var spm = core.getSpmId();

                // 如果尚未设置过spm,并且成功获取到spm,则锁定spm值
                // 加入队列的时候即固定了此次上报的spm,方便SPA应用通过setConfig动态修改spm
                if (!params.spm && spm) {
                    params.spm = spm;
                }

                this.queue(params);
            }
        },

        query: {
            /**
             * 对象转url字符串
             *
             * @param params
             * @returns {string}
             */
            stringify: function stringify(params) {
                var arr = [];
                var str = '';

                // encodeURIComponent异常保护
                try {
                    for (var name in params) {
                        if (params.hasOwnProperty(name) && params[name] !== undefined) {
                            arr.push(name + '=' + encodeURIComponent(params[name]));
                        }
                    }

                    if (arr.length > 0) {
                        str = arr.join('&');
                    }
                } catch (e) {}

                return str;
            },

            /**
             * url字符串转对象
             *
             * @param str
             * @returns {{}}
             */
            parse: function parse(str) {
                var pairs = str.split('&'),
                    obj = {},
                    pair;

                // decodeURIComponent异常保护
                try {
                    for (var i = 0, len = pairs.length; i < len; i++) {
                        pair = pairs[i].split('=');
                        obj[pair[0]] = decodeURIComponent(pair[1]);
                    }
                } catch (e) {}

                return obj;
            }
        },

        /**
         * 获取spmId
         *
         * @returns {*}
         */
        getSpmId: function getSpmId() {
            if (config.spmId) {
                return config.spmId;
            } else if (typeof conf.getSpmId === 'function') {
                return conf.getSpmId.call(this);
            }

            return 0;
        },

        /**
         * 事件绑定
         *
         * @param el
         * @param type
         * @param func
         * @param isRemoving
         */
        on: function on(el, type, func, isRemoving) {
            if (el.addEventListener) {
                el.addEventListener(type, isRemoving ? function () {
                    el.removeEventListener(type, func, false);
                    func();
                } : func, false);
            } else if (el.attachEvent) {
                el.attachEvent('on' + type, function () {
                    if (isRemoving) {
                        el.detachEvent('on' + type, arguments.callee);
                    }
                    func();
                });
            }
        },

        /**
         * 获取用户的taobao nick
         *
         * @returns {*}
         */
        getNick: function getNick() {
            var nick = '';

            try {
                // 优先取业务方主动配置的nick
                if (wpo.config.nick) {
                    nick = wpo.config.nick;
                }
                // 否则从cookie中读取
                else {
                        // 分别取淘宝PC,淘宝无线,商家子账号cookie
                        nick = this.getCookie('_nk_') || this.getCookie('lgc') || this.getCookie('_w_tb_nick') || this.getCookie('sn') || '';
                        nick = decodeURIComponent(nick);
                    }
            } catch (e) {}

            return nick;
        },

        /**
         * 设置config
         * @param inConfig
         * @returns {*}
         */
        setConfig: function setConfig(conf) {
            if (conf && (typeof conf === 'undefined' ? 'undefined' : _typeof(conf)) !== 'object') {
                throw 'args of wpo.setConfig is not object';
                return;
            }

            // weex环境
            if (conf && conf.user && typeof conf.user.getUserInfo === 'function' && this.env === 'weex') {
                // 设置nick
                conf.user.getUserInfo(function (resStr) {
                    try {
                        var res = JSON.parse(resStr);

                        core.extend(config, {
                            nick: res.info && res.info.nick
                        });
                    } catch (e) {}
                });
            }

            return core.extend(config, conf);
        },

        /**
         * 快捷配置spm,返回wpo自身方便链式调用
         *
         * @param spm
         * @returns {core}
         */
        spm: function spm(_spm) {
            if (_spm) {
                this.setConfig({
                    spmId: _spm
                });
            }

            return this;
        },

        /**
         * 动态配置
         *
         * @param obj
         */
        dynamicConfig: function dynamicConfig(obj) {
            var config = this.query.stringify(obj);

            try {
                localStorage.setItem(this._key, config);
            } catch (e) {
                this.setCookie(this._key, config, new Date(obj.expTime));
            }
            this.setConfig({
                sample: parseInt(obj.sample, 10)
            });
            this.ready();
        },

        /**
         * ready
         *
         * @param _immediately
         */
        ready: function ready(_immediately) {
            this._ready = true;
            // var immediately = wpo.config ? (wpo.config.immediately ? true : false) : false;
            var immediately = true; //默认都是要马上发起请求
            this._immediately = _immediately || immediately;
            _wait();
        },

        /**
         * 加入请求队列
         *
         * @param obj
         */
        queue: function queue(obj) {
            var queue = this.requestQueue,
                compare;

            if (obj.type === 'jserror') {
                if (queue.length) {
                    compare = queue[queue.length - 1];

                    if (obj.msg === compare.msg) {
                        compare.times++;
                        return;
                    }
                }
                if (!obj.times) {
                    obj.times = 1;
                }
            }

            queue.push(obj);

            if (this._ready) {
                //
                // for nodejs
                //
                if (this._immediately && obj.type !== 'jserror') {
                    _send();
                } else {
                    _wait();
                }
            }
        },

        /**
         * 从请求队列取头部取一个(第一个)
         *
         * @returns {T}
         */
        dequeue: function dequeue() {
            return this.requestQueue.shift();
        },

        /**
         * clear
         */
        clear: function clear() {
            _wait(true);
        }
    };

    core.uid = uid = core.guid();
    core.config = core.setConfig(wpo.config);
    core.extend(wpo, core);

    root.__WPO = wpo;

    return wpo;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
// 修改抽样算法，以前以uid作为抽样的key，在大于100抽样率下会呈现正态分布
// 改用random可以规避这个问题
//

// (function (n) {
//     var guid = function () {
//         return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//             var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r&0x3|0x8);
//             return v.toString(16);
//         });
//     };

//     var parseGuid = function (uid) {
//         var num = 0;
//         for (var i = 0, len = uid.length; i < len; i++) {
//             num += uid.charCodeAt(i);
//         }
//         return num;
//     };

//     var arr = [];

//     for (var i = 0, n = n || 1000000; i++ < n;) {
//         // arr.push(parseGuid(guid()) % 100);
//         arr.push(Math.floor(Math.random() * 100));
//     }

//     var map = {};
//     arr.forEach(function (num) {
//         if (!map[num]) {
//             map[num] = 0;
//         }
//         map[num]++;
//     });
//     console.log(map);

// })();

module.exports = function (wpo) {
    var map = {};
    wpo.sampling = function (mod) {
        var uid = wpo.uid,
            num = 0;

        if (mod == 1) {
            return 1; // 100%
        } else if (typeof map[mod] == 'number') {
            return map[mod];
        }

        //
        // 抽样算法改为Math.random
        //

        map[mod] = Math.floor(Math.random() * mod);
        return map[mod];
    };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(38);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(7);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(7);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * retcode/log
 *
 * @Author xianqian.rxq@alibaba-inc.com
 * @Date 2016-10-09
 * @copyright(c) Alibaba Group Holding Limited.
 */

var isBrowser = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && !!window.navigator;
var isNodejs = (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && process + '' === '[object process]';
var isWeex = typeof callNative === 'function';

// weex
if (isWeex) {
    module.exports = __webpack_require__(21);
}
// nodejs环境
else if (isNodejs) {
        module.exports = __webpack_require__(20);
    }
    // 默认browser端
    else {
            module.exports = __webpack_require__(19);
        }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _make_rnd = function _make_rnd() {
    return +new Date() + Math.floor(Math.random() * 1000);
};

var spmId = '';

var getSpmId = function getSpmId() {
    var meta = document.getElementsByTagName('meta'),
        id = [];

    if (spmId) {
        return spmId;
    }
    //spm第一位
    for (var i = 0; i < meta.length; i++) {
        var tag = meta[i];
        if (tag && tag.name && (tag.name == 'data-spm' || tag.name == 'spm-id')) {
            id.push(tag.content);
        }
    }
    //spm第二位
    if (document.body && document.body.getAttribute('data-spm')) {
        id.push(document.body.getAttribute('data-spm'));
    }

    id = id.length ? id.join('.') : 0;

    if (id && id.indexOf('.') !== -1) {
        spmId = id;
    }

    return spmId;
};

if (!getSpmId.bind) {
    getSpmId.bind = function () {
        return getSpmId;
    };
}

module.exports = {
    sendRequest: function sendRequest(src) {
        var win = window;
        var n = 'jsFeImage_' + _make_rnd(),
            img = win[n] = new Image();
        img.onload = img.onerror = function () {
            win[n] = null;
        };
        img.src = src;
        img = null;
    },

    getCookie: function getCookie() {
        return document.cookie;
    },

    getSpmId: getSpmId
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(30);
var buildURL = __webpack_require__(33);
var parseHeaders = __webpack_require__(39);
var isURLSameOrigin = __webpack_require__(37);
var createError = __webpack_require__(10);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(32);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("developer" !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(35);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(29);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _env = __webpack_require__(42);

var logger = {
    warn: function warn(msg, e) {
        if (_env.HASCONSOLE) {
            console.warn('[DING WEB SDK Warning]:', msg);
            if (e) {
                throw e;
            } else {
                var warning = new Error('WARNING STACK TRACE');
                console.warn(warning.stack);
            }
        }
    },
    info: function info(msg) {
        if (_env.HASCONSOLE) {
            console.info('[DING WEB SDK INFO]:', msg);
        }
    },
    error: function error(msg) {
        if (_env.HASCONSOLE) {
            console.error('[DING WEB SDK ERROR]:', msg);
        }
    }
}; /**
    * Created by xiangwenwen on 2017/2/28.
    */

if (true) {}

exports.default = logger;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.axios = undefined;
exports.jsApiOAuth = jsApiOAuth;
exports.getUserId = getUserId;
exports.getUserInfo = getUserInfo;
exports.getMicroApps = getMicroApps;

var _axios2 = __webpack_require__(23);

var _axios3 = _interopRequireDefault(_axios2);

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _shared = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axios = exports.axios = _axios3.default; /**
                                              * Created by xiangwenwen on 2017/2/28.
                                              */

axios.interceptors.request.use(function (config) {
    (0, _shared.msgLog)(config.url);
    return config;
}, function (error) {
    return Promise.reject(error);
});

function request(Config, msg) {
    if (true) {
        if (!(0, _shared.isObject)(Config)) {
            _logger2.default.error('必须传入 axios 配置对象');
            return;
        }
    }
    return new Promise(function (resolve, reject) {
        axios(Config).then(function (response) {
            resolve(response);
        }).catch(function (error) {
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
function jsApiOAuth(Config, jsApiList) {
    if (true) {
        if (!(0, _shared.isObject)(Config)) {
            _logger2.default.error('必须传入 axios 配置对象');
            return;
        }
    }
    var params = Config.params || {};
    var href = params.href;
    dd.error(function (error) {
        _logger2.default.error('dd js api OAuth error' + JSON.stringify(error));
    });
    if (true) {
        if (!href) {
            _logger2.default.warn('参数 href 不能为空格');
        }
        if (href !== location.href) {
            _logger2.default.warn('传入的 href 参数 与 location.href 不相等');
        }
    }
    params.href = encodeURIComponent(href);
    Config.params = params;
    return new Promise(function (resolve, reject) {
        axios(Config).then(function (response) {
            var data = response.data;
            if (true) {
                var checks = ['agentId', 'corpId', 'timeStamp', 'nonceStr', 'signature'];
                var responseKey = Object.keys(data);
                checks.map(function (v) {
                    var checkResult = responseKey.filter(function (k) {
                        return v === k;
                    });
                    if (checkResult.length === 0) {
                        _logger2.default.warn('jsApiOAuth Response ' + v + ' 不能返回空');
                    }
                });
            }
            if (data.errcode === 0) {
                var config = {
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
        }).catch(function (error) {
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
function getUserId(Config, corpId) {
    if (true) {
        if (!Config || typeof Config === 'string') {
            _logger2.default.error('必须传入 axios 配置对象');
            return;
        }
        if (!corpId) {
            _logger2.default.error('必须传入 corpId');
            return;
        }
    }
    return new Promise(function (resolve, reject) {
        (0, _shared.authCode)(corpId).then(function (result) {
            var code = result.code;
            var params = Config.params || {};
            params.code = code;
            Config.params = params;
            request(Config, 'getUserId request bad').then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        }).catch(function (error) {
            reject(error);
        });
    });
}

/**
 * [getUserInfoRequest 获取用户详细信息]
 * @param  {[type]} Config [axios 配置对象]
 * @return {[type]}        [Promise]
 */
function getUserInfo(Config) {
    return request(Config, 'getUserInfo request bad');
}

/**
 * [getMicroApps 获取全部应用]
 * @param  {[type]} Config [axios 配置对象]
 * @return {[type]}        [Promise]
 */
function getMicroApps(Config) {
    return request(Config, 'microApps request bad');
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (wpo, failedCallback) {
    var awaits = [],
        apis = ['custom', 'error', 'performance', 'retCode', 'speed', 'log'],
        name,
        i = 0;

    var awaitFunc = function awaitFunc(apiName) {
        return function () {
            awaits.push({
                type: apiName,
                params: Array.prototype.slice.call(arguments)
            });
        };
    };

    while (name = apis[i++]) {
        wpo[name] = awaitFunc(name);
    }

    wpo.reloaded = function () {
        wpo.ready();
        for (var i = 0, len = awaits.length; i < len; i++) {
            wpo[awaits[i].type].apply(wpo, awaits[i].params);
        }
    };

    wpo.reloadFailed = function () {
        if (typeof failedCallback === 'function') {
            failedCallback();
            // wpo.reloaded();
        }
    };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (wpo, win, isLoaded, browserConf) {
    // performance初始数据
    var performanceData = {
        spm: wpo.getSpmId() //首次尝试获取spm值
    };
    // 页面已绑定的onerror事件
    var onErrorHandler = win.onerror;

    var browser = {
        /**
         * 初始化浏览器端调用
         *
         * @return {void}
         */
        init: function init() {
            this.lockPerformanceSpm();
            this.sendPerformance();
            this.bind();

            // debug模式
            if (/wpodebug\=1/.test(location.search)) {
                wpo.config.sample = 1;
                wpo.config.modVal = 1;
                wpo.debug = true;
            }
        },

        /**
         * 事件绑定
         *
         * @return {void}
         */
        bind: function bind() {
            // unload
            wpo.on(win, 'beforeunload', function () {
                wpo.clear();
                if (wpo.speed.points) {
                    wpo.speed(null, null, true);
                }
            }, true);

            // error处理
            win.onerror = function (msg, file, line, col, error) {
                if (onErrorHandler) {
                    onErrorHandler(msg, file, line, col, error);
                }

                var stack = error && error.stack;

                if (file) {
                    wpo.error('sys', msg, file, line, col, stack);
                } else {
                    wpo.error(msg);
                }
            };
        },

        /**
         * 获取performance性能数据
         *
         * @returns {{}}
         */
        analyzeTiming: function analyzeTiming() {
            var datas = {
                "rrt": ["responseStart", "requestStart"], // 整个网络请求时间（不包括unload）
                "dns": ["domainLookupEnd", "domainLookupStart"], // dns lookup
                "cnt": ["connectEnd", "connectStart"], // 建立 tcp 时间
                "ntw": ["responseStart", "fetchStart"], // network time
                "dct": ["domContentLoadedEventStart", "responseStart"], // dom content loaded time
                "flt": ["loadEventStart", "responseStart"] // full load time 页面完全加载时间
                // "flv": this._getFlashVersion(),
            };

            try {
                var timing = performance.timing;

                for (var name in datas) {
                    var start = timing[datas[name][1]];
                    var end = timing[datas[name][0]];

                    // 脏数据过滤: 部分浏览器,特别是移动端(如UC,windvane容器)某些时间点可能返回0或者null,排除掉此部分
                    if (start && end) {
                        var cost = end - start;

                        // 脏数据过滤: 耗时大于0并且小于1天(1e3 * 3600 * 24)
                        if (cost >= 0 && cost < 86400000) {
                            performanceData[name] = cost;
                        }
                    }
                }
            } catch (e) {
                // console.log('error');
            }

            return performanceData;
        },

        /**
         * 在body标签完成渲染后,提前锁定测速上报的spm值
         *
         * @returns {void}
         */
        lockPerformanceSpm: function lockPerformanceSpm() {
            // 如果首次没有成功锁定spm,则在domReady后,再尝试在meta和body上取一次
            if (!performanceData.spm) {
                var lockSpm = function lockSpm() {
                    var spm = browserConf && browserConf.getSpmId && browserConf.getSpmId();

                    if (spm) {
                        performanceData.spm = spm;
                    }
                };

                var ready = function ready() {
                    if (document.readyState === 'complete') {
                        lockSpm();
                    } else if (document.addEventListener) {
                        document.removeEventListener('DOMContentLoaded', ready, false);
                        lockSpm();
                    } else if (document.readyState === 'complete') {
                        document.detachEvent('onreadystatechange', ready);
                        lockSpm();
                    }
                };

                if (document.addEventListener) {
                    document.addEventListener('DOMContentLoaded', ready, false);
                } else if (document.attachEvent) {
                    document.attachEvent('onreadystatechange', ready);
                }
            }
        },

        /**
         * 上报performance性能数据
         */
        sendPerformance: function sendPerformance() {
            var me = this;

            if (isLoaded) {
                wpo.performance(me.analyzeTiming());
            } else {
                wpo.on(win, 'load', function () {
                    wpo.performance(me.analyzeTiming());
                }, true);
            }
        }
    };

    browser.init();
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    sendRequest: function sendRequest(url) {
        // hack: 因为nodejs和browser共用npm包,避免browser端打包的时候引入http模块
        eval('var http = require("http")');

        if (url.indexOf('//') == 0) {
            url = 'http:' + url;
        }

        var sendRequest = http.request(url, function (res) {
            if (res && res.statusCode === 200 && "developer" === 'local') {
                console.log('retcode log report success', url);
            }
        });

        // 加异常捕获避免影响业务
        sendRequest.on('error', function (err) {
            console.error('retcode log report error', err);
        });

        sendRequest.end();
    },

    getCookie: function getCookie(wpo) {
        return wpo.config.cookie;
    },

    getSpmId: function getSpmId() {
        return this.spmId;
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var browserConf = __webpack_require__(6);
var isWeb = (typeof WXEnvironment === 'undefined' ? 'undefined' : _typeof(WXEnvironment)) === 'object' && WXEnvironment.platform == 'Web';

module.exports = {
    sendRequest: function sendRequest(url) {
        var wpo = this;

        if (url.indexOf('https:') != 0 && url.indexOf('//') == 0) {
            url = 'https:' + url;
        }

        // weex的浏览器环境
        if (isWeb) {
            //window 对象和window.navigator对象都有了,但是有WXEnvironment对象
            browserConf.sendRequest(url);
        } else {
            /**
             * 使用weex fetch发起请求
             * 参考: <http://alibaba.github.io/weex/doc/modules/stream.html>
             *
             * @param options {Object}
             * @param callback {Function}
             * @param progressCallback {Function}
             * @description
             *
             *  **注意**: 必须传入3个参数,weex request才会work
             *
             */
            wpo.config.request({
                method: 'GET',
                url: url,
                type: 'json'
            }, function (response) {
                // debug模式下打印成功上报日志
                if (wpo.debug && wpo.config.toast) {
                    wpo.config.toast({
                        'message': 'log report success, ' + url + ', ' + JSON.stringify(response),
                        'duration': 5
                    });
                }
            }, function (response) {});
        }
    },

    getCookie: function getCookie(wpo) {
        return wpo.config.cookie;
    },

    getSpmId: function getSpmId() {
        return this.spmId;
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (win) {
    var browserConf = __webpack_require__(6);

    var wpo = win.__WPO || {},
        status = 2,
        isLoaded = false;

    // env设置
    wpo.env = 'browser';

    __webpack_require__(2)(wpo, win, browserConf);

    var exec = function exec() {
        __webpack_require__(3)(wpo);
        __webpack_require__(1)(wpo);
        __webpack_require__(16)(wpo, win, isLoaded, browserConf);
    };

    if (wpo.config.dynamic) {
        //
        // 自更新log.js
        //
        if (!(status = __webpack_require__(22)(wpo))) {
            __webpack_require__(15)(wpo, function () {
                exec();
                if (wpo.reloaded) {
                    wpo.reloaded();
                }
            });
            return;
        }
    }

    if (status == 2) {
        wpo.on(win, 'load', function () {
            wpo.ready();
        }, true);
    } else {
        wpo.on(win, 'load', function () {
            isLoaded = true;
        });
    }

    exec();
})(window);

module.exports = window.__WPO;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


undefined.__WPO = {
    // env设置
    env: 'nodejs'
};

__webpack_require__(2)(undefined.__WPO, undefined, __webpack_require__(17));
__webpack_require__(3)(undefined.__WPO);
__webpack_require__(1)(undefined.__WPO);

undefined.__WPO.ready(true);

module.exports = undefined.__WPO;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = {
    __WPO: {
        // env设置
        env: 'weex'
    }
};

__webpack_require__(2)(root.__WPO, root, __webpack_require__(18));
__webpack_require__(3)(root.__WPO);
__webpack_require__(1)(root.__WPO);

setTimeout(function () {
    root.__WPO.ready(true);
}, 0);

module.exports = root.__WPO;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 *
 * return
 * 0 -> need to load new version log
 * 1 -> need to load config
 * 2 -> latest version of config as well as log
 *
 */
module.exports = function (wpo) {
    var key = wpo._key,
        str,
        config,
        tag,
        url;

    var compareVer;

    var loadScript = function loadScript(url) {
        var scriptTag = document.createElement('script');

        scriptTag.src = url;
        document.getElementsByTagName('script')[0].parentNode.appendChild(scriptTag);
        return scriptTag;
    };

    var isReady,
        loadConfigByDomReady = function loadConfigByDomReady() {
        if (isReady) {
            return;
        }
        isReady = true;
        loadConfig();
    };

    var loadConfig = function loadConfig() {
        var url = '//retcode.alicdn.com/retcode/pro/config/' + wpo.getSpmId() + '.js',
            tag = loadScript(url);

        tag.onerror = function () {
            tag.onerror = null;
            wpo.error('sys', 'dynamic config error', url, 0);
            wpo.ready();
        };
    };

    var loadConfigWhenReady = function loadConfigWhenReady() {
        if (document.readyState === 'complete') {
            loadConfigByDomReady();
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', function () {
                document.removeEventListener('DOMContentLoaded', arguments.callee, false);
                loadConfigByDomReady();
            }, false);
        } else if (document.attachEvent) {
            document.attachEvent("onreadystatechange", function () {
                if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", arguments.callee);
                    loadConfigByDomReady();
                }
            });

            if (document.documentElement.doScroll && typeof window.frameElement === "undefined") (function () {
                try {
                    // If IE is used, use the trick by Diego Perini
                    // http://javascript.nwbox.com/IEContentLoaded/
                    document.documentElement.doScroll("left");
                } catch (error) {
                    setTimeout(arguments.callee, 0);
                    return;
                }
                // and execute any waiting functions
                loadConfigByDomReady();
            })();

            wpo.on(window, 'load', function () {
                loadConfigByDomReady();
            }, true);
        }
    };

    //
    // key has been overriden
    //
    if (!key) {
        return 2;
    }

    try {
        str = localStorage.getItem(key);
    } catch (e) {
        str = wpo.getCookie(key);
    }

    if (!str) {
        loadConfigWhenReady();
        return 1;
    } else {
        config = wpo.query.parse(str);

        //
        // current ver is behind dynamic ver
        //
        selfUpdate = function selfUpdate() {
            var versions = wpo.ver && wpo.ver.split('.'),
                compareVersions = config.ver && config.ver.split('.');

            //
            // force not updating
            //
            if (!versions || !compareVersions) {
                return false;
            }

            for (var i = 0, len = versions.length; i < len; i++) {
                if (compareVersions[i]) {
                    if (parseInt(versions[i], 10) < parseInt(compareVersions[i], 10)) {
                        return true;
                    }
                }
            }

            return false;
        };
        //
        // 动态更新脚本自己
        //
        if (selfUpdate()) {
            // url = '//g-assets.daily.taobao.net/retcode/retcodelog/' + config.ver + '/log.js';
            url = '//g.alicdn.com/retcode/log/' + config.ver + '/log.js';
            tag = loadScript(url);
            tag.onload = function () {
                tag.onload = null;
                wpo.reloaded();
            };
            tag.onerror = function () {
                tag.onerror = null;
                wpo.error('sys', 'self update error', url, 0);
                wpo.reloadFailed();
            };
            return 0;
        }
        //
        // 从localstorage里读取数据
        //
        else if (parseInt(config.exp, 10) < new Date().getTime()) {
                loadConfigWhenReady();
                return 1;
            }

        wpo.setConfig({
            sample: parseInt(config.sample, 10)
        });
    }

    return 2;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(24);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(11);
var Axios = __webpack_require__(26);
var defaults = __webpack_require__(4);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(8);
axios.CancelToken = __webpack_require__(25);
axios.isCancel = __webpack_require__(9);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(40);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(8);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(4);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(27);
var dispatchRequest = __webpack_require__(28);
var isAbsoluteURL = __webpack_require__(36);
var combineURLs = __webpack_require__(34);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(31);
var isCancel = __webpack_require__(9);
var defaults = __webpack_require__(4);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(10);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response));
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by xiangwenwen on 2017/2/28.
                                                                                                                                                                                                                                                                               */

exports.msgLog = msgLog;
exports.ut = ut;
exports.authCode = authCode;
exports.isObject = isObject;

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _retcodelog = __webpack_require__(5);

var _retcodelog2 = _interopRequireDefault(_retcodelog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function msgLog(opt) {
    _retcodelog2.default.log('DING WEB INTERFACE SDK API' + opt.url, 1);
}

function ut(opt) {
    dd.ready(function () {
        try {
            dd.biz.util.ut({
                key: opt.key,
                value: opt.value || '',
                onSuccess: opt.onSuccess,
                onFail: opt.onFail
            });
        } catch (e) {
            _logger2.default.error(e.stack);
        }
    });
}

function authCode(corpId) {
    return new Promise(function (resolve, reject) {
        dd.ready(function () {
            dd.runtime.permission.requestAuthCode({
                corpId: corpId,
                onSuccess: function onSuccess(result) {
                    resolve(result);
                },
                onFail: function onFail(err) {
                    reject(err);
                }
            });
        });
    });
}

function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by xiangwenwen on 2017/2/28.
 */

var HASCONSOLE = exports.HASCONSOLE = (typeof console === 'undefined' ? 'undefined' : _typeof(console)) !== undefined;
var ISBROWSER = exports.ISBROWSER = typeof window !== 'undefined' && (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object';
var UA = exports.UA = ISBROWSER && window.navigator.userAgent.toLowerCase();

exports.default = {
    HASCONSOLE: HASCONSOLE,
    ISBROWSER: ISBROWSER,
    UA: UA
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _request = __webpack_require__(14);

var sdk = _interopRequireWildcard(_request);

var _retcodelog = __webpack_require__(5);

var _retcodelog2 = _interopRequireDefault(_retcodelog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by xiangwenwen on 2017/2/28.
 */

var dingSDK = null;

function init() {
    _retcodelog2.default.setConfig({
        //抽样分母，1代表100%上报，10代表10%上报，100代表1%上报
        sample: 1,
        // spmId必须设置,如果没写默认值,会自动抓页面的spm
        spmId: 'DINGDING_ICEPY'
    });
    _retcodelog2.default.log('DING WEB INTERFACE SDK START', 1);
    return sdk;
}

if (!dingSDK) {
    dingSDK = init();
}

exports.default = dingSDK;

/***/ })
/******/ ]);
});
//# sourceMappingURL=dingWebInterfaceSDK.js.map