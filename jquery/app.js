(function(){
    var OPENAPIHOST = 'http://30.27.108.98:3000';
    var isDingtalk = /DingTalk/.test(navigator.userAgent);
    var proper = {};
    var _userId = '';
    var _userInfo = {};
    Object.defineProperty(proper,'userId',{
        enumerable: true,
        get: function(){
            return _userId;
        },
        set: function(newValue){
            _userId = newValue;
            getUserInfo(proper.userId);
        }
    });
    Object.defineProperty(proper, 'userInfo',{
        enumerable: true,
        get: function(){
            return _userInfo;
        },
        set: function(newValue){
            _userInfo = newValue;
            updateUI();
        }
    });

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
    function openLink(url, corpId){
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

    function updateName(){
        var dateTime = new Date().getHours();
        var isAdmin = proper.userInfo.isAdmin;
        var name = proper.userInfo.name;
        var nb = {};
        if(name){
            if (dateTime >= 5 && dateTime <= 12) {
                nb.wh = isAdmin ? '早上好，管理员，' + name : '早上好，' + name;
                nb.whImage = 'https://gw.alicdn.com/tps/TB1ubtjOFXXXXbzXpXXXXXXXXXX-36-36.jpg';
            } else if (dateTime > 12 && dateTime <= 18) {
                nb.wh = isAdmin ? '下午好，管理员，' + name : '下午好，' + name;
                nb.whImage = 'https://gw.alicdn.com/tps/TB1ubtjOFXXXXbzXpXXXXXXXXXX-36-36.jpg';
            } else {
                nb.wh = isAdmin ? '晚上好，管理员，' + name : '晚上好，' + name;
                nb.whImage = 'https://gw.alicdn.com/tps/TB15FNwOFXXXXbqXXXXXXXXXXXX-36-36.jpg';
            }
        }
        return nb;
    }

    function updateUI(){
        var nb = updateName();
        var html = '<img src="'+ nb.whImage+'" class="admin-image">'
        + '<div class="admin-hello">'
        + nb.wh
        + '</div>';
        $('.admin-manager').html(html);
    }

    function getUserId(corpId){
        authCode(corpId).then(function(result){
            var code = result.code;
            var getUserIdRequest = {
                url: OPENAPIHOST + '/api/get-user-info?code='+code,
                type: 'GET',
                dataType: 'json',
                success: function(response){
                    if (response.errcode === 0){
                        proper.userId = response.userid;
                    } else {
                        alert(JSON.stringify(response) + 'getUserId');
                    }
                },
                error: function(err){
                    alert(JSON.stringify(err));
                }
            }
            $.ajax(getUserIdRequest);
        }).catch(function(error){
            alert(JSON.stringify(error));
        });
    }

    function authCode(corpId){
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

    function getUserInfo(userid){
        var getUserInfoRequest = {
            url: OPENAPIHOST + '/api/get?userid='+userid,
            type: 'GET',
            dataType: 'json',
            success: function(response){
                if (response.errcode === 0){
                    proper.userInfo = response;
                } else {
                    alert(JSON.stringify(response) + 'getUserInfo');
                }
            },
            error: function(err){

            }
        };
        $.ajax(getUserInfoRequest);
    }

    $(function(){

        $('.banner-image').on('click',function(){
            const url = 'https://alimarket.m.taobao.com/markets/dingtalk/cydd?lwfrom=20161118115327653';
            openLink(url);
        });

        $('.item').on('click',function(){

        });
        dd.error(function(err){
            alert(JSON.stringify(err));
        });
        var originalUrl = location.href;
        var corpId = parseCorpId(originalUrl, 'corpId');
        var jsApiList = [];
        var signRequest = {
            url: OPENAPIHOST + '/api/jsapi-oauth?href='+encodeURIComponent(location.href),
            type: 'GET',
            dataType: 'json',
            success: function(response){
                if (response.errcode === 0){
                    const config = {
                        agentId: response.agentId || '',
                        corpId: response.corpId || '',
                        timeStamp: response.timeStamp || '',
                        nonceStr: response.nonceStr || '',
                        signature: response.signature || '',
                        jsApiList: jsApiList || []
                    };
                    dd.config(config);
                    getUserId(corpId);
                } else {
                    alert(JSON.stringify(response) + 'sign');
                }
            },
            error: function(){

            }
        };
        $.ajax(signRequest);
    });
})();
