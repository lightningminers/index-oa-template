<template>
  <div class="wrapper">
    <text class="title">Hello icepy</text>
    <text class="subtitle" v-on:click="getClick">{{ link }}</text>
  </div>
</template>
<script>
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var dingtalk = require('./weex-dingtalk.js');
    var env = require('./lib/env.js');
    var globalEvent = weex.requireModule('globalEvent');
    var APIHOST = env.APIHOST;
    export default {
        name: 'hello',
        data: function(){
            return {
                link: 'DingTalk'
            }
        },
        mounted: function(){
            var signRequest = {
                method: 'GET',
                type: 'json',
                url : APIHOST + '/api/jsapi-oauth?href=' + weex.config.originalUrl
            }
            console.log('wower ----',signRequest);
            console.log('wower ----', weex.config.originalUrl);
            stream.fetch(signRequest,function(res){
                if (res.ok){
                    var data = res.data;
                    console.log('icepy --- ', data);
                } else {
                    console.log('icepy error', res.status);
                }
            });
            console.log('icepy');
            dingtalk.ready(function(){
                var dd = dingtalk.apis;
                // 设置导航
                dd.biz.navigation.setTitle({
                    title: 'icepy'
                });
                dingtalk.on('navTitle',function(){
                    modal.toast({
                      message: 'Hello icepy',
                      duration: 0.3
                    });
                });
            });

            dingtalk.ready(function(){
                var dd = dingtalk.apis;
                dd.biz.navigation.setLeft({
                    show: true,//控制按钮显示， true 显示， false 隐藏， 默认true
                    control: true,//是否控制点击事件，true 控制，false 不控制， 默认false
                    showIcon: false,//是否显示icon，true 显示， false 不显示，默认true； 注：具体UI以客户端为准
                    text: '回家'//控制显示文本，空字符串表示显示默认文本
                });
            });
            globalEvent.addEventListener('navLeftButton',function(){
                modal.toast({
                  message: 'Hello icepy',
                  duration: 0.3
                });
            });
        },
        methods: {
            getClick: function(){
                dingtalk.ready(function(error,respon){
                    if (error){
                        modal.toast({
                          message: JSON.stringify(error),
                          duration: 0.3
                        });
                      return;
                    }
                    for (var key in dingtalk.apis){
                        console.log('icepy ---', key);
                        console.log('icepy ---', dingtalk.apis[key]);
                    }
                    var dd = dingtalk.apis;
                    dd.biz.util.openLink({
                        url: 'https://github.com/icepy'
                    })
                    console.log(dingtalk.apis);
                });

            }
        }
    }
</script>
<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #333377;
  }
  .title {
    font-size: 60px;
    color: #505050;
    text-align: center;
  }
  .subtitle {
    display: block;
    font-size: 30px;
    color: #AAAAAA;
    xxxx: static;
    text-align: center;
    margin-top: 20px;
  }
</style>
